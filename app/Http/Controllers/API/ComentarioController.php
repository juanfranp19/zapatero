<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use App\Models\Comentario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Comentario::class);

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $comentarios = ComentarioResource::collection(
                Comentario::orderBy('id')->paginate(5)
            );

            return $comentarios;

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

            Gate::authorize('create', Comentario::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $comentario = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $comentario = Comentario::create($comentario);

            // en el observer se le asigna el user_id

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new ComentarioResource($comentario);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        Gate::authorize('view', Comentario::class);

        // encuentra el modelo
        $comentario = Comentario::findOrFail($id);

        // lo devuelve a través del recurso
        return new ComentarioResource($comentario);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $comentario = Comentario::find($id);

            Gate::authorize('update', [Comentario::class, $comentario]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($comentario) {

            // verifica que se encuentren los campos
            $request->validate([
                'comentario' => 'required',
                'fecha' => 'required',
                //'user_id' => 'required'
            ]);

            // los actualiza
            $comentario->comentario = $request->input('comentario');
            $comentario->fecha = $request->input('fecha');
            // en el observer se le asigna el user_id
            $comentario->save();

            // lo devuelve mediante el recurso
            return response()->json(new ComentarioResource($comentario), 200);

        } else {
            return response()->json(['message' => 'Comentario no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $comentario = Comentario::find($id);

        Gate::authorize('delete', [Comentario::class, $comentario]);

        if ($comentario) {

            // lo elimina
            $comentario->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Comentario eliminado'], 200);

        } else {
            return response()->json(['message' => 'Comentario no encontrado'], 404);
        }
    }
}
