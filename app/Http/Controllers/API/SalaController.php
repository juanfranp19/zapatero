<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SalaResource;
use App\Models\Sala;
use Illuminate\Http\Request;

class SalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $salas = SalaResource::collection(
                Sala::orderBy('id')->paginate(5)
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

            // lo elimina
            $sala->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Sala eliminada'], 200);

        } else {
            return response()->json(['message' => 'Sala no encontrada'], 404);
        }
    }
}
