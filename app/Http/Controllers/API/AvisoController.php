<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AvisoResource;
use App\Models\Aviso;
use Illuminate\Http\Request;

class AvisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos de avisos, ordenador por id y de 5 en 5
            $avisos = AvisoResource::collection(
                Aviso::orderBy('id')->paginate(5)
            );

            return $avisos;

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

            // obtiene el contenido del json y lo transforma a array asociativo
            $aviso = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $aviso = Aviso::create($aviso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new AvisoResource($aviso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $aviso = Aviso::findOrFail($id);

        // lo devuelve a través del recurso
        return new AvisoResource($aviso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $aviso = Aviso::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($aviso) {

            // verifica que se encuentren los campos
            $request->validate([
                'equipo_id' => 'required',
                'user_id' => 'required'
            ]);

            // los actualiza
            $aviso->equipo_id = $request->input('equipo_id');
            $aviso->user_id = $request->input('user_id');
            $aviso->save();

            // lo devuelve mediante el recurso
            return response()->json(new AvisoResource($aviso), 200);

        } else {
            return response()->json(['message' => 'Aviso no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $aviso = Aviso::find($id);

        if ($aviso) {

            // lo elimina
            $aviso->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Aviso eliminado'], 200);

        } else {
            return response()->json(['message' => 'Aviso no encontrado'], 404);
        }
    }
}
