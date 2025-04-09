<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TipoEquipoResource;
use App\Models\TipoEquipo;
use Illuminate\Http\Request;

class TipoEquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $tiposEquipo = TipoEquipoResource::collection(
                TipoEquipo::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $tiposEquipo;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $tipoEquipo = json_decode($request->getContent(), true);
            $tipoEquipo = TipoEquipo::create($tipoEquipo);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new TipoEquipoResource($tipoEquipo);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $tipoEquipo = TipoEquipo::findOrFail($id);
        return new TipoEquipoResource($tipoEquipo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $tipoEquipo = TipoEquipo::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($tipoEquipo) {

            $request->validate([
                'nombre' => 'required',
            ]);

            $tipoEquipo->nombre = $request->input('nombre');
            $tipoEquipo->save();

            return response()->json(new TipoEquipoResource($tipoEquipo), 200);

        } else {
            return response()->json(['message' => 'Tipo de equipo no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $tipoEquipo = TipoEquipo::find($id);

        if ($tipoEquipo) {
            $tipoEquipo->delete();
            return response()->json(['message' => 'Tipo de equipo eliminado'], 200);
        } else {
            return response()->json(['message' => 'Tipo de equipo no encontrado'], 404);
        }
    }
}
