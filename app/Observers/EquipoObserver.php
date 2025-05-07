<?php

namespace App\Observers;

use App\Models\Equipo;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class EquipoObserver
{
    /**
     * Handle the Equipo "creating" event.
     */
    public function creating(Equipo $equipo): void
    {
        // solo se ejecuta si no se crean equipos por consola (seeder)
        if (! App::runningInConsole()) {

            // escribir en el log si se elimina el archivo o no
            if (request()->hasFile('descripcion')) {

                // coge el objeto File
                $archivo = request()->file('descripcion');
                // saca el nombre
                $nombre = $archivo->getClientOriginalName();

                // si la descripcion es repetida, aborta la creación del equipo
                if (Equipo::where('descripcion', $nombre)->exists()) {
                    abort(400, 'Ya existe un equipo con esa descripcion.');
                }

                // lo almacena en el servidor
                $archivo->storeAs('equipos', $nombre, 'public');
                // guarda el nombre del archivo en la tabla equipos
                $equipo->descripcion = $nombre;

            } else {
                $equipo->descripcion = null;
            }


            if (request()->hasFile('imagen')) {

                // coge el objeto File
                $archivo = request()->file('imagen');
                // saca el nombre
                $nombre = $archivo->getClientOriginalName();

                // si la imagen es repetida, aborta la creación del equipo
                if (Equipo::where('imagen', $nombre)->exists()) {
                    abort(400, 'Ya existe un equipo con esa imagen.');
                }

                // lo almacena en el servidor
                $archivo->storeAs('equipos', $nombre, 'public');
                // guarda el nombre del archivo en la tabla equipos
                $equipo->imagen = $nombre;

            } else {
                $equipo->imagen = null;
            }

        }
    }

    /**
     * función para actualizar imagenes del storage
     */
    public function updated(Equipo $equipo): void
    {
        // se comprueba si la descripcion ha cambiado, y si ha cambiado, que no sea null
        if ($equipo->isDirty('descripcion') && $equipo->isDirty('descripcion') != null) {

            // ruta de la antigua descripcion
            $oldDesc = $equipo->getOriginal('descripcion');

            // Si el archivo antiguo existe, lo eliminamos
            if (Storage::disk('public')->exists($oldDesc)) {
                Storage::disk('public')->delete($oldDesc);
            }

            // añade la nueva descripción en el storage
            //$nuevaDesc = request()->file('descripcion');
            Storage::disk('public')->put($equipo->descripcion, $equipo->descripcion);
        }

        // se comprueba si la imagen ha cambiado, y si ha cambiado, que no sea null
        if ($equipo->isDirty('imagen') && $equipo->isDirty('imagen') != null) {

            // ruta de la antigua imagen
            $oldImg = $equipo->getOriginal('imagen');

            // Si el archivo antiguo existe, lo eliminamos
            if (Storage::disk('public')->exists($oldImg)) {
                Storage::disk('public')->delete($oldImg);
            }

            // añade la nueva descripción en el storage
            //$nuevaImg = request()->file('imagen');
            Storage::disk('public')->put($equipo->imagen, $equipo->imagen);
        }
    }

    /**
     * función para antes de que se elimine el equipo
     */
    public function deleting(Equipo $equipo): void
    {
        if ($equipo->descripcion != null) {

            // escribir en el log si se elimina el archivo o no
            if (Storage::disk('public')->delete($equipo->descripcion)) {
                Log::info('archivo eliminado');
            } else {
                Log::error('error al eliminar el archivo descripción');
            }
        }

        if ($equipo->imagen != null) {

            // escribir en el log si se elimina el archivo o no
            if (Storage::disk('public')->delete($equipo->imagen)) {
                Log::info('archivo eliminado');
            } else {
                Log::error('error al eliminar el archivo descripción');
            }
        }
    }
}
