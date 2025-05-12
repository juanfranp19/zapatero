<?php

namespace App\Observers;

use App\Models\Trabajador;
use Illuminate\Support\Facades\App;

class TrabajadorObserver
{
    public function creating(Trabajador $trabajador): void
    {
        if (!App::runningInConsole()) {

            if (Trabajador::where('nombre', $trabajador->dni)->exists())    abort(400, 'Ya existe un trabajador con ese DNI.');

            // si hay un archivo en el campo de imagen
            if (request()->hasFile('imagen')) {

                // coge el objeto File
                $archivo = request()->file('imagen');
                // saca el nombre
                $nombre = $archivo->getClientOriginalName();

                // si la imagen es repetida, aborta la creación del trabajador
                if (Trabajador::where('imagen', $nombre)->exists()) {
                    abort(400, 'Ya existe un trabajador con esa imagen.');
                }

                // lo almacena en el servidor
                $archivo->storeAs('trabajadores', $nombre, 'local');
                // guarda el nombre del archivo en la tabla
                $trabajador->imagen = $nombre;

            } else {
                $trabajador->imagen = null;
            }
        }
    }

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
