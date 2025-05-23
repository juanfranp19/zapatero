<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SalaResource;
use App\Models\Sala;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class SalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Sala::class);

            // desde el recurso, saca todos los datos, ordenados por nombre
            $salas = SalaResource::collection(
                Sala::orderBy('nombre')->get()
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $salas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            Gate::authorize('create', Sala::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $sala = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $sala = Sala::create($sala);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new SalaResource($sala);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        Gate::authorize('view', Sala::class);

        // encuentra el modelo
        $sala = Sala::findOrFail($id);

        // lo devuelve a través del recurso
        return new SalaResource($sala);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            Gate::authorize('update', Sala::class);

            // encuentra el modelo
            $sala = Sala::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($sala) {

            // verifica que se encuentren los campos
            $request->validate([
                'nombre' => 'required',
            ]);

            // los actualiza
            $sala->nombre = $request->input('nombre');
            $sala->accesible = $request->input('accesible');
            $sala->save();

            // lo devuelve mediante el recurso
            return response()->json(new SalaResource($sala), 200);

        } else {
            return response()->json(['message' => 'Sala no encontrada'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $sala = Sala::find($id);

        if ($sala) {

            Gate::authorize('delete', Sala::class);

            // lo elimina
            $sala->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Sala eliminada'], 200);

        } else {
            return response()->json(['message' => 'Sala no encontrada'], 404);
        }
    }
}
