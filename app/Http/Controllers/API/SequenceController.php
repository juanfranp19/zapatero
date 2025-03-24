<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SequenceResource;
use App\Models\Sequence;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SequenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $sequences = SequenceResource::collection(
                Sequence::orderBy('SEQ_NAME')->paginate(5)
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
        $validator = Validator::make($request->all(), [
            'SEQ_NAME' => 'required',
            'SEQ_COUNT' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        try {
            $sequence = Sequence::create([
                'SEQ_NAME' => $request->SEQ_NAME,
                'SEQ_COUNT' => $request->SEQ_COUNT
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'sequence' => $sequence,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sequence $sequence)
    {
        $data = [
            'sequence' => $sequence,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sequence $sequence)
    {
        $datos = [
            'SEQ_NAME' => $request->SEQ_NAME,
            'SEQ_COUNT' => $request->SEQ_COUNT
        ];

        $validator = Validator::make($request->all(), [
            'SEQ_NAME' => 'required',
            'SEQ_COUNT' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validación de los datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        try {
            DB::table('SEQUENCE')
                ->where('ID', $sequence->ID)
                ->update($datos);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Comentario actualizado',
            'sequence' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sequence $sequence)
    {
        try {
            DB::table('SEQUENCE')
                ->where('ID', $sequence->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Sequence eliminada',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
