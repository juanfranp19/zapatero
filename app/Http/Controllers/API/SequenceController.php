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

            $sequence = json_decode($request->getContent(), true);
            $sequence = Sequence::create($sequence);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new SequenceResource($sequence);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $sequence = Sequence::findOrFail($id);
        return new SequenceResource($sequence);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
        $sequence = Sequence::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($sequence) {

            $request->validate([
                'seq_name' => 'required',
                'seq_count' => 'required'
            ]);

            $sequence->seq_name = $request->input('seq_name');
            $sequence->seq_count = $request->input('seq_count');
            $sequence->save();

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
        $sequence = Sequence::find($id);

        if ($sequence) {
            $sequence->delete();
            return response()->json(['message' => 'Sequence eliminado'], 200);
        } else {
            return response()->json(['message' => 'Sequence no encontrado'], 404);
        }
    }
}
