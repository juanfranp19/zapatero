<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SequenceResource;
use App\Models\Sequence;
use Illuminate\Http\Request;

class SequenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $sequences = SequenceResource::collection(
                Sequence::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $sequences;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // obtiene el contenido del json y lo transforma a array asociativo
            $sequence = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $sequence = Sequence::create($sequence);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new SequenceResource($sequence);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $sequence = Sequence::findOrFail($id);

        // lo devuelve a través del recurso
        return new SequenceResource($sequence);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $sequence = Sequence::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($sequence) {

            // verifica que se encuentren los campos
            $request->validate([
                'seq_name' => 'required',
                'seq_count' => 'required'
            ]);

            // los actualiza
            $sequence->seq_name = $request->input('seq_name');
            $sequence->seq_count = $request->input('seq_count');
            $sequence->save();

            // lo devuelve mediante el recurso
            return response()->json(new SequenceResource($sequence), 200);

        } else {
            return response()->json(['message' => 'Sequence no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $sequence = Sequence::find($id);

        if ($sequence) {

            // lo elimina
            $sequence->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Sequence eliminado'], 200);

        } else {
            return response()->json(['message' => 'Sequence no encontrado'], 404);
        }
    }
}
