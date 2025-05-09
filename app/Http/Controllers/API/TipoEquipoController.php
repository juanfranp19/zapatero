<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TipoEquipoResource;
use App\Models\TipoEquipo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TipoEquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', TipoEquipo::class);

            // desde el recurso, saca todos los datos, ordenados por nombre
            $tiposEquipo = TipoEquipoResource::collection(
                TipoEquipo::orderBy('nombre')->get()
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $tiposEquipo;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            Gate::authorize('create', TipoEquipo::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $tipoEquipo = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $tipoEquipo = TipoEquipo::create($tipoEquipo);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new TipoEquipoResource($tipoEquipo);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        Gate::authorize('view', TipoEquipo::class);

        // encuentra el modelo
        $tipoEquipo = TipoEquipo::findOrFail($id);

        // lo devuelve a través del recurso
        return new TipoEquipoResource($tipoEquipo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            Gate::authorize('update', TipoEquipo::class);

            // encuentra el modelo
            $tipoEquipo = TipoEquipo::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($tipoEquipo) {

            // verifica que se encuentren los campos
            $request->validate([
                'nombre' => 'required',
            ]);

            // los actualiza
            $tipoEquipo->nombre = $request->input('nombre');
            $tipoEquipo->save();

            // lo devuelve mediante el recurso
            return response()->json(new TipoEquipoResource($tipoEquipo), 200);

        } else {
            return response()->json(['message' => 'Tipo de equipo no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Gate::authorize('delete', TipoEquipo::class);

        // encuentra el modelo
        $tipoEquipo = TipoEquipo::find($id);

        if ($tipoEquipo) {

            // lo elimina
            $tipoEquipo->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Tipo de equipo eliminado'], 200);

        } else {
            return response()->json(['message' => 'Tipo de equipo no encontrado'], 404);
        }
    }
}
