<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccesoResource;
use App\Models\Acceso;
use Illuminate\Http\Request;

class AccesoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $accesos = AccesoResource::collection(
                Acceso::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $accesos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $acceso = json_decode($request->getContent(), true);
            $acceso = Acceso::create($acceso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new AccesoResource($acceso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $acceso = Acceso::findOrFail($id);
        return new AccesoResource($acceso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
        $acceso = Acceso::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($acceso) {

            $request->validate([
                'fecha_entrada' => 'required',
                'trabajador_id' => 'required'
            ]);

            $acceso->fecha_entrada = $request->input('fecha_entrada');
            $acceso->trabajador_id = $request->input('trabajador_id');
            $acceso->save();

            return response()->json(new AccesoResource($acceso), 200);

        } else {
            return response()->json(['message' => 'Acceso no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $acceso = Acceso::find($id);

        if ($acceso) {
            $acceso->delete();
            return response()->json(['message' => 'Acceso eliminado'], 200);
        } else {
            return response()->json(['message' => 'Acceso no encontrado'], 404);
        }
    }
}
