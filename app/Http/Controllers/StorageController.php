<?php

namespace App\Http\Controllers;

class StorageController extends Controller
{
    /**
     * Muestra los archivos privados
     */
    public function showPrivate($tabla, $columna, $archivo)
    {
        // forma el enlace con la tabla y el archivo
        $path = storage_path('app/private/'.$tabla.'/'.$columna.'/'.$archivo);

        if (!file_exists($path)) {
            abort(404, 'Archivo no encontrado');
        }

        // lo muestra
        return response()->file($path);
    }

    /**
     * Muestra los archivos públicos
     */
    public function showPublic($tabla, $columna, $archivo)
    {
        // forma el enlace con la tabla y el archivo
        $path = storage_path('app/public/'.$tabla.'/'.$columna.'/'.$archivo);

        if (!file_exists($path)) {
            abort(404, 'Archivo no encontrado');
        }

        // lo muestra
        return response()->file($path);
    }
}
