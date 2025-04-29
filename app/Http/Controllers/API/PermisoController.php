<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermisoResource;
use App\Models\Permiso;
use Illuminate\Http\Request;

class PermisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $permisos = PermisoResource::collection(
                Permiso::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $permisos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // obtiene el contenido del json y lo transforma a array asociativo
            $permiso = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $permiso = Permiso::create($permiso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new PermisoResource($permiso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $permiso = Permiso::findOrFail($id);

        // lo devuelve a través del recurso
        return new PermisoResource($permiso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $permiso = Permiso::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($permiso) {

            // verifica que se encuentren los campos
            $request->validate([
                'desde' => 'required',
                'hasta' => 'required',
                'numusos' => 'required',
                'periodo_uso' => 'required',
                'equipo_id' => 'required',
                'trabajador_id' => 'required'
            ]);

            // los actualiza
            $permiso->desde = $request->input('desde');
            $permiso->hasta = $request->input('hasta');
            $permiso->numusos = $request->input('numusos');
            $permiso->periodo_uso = $request->input('periodo_uso');
            $permiso->equipo_id = $request->input('equipo_id');
            $permiso->trabajador_id = $request->input('trabajador_id');
            $permiso->save();

            // lo devuelve mediante el recurso
            return response()->json(new PermisoResource($permiso), 200);

        } else {
            return response()->json(['message' => 'Permiso no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $permiso = Permiso::find($id);

        if ($permiso) {

            // lo elimina
            $permiso->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Permiso eliminado'], 200);

        } else {
            return response()->json(['message' => 'Permiso no encontrado'], 404);
        }
    }
}
