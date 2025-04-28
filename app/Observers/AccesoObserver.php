<?php

namespace App\Observers;

use App\Models\Acceso;

class AccesoObserver
{
    /**
     * función que aborta si el trabajador entra sin haber salido
     */
    public function creating(Acceso $acceso): void
    {
        // busca si hay un valor null en la columno fecha_salida del trabajador del acceso
        $estaDentro = Acceso::where('trabajador_id', $acceso->trabajador_id)
            ->where('fecha_salida', null)->first();

        if ($estaDentro) abort(400, 'imposible entrar sin haber salido'); //return response()->json(['error' => 'imposible entrar sin haber salido'], 400);
    }

    /**
     * función que aborta si el trabajador sale sin haber entrado
     */
    public function updating(Acceso $acceso): void
    {
        // busca si hay un valor null en la columno fecha_salida del trabajador del acceso
        $estaDentro = Acceso::where('trabajador_id', $acceso->trabajador_id)
            ->where('fecha_salida', null)->first();

        if (! $estaDentro) abort(400, 'imposible salir sin haber entrado');
    }
}
