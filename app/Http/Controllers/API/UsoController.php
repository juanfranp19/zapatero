<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsoResource;
use App\Models\Uso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class UsoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Uso::class);

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $usos = UsoResource::collection(
                Uso::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $usos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            Gate::authorize('create', Uso::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $uso = $request->all();

            // crea el modelo con los datos transformados
            $uso = Uso::create($uso);
            // el trabajador_id lo asigna el observer

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new UsoResource($uso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        Gate::authorize('view', Uso::class);

        // encuentra el modelo
        $uso = Uso::findOrFail($id);

        // lo devuelve a través del recurso
        return new UsoResource($uso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $uso = Uso::find($id);

            Gate::authorize('update', [Uso::class, $uso]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($uso) {

            // verifica que se encuentren los campos
            $request->validate([
                'fecha_uso' => 'required',
                //'hora_inicio' => 'required',
                //'hora_fin' => 'required',
                'equipo_id' => 'required',
                //'trabajador_id' => 'required'
            ]);

            // los actualiza
            $uso->fecha_uso = $request->input('fecha_uso');
            $uso->hora_inicio = $request->input('hora_inicio');
            $uso->hora_fin = $request->input('hora_fin');
            $uso->equipo_id = $request->input('equipo_id');
            // el trabajador_id lo asigna el observer
            $uso->save();

            // lo devuelve mediante el recurso
            return response()->json(new UsoResource($uso), 200);

        } else {
            return response()->json(['message' => 'Uso no encontrado'], 404);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $uso = Uso::find($id);

        Gate::authorize('delete', [Uso::class, $uso]);

        if ($uso) {

            // lo elimina
            $uso->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Uso eliminado'], 200);

        } else {
            return response()->json(['message' => 'Uso no encontrado'], 404);
        }
    }
}
