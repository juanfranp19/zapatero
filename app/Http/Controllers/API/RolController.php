<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\RolResource;
use App\Models\Rol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Rol::class);

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $roles = RolResource::collection(
                Rol::orderBy('id')->get(),
            );

            return response()->json([
                'data' => $roles,
            ], 200);

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

            Gate::authorize('create', Rol::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $rol = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $rol = Rol::create($rol);

            // devuleve el modelo creado desde el recurso
            return response()->json([
                'data' => new RolResource($rol),
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $rol = Rol::findOrFail($id);

        Gate::authorize('view', Rol::class);

        // lo devuelve a través del recurso
        return response()->json([
            'data' => new RolResource($rol),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Gate::authorize('update', Rol::class);

        // encuentra el modelo
        $rol = Rol::findOrFail($id);

        // verifica que se encuentren los campos
        $request->validate([
            'nombre' => 'required',
        ]);

        // los actualiza
        $rol->nombre = $request->input('nombre');
        $rol->save();

        // devuelve respuesta vacía
        return response('', 204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {

            Gate::authorize('delete', Rol::class);

            // encuentra el modelo
            $rol = Rol::findOrFail($id);

            // lo elimina
            $rol->delete();

            // devuelve mensaje vacío
            return response('', 204);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
