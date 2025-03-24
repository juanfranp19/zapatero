<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\IncidenciaResource;
use App\Models\Incidencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class IncidenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $incidencias = IncidenciaResource::collection(
                Incidencia::orderBy('ID')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $incidencias;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'FECHAINCIDENCIA' => 'required',
            'TIEMPOINCIDENCIA' => 'required',
            'TIPO_INCIDENCIA_ID' => 'required',
            'TRABAJADOR_ID' => 'required'
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
            $incidencia = Incidencia::create([
                'FECHAINCIDENCIA' => $request->FECHAINCIDENCIA,
                'TIEMPOINCIDENCIA' => $request->TIEMPOINCIDENCIA,
                'TIPO_INCIDENCIA_ID' => $request->TIPO_INCIDENCIA_ID,
                'TRABAJADOR_ID' => $request->TRABAJADOR_ID,
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'comentario' => $incidencia,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    /*public function show(Incidencia $incidencia)
    {
        /* $data = [
            'incidencia' => $incidencia,
            'status' => 200
        ];

        return response()->json($data, 200);

        $data = Incidencia::findOrFail($incidencia->id);

        return $data;
    } */

    public function show($id)
    {
        $incidencia = Incidencia::findOrFail($id); // Si no se encuentra el incidencia, devolverá un error 404
        return new IncidenciaResource($incidencia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Incidencia $incidencia)
    {
        $datos = [
            'FECHAINCIDENCIA' => $request->FECHAINCIDENCIA,
            'TIEMPOINCIDENCIA' => $request->TIEMPOINCIDENCIA,
            'TIPO_INCIDENCIA_ID' => $request->TIPO_INCIDENCIA_ID,
            'TRABAJADOR_ID' => $request->TRABAJADOR_ID
        ];

        $validator = Validator::make($request->all(), [
            'FECHAINCIDENCIA' => 'required',
            'TIEMPOINCIDENCIA' => 'required',
            'TIPO_INCIDENCIA_ID' => 'required',
            'TRABAJADOR_ID' => 'required'
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
            DB::table('Incidencia')
                ->where('ID', $incidencia->ID)
                ->update($datos);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Incidencia actualizada',
            'comentario' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Incidencia $incidencia)
    {
        //
    }
}
