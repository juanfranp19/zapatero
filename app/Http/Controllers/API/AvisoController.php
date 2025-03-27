<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AvisoResource;
use App\Models\Aviso;
use Illuminate\Http\Request;

class AvisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $avisos = AvisoResource::collection(
                Aviso::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $avisos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $aviso = json_decode($request->getContent(), true);
            $aviso = Aviso::create($aviso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new AvisoResource($aviso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $aviso = Aviso::findOrFail($id);
        return new AvisoResource($aviso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
        $aviso = Aviso::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($aviso) {

            $request->validate([
                'equipo_numserie' => 'required',
                'usuario_nombre' => 'required'
            ]);

            $aviso->equipo_numserie = $request->input('equipo_numserie');
            $aviso->usuario_nombre = $request->input('usuario_nombre');
            $aviso->save();

            return response()->json(new AvisoResource($aviso), 200);

        } else {
            return response()->json(['message' => 'Aviso no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $aviso = Aviso::find($id);
        if ($aviso) {
            $aviso->delete();
            return response()->json(['message' => 'Aviso eliminado'], 200);
        } else {
            return response()->json(['message' => 'Aviso no encontrado'], 404);
        }
    }
}
