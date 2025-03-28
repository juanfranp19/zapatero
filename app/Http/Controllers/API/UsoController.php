<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsoResource;
use App\Models\Uso;
use Illuminate\Http\Request;

class UsoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $usos = UsoResource::collection(
                Uso::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $usos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $uso = json_decode($request->getContent(), true);
            $uso = Uso::create($uso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new UsoResource($uso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $uso = Uso::findOrFail($id);
        return new UsoResource($uso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
        $uso = Uso::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($uso) {

            $request->validate([
                'estado' => 'required',
                'fecha_uso' => 'required',
                //'hora_fin' => 'required',
                //'hora_inicio' => 'required',
                'equipo_id' => 'required',
                'trabajador_id' => 'required'
            ]);

            $uso->estado = $request->input('estado');
            $uso->fecha_uso = $request->input('fecha_uso');
            $uso->hora_fin = $request->input('hora_fin');
            $uso->hora_inicio = $request->input('hora_inicio');
            $uso->equipo_id = $request->input('equipo_id');
            $uso->trabajador_id = $request->input('trabajador_id');
            $uso->save();

            return response()->json(new UsoResource($uso), 200);

        } else {
            return response()->json(['message' => 'Uso no encontrado'], 404);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $uso = Uso::find($id);

        if ($uso) {
            $uso->delete();
            return response()->json(['message' => 'Uso eliminado'], 200);
        } else {
            return response()->json(['message' => 'Uso no encontrado'], 404);
        }
    }
}
