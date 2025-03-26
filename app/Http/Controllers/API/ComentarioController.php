<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use App\Models\Comentario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $comentarios = ComentarioResource::collection(
                Comentario::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $comentarios;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $comentario = json_decode($request->getContent(), true);
            $comentario = Comentario::create($comentario);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new ComentarioResource($comentario);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $comentario = Comentario::findOrFail($id);
        return new ComentarioResource($comentario);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
        $comentario = Comentario::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($comentario) {

            $request->validate([
                'comentario' => 'required',
                'fecha' => 'required',
                'usuario_nombre' => 'required'
            ]);

            $comentario->comentario = $request->input('comentario');
            $comentario->fecha = $request->input('fecha');
            $comentario->usuario_nombre = $request->input('usuario_nombre');
            $comentario->save();

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
        $comentario = Comentario::find($id);
        if ($comentario) {
            $comentario->delete();
            return response()->json(['message' => 'Comentario eliminado'], 200);
        } else {
            return response()->json(['message' => 'Comentario no encontrado'], 404);
        }
    }
}
