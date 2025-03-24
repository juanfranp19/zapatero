<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermisoResource;
use App\Models\Permiso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PermisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
        $permisos = PermisoResource::collection(
            Permiso::orderBy('ID')->paginate(5)
        );
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
        return $permisos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'DESDE' => 'required',
            'HASTA' => 'required',
            'NUMUSOS' => 'required',
            'PERIODOUSO' => 'required',
            'EQUIPO_NUMSERIE' => 'required',
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
            $permiso = Permiso::create([
                'DESDE' => $request->DESDE,
                'HASTA' => $request->HASTA,
                'NUMUSOS' => $request->NUMUSOS,
                'PERIODOUSO' => $request->PERIODOUSO,
                'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE,
                'TRABAJADOR_ID' => $request->TRABAJADOR_ID
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'permiso' => $permiso,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Permiso $permiso)
    {
        $data = [
            'permiso' => $permiso,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Permiso $permiso)
    {
        $datos = [
            'DESDE' => $request->DESDE,
            'HASTA' => $request->HASTA,
            'NUMUSOS' => $request->NUMUSOS,
            'PERIODOUSO' => $request->PERIODOUSO,
            'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE,
            'TRABAJADOR_ID' => $request->TRABAJADOR_ID
        ];

        $validator = Validator::make($request->all(), [
            'DESDE' => 'required',
            'HASTA' => 'required',
            'NUMUSOS' => 'required',
            'PERIODOUSO' => 'required',
            'EQUIPO_NUMSERIE' => 'required',
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
            DB::table('Permiso')
                ->where('ID', $permiso->ID)
                ->update(
                    ['DESDE' => $request->DESDE, 'HASTA' => $request->HASTA, 'NUMUSOS' => $request->NUMUSOS, 'PERIODOUSO' => $request->PERIODOUSO, 'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE, 'TRABAJADOR_ID' => $request->TRABAJADOR_ID]
                );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Permiso actualizado',
            'permiso' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permiso $permiso)
    {
        try {
            DB::table('Permiso')
                ->where('ID', $permiso->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Permiso eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
