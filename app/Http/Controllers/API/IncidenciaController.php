<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\IncidenciaResource;
use App\Models\Incidencia;
use Illuminate\Http\Request;
/*
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
*/

class IncidenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $incidencias = IncidenciaResource::collection(
                Incidencia::orderBy('id')->paginate(5)
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
        /*
        $validator = Validator::make($request->all(), [
            'fecha_incidencia' => 'required',
            'tiempo_incidencia' => 'required',
            'tipo_incidencia_id' => 'required',
            'trabajador_id' => 'required'
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
                'fecha_incidencia' => $request->fecha_incidencia,
                'tiempo_incidencia' => $request->tiempo_incidencia,
                'tipo_incidencia_id' => $request->tipo_incidencia_id,
                'trabajador_id' => $request->trabajador_id,
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'comentario' => $incidencia,
            'status' => 201
        ];

        return response()->json($data, 201);
        */

        try {

            $incidencia = json_decode($request->getContent(), true);
            $incidencia = Incidencia::create($incidencia);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new IncidenciaResource($incidencia);
    }

    /**
     * Display the specified resource.
     */
    public function show(Incidencia $incidencia)
    {
        /*
        $data = [
            'incidencia' => $incidencia,
            'status' => 200
        ];

        return response()->json($data, 200);

        $data = Incidencia::findOrFail($incidencia->id);

        return $data;
        */

        return new IncidenciaResource($incidencia);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Incidencia $incidencia)
    {
        /*
        $datos = [
            'fecha_incidencia' => $request->fecha_incidencia,
            'tiempo_incidencia' => $request->tiempo_incidencia,
            'tipo_incidencia_id' => $request->tipo_incidencia_id,
            'trabajador_id' => $request->trabajador_id
        ];

        $validator = Validator::make($request->all(), [
            'fecha_incidencia' => 'required',
            'tiempo_incidencia' => 'required',
            'tipo_incidencia_id' => 'required',
            'trabajador_id' => 'required'
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
            DB::table('incidencias')
                ->where('id', $incidencia->id)
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
        */

        try {

            $incidenciaData = json_decode($request->getContent(), true);
            $incidencia->update($incidenciaData);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new IncidenciaResource($incidencia);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Incidencia $incidencia)
    {
        /*
        try {
            DB::table('incidencias')
                ->where('id', $incidencia->id)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Acceso eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
        */

        try {

            $incidencia->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Incidencia eliminada',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
