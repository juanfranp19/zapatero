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

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
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

            // obtiene el contenido del json y lo transforma a array asociativo
            $trabajador = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $trabajador = Trabajador::create($trabajador);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new TrabajadorResource($trabajador);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $trabajador = Trabajador::findOrFail($id);

        // lo devuelve a través del recurso
        return new TrabajadorResource($trabajador);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $trabajador = Trabajador::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($trabajador) {

            // verifica que se encuentren los campos
            $request->validate([
                'dni' => 'required',
                'activo' => 'required',
                'apellidos' => 'required',
                'borrado' => 'required',
                'nombre' => 'required',
                'url_imagen' => 'required',
                'user_id' => 'required'
            ]);

            // los actualiza
            $trabajador->dni = $request->input('dni');
            $trabajador->activo = $request->input('activo');
            $trabajador->apellidos = $request->input('apellidos');
            $trabajador->borrado = $request->input('borrado');
            $trabajador->nombre = $request->input('nombre');
            $trabajador->url_imagen = $request->input('url_imagen');
            $trabajador->user_id = $request->input('user_id');
            $trabajador->save();

            // lo devuelve mediante el recurso
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
        // encuentra el modelo
        $trabajador = Trabajador::find($id);

        if ($trabajador) {

            // lo elimina
            $trabajador->delete();

            // devuelve mensaje
            return response()->json(['message' => 'trabajador eliminado'], 200);

        } else {
            return response()->json(['message' => 'trabajador no encontrado'], 404);
        }
    }
}
