<?php

namespace App\Observers;

use App\Models\Trabajador;

class TrabajadorObserver
{

    /**
     * Antes de actualizar, asigna los siguientes valores como los que tenía por defecto el trabajador si no se han actualizado
     */
    public function updating(Trabajador $trabajador): void
    {
        $datosTrabajador = Trabajador::find($trabajador->id)->first();

        if (!$trabajador->imagen) $trabajador->imagen = $datosTrabajador->imagen;
        if (!$trabajador->user_id) $trabajador->user_id = $datosTrabajador->user_id;
    }

}
