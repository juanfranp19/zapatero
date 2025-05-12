<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrabajadorResource;
use App\Models\Trabajador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TrabajadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Trabajador::class);

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

            Gate::authorize('create', Trabajador::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $trabajador = $request->all();

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

        Gate::authorize('view', [Trabajador::class, $trabajador]);

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

            Gate::authorize('update', [Trabajador::class, $trabajador]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($trabajador) {

            // verifica que se encuentren los campos
            $request->validate([
                'dni' => 'required',
                'nombre' => 'required',
                'apellidos' => 'required',
                'activo' => 'required',
                'borrado' => 'required',
                //'imagen' => 'required',
                //'user_id' => 'required'
            ]);

            // los actualiza
            $trabajador->dni = $request->input('dni');
            $trabajador->nombre = $request->input('nombre');
            $trabajador->apellidos = $request->input('apellidos');
            $trabajador->activo = $request->input('activo');
            $trabajador->borrado = $request->input('borrado');
            $trabajador->imagen = $request->input('imagen');
            $trabajador->user_id = $request->input('user_id');
            // la imagen y el user_id se asigna en el observer
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
        Gate::authorize('delete', [Trabajador::class]);

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
