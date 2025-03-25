<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ValorProduccionResource;
use App\Models\ValorProduccion;
use Illuminate\Http\Request;

class ValorProduccionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $valores_produccion = ValorProduccionResource::collection(
                ValorProduccion::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $valores_produccion;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $valor_produccion = json_decode($request->getContent(), true);
            $valor_produccion = ValorProduccion::create($valor_produccion);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new ValorProduccionResource($valor_produccion);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $valor_produccion = ValorProduccion::findOrFail($id);
        return new ValorProduccionResource($valor_produccion);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $valor_produccion = ValorProduccion::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($valor_produccion) {

            $request->validate([
                'fecha' => 'required',
                'value_a' => 'required',
                'value_b' => 'required',
                'value_c' => 'required',
                'value_d' => 'required',
                'value_e' => 'required',
                'value_f' => 'required',
                'equipo_numserie' => 'required'
            ]);

            $valor_produccion->fecha = $request->input('fecha');
            $valor_produccion->value_a = $request->input('value_a');
            $valor_produccion->value_b = $request->input('value_b');
            $valor_produccion->value_c = $request->input('value_c');
            $valor_produccion->value_d = $request->input('value_d');
            $valor_produccion->value_e = $request->input('value_e');
            $valor_produccion->value_f = $request->input('value_f');
            $valor_produccion->equipo_numserie = $request->input('equipo_numserie');
            $valor_produccion->save();

            return response()->json(new ValorProduccionResource($valor_produccion), 200);

        } else {
            return response()->json(['message' => 'ValorProduccion no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $valor_produccion = ValorProduccion::find($id);

        if ($valor_produccion) {

            $valor_produccion->delete();
            return response()->json(['message' => 'ValorProduccion eliminado'], 200);

        } else {
            return response()->json(['message' => 'ValorProduccion no encontrado'], 404);
        }
    }
}
