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

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
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

            // obtiene el contenido del json y lo transforma a array asociativo
            $tipoParametro = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $tipoParametro = TipoParametro::create($tipoParametro);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new TipoParametroResource($tipoParametro);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $tipoParametro = TipoParametro::findOrFail($id);

        // lo devuelve a través del recurso
        return new TipoParametroResource($tipoParametro);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $tipoParametro = TipoParametro::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($tipoParametro) {

            // verifica que se encuentren los campos
            $request->validate([
                'codigo' => 'required',
                'descripcion' => 'required',
                'eliminado' => 'required',
                'medida' => 'required',
                'equipo_id' => 'required'
            ]);

            // los actualiza
            $tipoParametro->codigo = $request->input('codigo');
            $tipoParametro->descripcion = $request->input('descripcion');
            $tipoParametro->eliminado = $request->input('eliminado');
            $tipoParametro->medida = $request->input('medida');
            $tipoParametro->equipo_id = $request->input('equipo_id');
            $tipoParametro->save();

            // lo devuelve mediante el recurso
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
        // encuentra el modelo
        $tipoParametro = TipoParametro::find($id);

        if ($tipoParametro) {

            // lo elimina
            $tipoParametro->delete();

            // devuelve mensaje
            return response()->json(['message' => 'TipoParametro eliminado'], 200);

        } else {
            return response()->json(['message' => 'TipoParametro no encontrado'], 404);
        }
    }
}
