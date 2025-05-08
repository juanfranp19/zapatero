<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccesoResource;
use App\Models\Acceso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AccesoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Acceso::class);

            // desde el recurso, saca todos los datos de accesos, ordenador por id y de 5 en 5
            $accesos = AccesoResource::collection(
                Acceso::orderBy('id')->paginate(5)
            );

            return $accesos;

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            Gate::authorize('create', Acceso::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $acceso = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $acceso = Acceso::create($acceso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new AccesoResource($acceso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {

            // encuentra el modelo
            $acceso = Acceso::findOrFail($id);

            Gate::authorize('view', [Acceso::class, $acceso]);

            // lo devuelve a través del recurso
            return new AccesoResource($acceso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            Gate::authorize('update', Acceso::class);

            // encuentra el modelo
            $acceso = Acceso::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($acceso) {

            // verifica que se encuentren los campos
            $request->validate([
                'fecha_entrada' => 'required',
                'fecha_salida' => 'required',
                'trabajador_id' => 'required'
            ]);

            // los actualiza
            $acceso->fecha_entrada = $request->input('fecha_entrada');
            $acceso->fecha_salida = $request->input('fecha_salida');
            $acceso->trabajador_id = $request->input('trabajador_id');
            $acceso->save();

            // lo devuelve mediante el recurso
            return response()->json(new AccesoResource($acceso), 200);

        } else {
            return response()->json(['message' => 'Acceso no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $acceso = Acceso::find($id);

        Gate::authorize('delete', Acceso::class);

        if ($acceso) {

            // lo elimina
            $acceso->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Acceso eliminado'], 200);

        } else {
            return response()->json(['message' => 'Acceso no encontrado'], 404);
        }
    }
}
