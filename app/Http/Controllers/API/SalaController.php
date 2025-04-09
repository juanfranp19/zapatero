<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SalaResource;
use App\Models\Sala;
use Illuminate\Http\Request;

class SalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $salas = SalaResource::collection(
                Sala::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $salas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $sala = json_decode($request->getContent(), true);
            $sala = Sala::create($sala);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new SalaResource($sala);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $sala = Sala::findOrFail($id);
        return new SalaResource($sala);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $sala = Sala::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($sala) {

            $request->validate([
                'nombre' => 'required',
            ]);

            $sala->nombre = $request->input('nombre');
            $sala->accesible = $request->input('accesible');
            $sala->save();

            return response()->json(new SalaResource($sala), 200);

        } else {
            return response()->json(['message' => 'Sala no encontrada'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $sala = Sala::find($id);

        if ($sala) {
            $sala->delete();
            return response()->json(['message' => 'Sala eliminada'], 200);
        } else {
            return response()->json(['message' => 'Sala no encontrada'], 404);
        }
    }
}
