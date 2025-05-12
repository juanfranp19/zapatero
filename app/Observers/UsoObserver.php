<?php

namespace App\Observers;

use App\Models\Uso;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class UsoObserver
{
    /**
     * Evento que se ejecuta antes de actualizar o crear un uso
     */
    public function saving(Uso $uso): void
    {
        if (!App::runningInConsole()) {

            // si la hora de fin es antes que la hora de inicio, aborta la creación del uso
            if ($uso->hora_inicio > $uso->hora_fin) abort(400, 'La hora de fin no puede ser antes que la hora de inicio');

            // aborta la creación del uso si está dentro del horario de otro uso de ese equipo
            $usoExistente = Uso::where('equipo_id', $uso->equipo_id) // busca el mismo equipo
                ->where('fecha_uso', $uso->fecha_uso) // busca la misma fecha de uso
                ->where(function ($query) use ($uso) {
                    $query->where(function ($q) use ($uso) {
                        $q->where('hora_inicio', '<', $uso->hora_fin) // busca las horas que estén entre la horas de inicio y fin
                            ->where('hora_fin', '>', $uso->hora_inicio);
                    });
                })->exists(); // si existe, entonces es que hay algún uso que coincide con el día y las horas del nuevo uso
            if ($usoExistente) abort(400, 'Las horas de uso de ese equipo coinciden con otros usos');

            // asigna el trabajador_id del usuario que crea el uso
            $user = Auth::user();
            $uso->trabajador_id = $user->trabajador['id'];
        }
    }
}
