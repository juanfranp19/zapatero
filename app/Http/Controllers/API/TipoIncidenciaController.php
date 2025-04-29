<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TipoIncidenciaResource;
use App\Models\TipoIncidencia;
use Illuminate\Http\Request;

class TipoIncidenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $tiposincidencias = TipoIncidenciaResource::collection(
                TipoIncidencia::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $tiposincidencias;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // obtiene el contenido del json y lo transforma a array asociativo
            $tipoincidencia = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $tipoincidencia = TipoIncidencia::create($tipoincidencia);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new TipoIncidenciaResource($tipoincidencia);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $tipoincidencia = TipoIncidencia::findOrFail($id);

        // lo devuelve a través del recurso
        return new TipoIncidenciaResource($tipoincidencia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // encuentra el modelo
        $tipoIncidencia = TipoIncidencia::find($id);

        if ($tipoIncidencia) {

            // verifica que se encuentren los campos
            $request->validate([
                'codigo' => 'required',
                'descripcion' => 'required',
                'eliminado' => 'required',
                'equipo_id' => 'required'
            ]);

            // los actualiza
            $tipoIncidencia->codigo = $request->input('codigo');
            $tipoIncidencia->descripcion = $request->input('descripcion');
            $tipoIncidencia->eliminado = $request->input('eliminado');
            $tipoIncidencia->equipo_id = $request->input('equipo_id');
            $tipoIncidencia->save();

            // lo devuelve mediante el recurso
            return response()->json(new TipoIncidenciaResource($tipoIncidencia), 200);

        } else {
            return response()->json(['message' => 'Tipo de Incidencia no encontrado'], 404);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $tipoIncidencia = TipoIncidencia::find($id);

        if ($tipoIncidencia) {

            // lo elimina
            $tipoIncidencia->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Tipo de Incidencia eliminado'], 200);

        } else {
            return response()->json(['message' => 'Tipo de Incidencia no encontrado'], 404);
        }
    }
}
