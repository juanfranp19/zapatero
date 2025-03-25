<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TipoParametroResource;
use App\Models\TipoParametro;
use Illuminate\Http\Request;

class TipoParametroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $tiposParametros = TipoParametroResource::collection(
                TipoParametro::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $tiposParametros;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $tipoParametro = json_decode($request->getContent(), true);
            $tipoParametro = TipoParametro::create($tipoParametro);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new TipoParametroResource($tipoParametro);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $tipoParametro = TipoParametro::findOrFail($id);
        return new TipoParametroResource($tipoParametro);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $tipoParametro = TipoParametro::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($tipoParametro) {

            $request->validate([
                'codigo' => 'required',
                'descripcion' => 'required',
                'eliminado' => 'required',
                'medida' => 'required',
                'equipo_numserie' => 'required'
            ]);

            $tipoParametro->codigo = $request->input('codigo');
            $tipoParametro->descripcion = $request->input('descripcion');
            $tipoParametro->eliminado = $request->input('eliminado');
            $tipoParametro->medida = $request->input('medida');
            $tipoParametro->equipo_numserie = $request->input('equipo_numserie');
            $tipoParametro->save();

            return response()->json(new TipoParametroResource($tipoParametro), 200);

        } else {
            return response()->json(['message' => 'TipoParametro no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $tipoParametro = TipoParametro::find($id);

        if ($tipoParametro) {

            $tipoParametro->delete();
            return response()->json(['message' => 'TipoParametro eliminado'], 200);

        } else {
            return response()->json(['message' => 'TipoParametro no encontrado'], 404);
        }
    }
}
