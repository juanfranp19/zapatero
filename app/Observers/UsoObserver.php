<?php

namespace App\Observers;

use App\Models\Trabajador;
use App\Models\Uso;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UsoObserver
{
    /**
     * Evento que se ejecuta antes de crear un uso
     */
    public function creating(Uso $uso): void
    {
        if (!App::runningInConsole()) {

            // obtiene el trabajador que intenta crear el uso a partir del usuario autenticado
            $user = Auth::user();
            $trabajador = Trabajador::where('user_id', $user->id)->first();

            // muestra el id del trabajador en logs
            Log::info($trabajador->id);

            // encuetra a un trabajador que no haya finalizado un uso
            $trabajadorYaUsando = Uso::where('trabajador_id', $trabajador->id)
                ->whereNull('hora_fin')
                ->exists();

            // los usuarios que usos sin terminar, no pueden crear otro
            if ($trabajadorYaUsando) abort(409, 'Tienes ya un equipo en uso');

            // comprueba que hora_inicio no sea después de hora_fin
            if ($uso->hora_fin && $uso->hora_inicio > $uso->hora_fin) {
                abort(409, 'La hora de fin no puede ser antes que la hora de inicio.');
            }

            // comprueba que no se crucen horas de mismos usos de mismos equipos
            $usoExistente = Uso::where('equipo_id', $uso->equipo_id)
                ->where('fecha_uso', $uso->fecha_uso)
                ->where(function ($query) use ($uso) {

                    $query
                        // donde hay usos sin terminar (hora_fin null)
                        ->orWhere(function ($q) use ($uso) {
                            $q->whereNull('hora_fin')
                                ->where('hora_inicio', '<=', $uso->hora_inicio); // el uso ya empezó y aún no terminó
                        })

                        // donde coinciden horas de otros usos ya terminados
                        ->orWhere(function ($q) use ($uso) {
                            $q->whereNotNull('hora_fin')
                                ->where(function ($q) use ($uso) {
                                    $q->where('hora_inicio', '<', $uso->hora_fin ?? $uso->hora_inicio)
                                        ->where('hora_fin', '>', $uso->hora_inicio);
                                });
                        });
                })->exists();

            // Si hay uso conflictivo, se aborta la creación
            if ($usoExistente) {
                abort(409, 'Las horas de uso de ese equipo coinciden con otros usos');
            }
        }
    }

    /**
     * Evento que se ejecuta antes de actualizar o crear un uso
     */
    public function saving(Uso $uso): void
    {
        if (!App::runningInConsole()) {

            // asigna el trabajador_id del usuario que crea el uso
            $user = Auth::user();
            $uso->trabajador_id = $user->trabajador['id'];
        }
    }
}
