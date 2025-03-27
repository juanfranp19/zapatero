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

            $parametroseficacia = json_decode($request->getContent(), true);
            $parametroseficacia = ParametroEficacia::create($parametroseficacia);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new ParametroEficaciaResource($parametroseficacia);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $parametroseficacia = ParametroEficacia::findOrFail($id);
        return new ParametroEficaciaResource($parametroseficacia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $parametroseficacia = ParametroEficacia::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($parametroseficacia) {

            $request->validate([
                'fecha_parametro' => 'required',
                'valor' => 'required',
                'tipo_parametro_id' => 'required'
            ]);

            try {

                $parametroseficacia->fecha_parametro = $request->input('fecha_parametro');
                $parametroseficacia->valor = $request->input('valor');
                $parametroseficacia->tipo_parametro_id = $request->input('tipo_parametro_id');
                $parametroseficacia->save();

            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

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
        $parametroseficacia = ParametroEficacia::find($id);
        if ($parametroseficacia) {
            $parametroseficacia->delete();
            return response()->json(['message' => 'Parametros Eficacia eliminado'], 200);
        } else {
            return response()->json(['message' => 'Parametros Eficacia no encontrado'], 404);
        }
    }
}
