<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrabajadorResource;
use App\Models\Trabajador;
use Illuminate\Http\Request;

class TrabajadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $trabajadores = TrabajadorResource::collection(
                Trabajador::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $trabajadores;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $trabajador = json_decode($request->getContent(), true);
            $trabajador = Trabajador::create($trabajador);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new TrabajadorResource($trabajador);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $trabajador = Trabajador::findOrFail($id);
        return new TrabajadorResource($trabajador);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $trabajador = Trabajador::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($trabajador) {

            $request->validate([
                'dni' => 'required',
                'activo' => 'required',
                'apellidos' => 'required',
                'borrado' => 'required',
                'nombre' => 'required',
                'url_imagen' => 'required',
                'user_id' => 'required'
            ]);

            $trabajador->dni = $request->input('dni');
            $trabajador->activo = $request->input('activo');
            $trabajador->apellidos = $request->input('apellidos');
            $trabajador->borrado = $request->input('borrado');
            $trabajador->nombre = $request->input('nombre');
            $trabajador->url_imagen = $request->input('url_imagen');
            $trabajador->user_id = $request->input('user_id');
            $trabajador->save();

            return response()->json(new TrabajadorResource($trabajador), 200);

        } else {
            return response()->json(['message' => 'Trabajador no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $trabajador = Trabajador::find($id);

        if ($trabajador) {

            $trabajador->delete();
            return response()->json(['message' => 'trabajador eliminado'], 200);

        } else {
            return response()->json(['message' => 'trabajador no encontrado'], 404);
        }
    }
}
