<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovimientoResource;
use App\Models\Movimiento;
use Illuminate\Http\Request;

class MovimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $movimientos = MovimientoResource::collection(
                Movimiento::orderBy('id')->get(),
            );

            return response()->json([
                'data' => $movimientos,
            ], 200);

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

            $movimiento = json_decode($request->getContent(), true);
            $movimiento = Movimiento::create($movimiento);

            return response()->json([
                'data' => new MovimientoResource($movimiento),
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $movimiento = Movimiento::findOrFail($id);

        return response()->json([
            'data' => new MovimientoResource($movimiento),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $movimiento = Movimiento::findOrFail($id);

        $request->validate([
            'fecha' => 'required',
            'equipo_id' => 'required',
            'origen' => 'required',
            'destino' => 'required',
            'trabajador_id' => 'required',
        ]);

        $movimiento->fecha = $request->input('fecha');
        $movimiento->equipo_id = $request->input('equipo_id');
        $movimiento->origen = $request->input('origen');
        $movimiento->destino = $request->input('destino');
        $movimiento->trabajador_id = $request->input('trabajador_id');
        $movimiento->save();

        return response('', 204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $movimiento = Movimiento::findOrFail($id);

        $movimiento->delete();
        return response('', 204);
    }
}
