<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\EquipoResource;
use App\Models\Equipo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
        $equipos = EquipoResource::collection(
            Equipo::orderBy('NUMSERIE')->paginate(5)
        );

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
        return $equipos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'NUMSERIE' => 'required',
            'ACTIVO' => 'required',
            'ALIAS' => 'required',
            'PERIODOUSO' => 'required',
            'REPARACION' => 'required',
            'TIPO' => 'required'
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
            $equipo = Equipo::create([
                'NUMSERIE' => $request->NUMSERIE,
                'ACTIVO' => $request->ACTIVO,
                'ALIAS' => $request->ALIAS,
                'PERIODOUSO' => $request->PERIODOUSO,
                'REPARACION' => $request->REPARACION,
                'TIPO' => $request->TIPO
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'equipo' => $equipo,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Equipo $equipo)
    {
        $data = [
            'equipo' => $equipo,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Equipo $equipo)
    {
        $datos = [
            'NUMSERIE' => $request->NUMSERIE,
            'ACTIVO' => $request->ACTIVO,
            'ALIAS' => $request->ALIAS,
            'PERIODOUSO' => $request->PERIODOUSO,
            'REPARACION' => $request->REPARACION,
            'TIPO' => $request->TIPO
        ];

        $validator = Validator::make($request->all(), [
            'NUMSERIE' => 'required',
            'ACTIVO' => 'required',
            'ALIAS' => 'required',
            'PERIODOUSO' => 'required',
            'REPARACION' => 'required',
            'TIPO' => 'required'
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
            DB::table('Equipo')
                ->where('ID', $equipo->ID)
                ->update(
                    ['NUMSERIE' => $request->NUMSERIE, 'ACTIVO' => $request->ACTIVO, 'ALIAS' => $request->ALIAS, 'PERIODOUSO' => $request->PERIODOUSO, 'REPARACION' => $request->REPARACION,'TIPO' => $request->TIPO]
                );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Equipo actualizado',
            'acceso' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Equipo $equipo)
    {
        try {
            DB::table('Equipo')
                ->where('ID', $equipo->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Equipo eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
