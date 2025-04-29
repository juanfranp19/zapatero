<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ParametroEficaciaResource;
use App\Models\ParametroEficacia;
use Illuminate\Http\Request;

class ParametroEficaciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $parametroseficacia = ParametroEficaciaResource::collection(
                ParametroEficacia::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $parametroseficacia;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // obtiene el contenido del json y lo transforma a array asociativo
            $parametroseficacia = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $parametroseficacia = ParametroEficacia::create($parametroseficacia);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new ParametroEficaciaResource($parametroseficacia);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $parametroseficacia = ParametroEficacia::findOrFail($id);

        // lo devuelve a través del recurso
        return new ParametroEficaciaResource($parametroseficacia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $parametroseficacia = ParametroEficacia::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($parametroseficacia) {

            // verifica que se encuentren los campos
            $request->validate([
                'fecha_parametro' => 'required',
                'valor' => 'required',
                'tipo_parametro_id' => 'required'
            ]);

            try {

                // los actualiza
                $parametroseficacia->fecha_parametro = $request->input('fecha_parametro');
                $parametroseficacia->valor = $request->input('valor');
                $parametroseficacia->tipo_parametro_id = $request->input('tipo_parametro_id');
                $parametroseficacia->save();

            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

            // lo devuelve mediante el recurso
            return response()->json(new ParametroEficaciaResource($parametroseficacia), 200);

        } else {
            return response()->json(['message' => 'Parametro Eficacia no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $parametroseficacia = ParametroEficacia::find($id);

        if ($parametroseficacia) {

            // lo elimina
            $parametroseficacia->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Parametros Eficacia eliminado'], 200);

        } else {
            return response()->json(['message' => 'Parametros Eficacia no encontrado'], 404);
        }
    }
}
