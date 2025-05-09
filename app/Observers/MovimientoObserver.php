<?php

namespace App\Observers;

use App\Models\Equipo;
use App\Models\Movimiento;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class MovimientoObserver
{
    /**
     * Asigna el id del trabajador del usuario que crea y actualiza el movimiento
     */
    public function saving(Movimiento $movimiento): void
    {
        if (!App::runningInConsole()) {

            $user = Auth::user();

            $movimiento->trabajador_id = $user->trabajador['id'];
        }
    }

    /**
     * función que comprueba que la sala del aquipo coincida con el origen y no lo haga con el destino
     */
    public function creating(Movimiento $movimiento): void
    {
        if (! App::runningInConsole()) {

            // equipo del movimineto
            $equipo = Equipo::where('id', $movimiento->equipo_id);

            // si el origen no es el mismo de donde está el equipo
            if (! $equipo->where('sala_id', $movimiento->origen)->exists()) abort(400, 'el equipo no se encuentra en el origen');

            // si la destino es el mismo que la sala donde mismo está
            if ($equipo->where('sala_id', $movimiento->destino)->exists()) abort(400, 'el equipo ya está en el destino');
        }
    }

    /**
     * actualiza la información del equipo acuerdo con el movimiento una vez creado
     */
    public function created(Movimiento $movimiento): void
    {
        $equipo = Equipo::findOrFail($movimiento->equipo_id);

        $equipo->sala_id = $movimiento->destino;
        $equipo->save();
    }
}
