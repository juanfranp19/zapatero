<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\IncidenciaResource;
use App\Models\Incidencia;
use Illuminate\Http\Request;
/*
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
*/

class IncidenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $incidencias = IncidenciaResource::collection(
                Incidencia::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $incidencias;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // obtiene el contenido del json y lo transforma a array asociativo
            $incidencia = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $incidencia = Incidencia::create($incidencia);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new IncidenciaResource($incidencia);
    }

    /**
     * Display the specified resource.
     */
    public function show(Incidencia $incidencia)
    {
        /*
        $data = [
            'incidencia' => $incidencia,
            'status' => 200
        ];

        return response()->json($data, 200);

        $data = Incidencia::findOrFail($incidencia->id);

        return $data;
        */

        // devuleve el modelo creado desde el recurso
        return new IncidenciaResource($incidencia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Incidencia $incidencia)
    {
        try {

            // obtiene la información en json y la transofmra en array asociativo
            $incidenciaData = json_decode($request->getContent(), true);

            // actualiza los datos
            $incidencia->update($incidenciaData);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuelve el modelo actualizado mediante el recurs
        return new IncidenciaResource($incidencia);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Incidencia $incidencia)
    {
        try {

            // elimina el modelo
            $incidencia->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuelve mensaje
        $data = [
            'message' => 'Incidencia eliminada',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
