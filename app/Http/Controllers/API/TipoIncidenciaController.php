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

            $tipoincidencia = json_decode($request->getContent(), true);
            $tipoincidencia = TipoIncidencia::create($tipoincidencia);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new TipoIncidenciaResource($tipoincidencia);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $tipoincidencia = TipoIncidencia::findOrFail($id);
        return new TipoIncidenciaResource($tipoincidencia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $tipoIncidencia = TipoIncidencia::find($id);

        if ($tipoIncidencia) {

            $request->validate([
                'codigo' => 'required',
                'descripcion' => 'required',
                'eliminado' => 'required',
                'equipo_numserie' => 'required'
            ]);

            $tipoIncidencia->codigo = $request->input('codigo');
            $tipoIncidencia->descripcion = $request->input('descripcion');
            $tipoIncidencia->eliminado = $request->input('eliminado');
            $tipoIncidencia->equipo_numserie = $request->input('equipo_numserie');
            $tipoIncidencia->save();

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
        $tipoIncidencia = TipoIncidencia::find($id);

        if ($tipoIncidencia) {
            $tipoIncidencia->delete();
            return response()->json(['message' => 'Tipo de Incidencia eliminado'], 200);
        } else {
            return response()->json(['message' => 'Tipo de Incidencia no encontrado'], 404);
        }
    }



}
