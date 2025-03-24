<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsoResource;
use App\Models\Uso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UsoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usos = UsoResource::collection(
            Uso::orderBy('ID')->paginate(5)
        );

        return $usos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ESTADO' => 'required',
            'FECHAUSO' => 'required',
            'HORAFIN' => 'required',
            'HORAINICIO' => 'required',
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
            $uso = Uso::create([
                'ESTADO' => $request->EQUIPO_NUMSERIE,
                'FECHAUSO' => $request->USUARIO_EMAIL,
                'HORAFIN' => $request->HORAFIN,
                'HORAINICIO' => $request->HORAINICIO,
                'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE,
                'TRABAJADOR_ID' => $request->TRABAJADOR_ID
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'uso' => $uso,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Uso $uso)
    {
        $data = [
            'uso' => $uso,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Uso $uso)
    {
        $datos = [
            'ESTADO' => $request->EQUIPO_NUMSERIE,
            'FECHAUSO' => $request->USUARIO_EMAIL,
            'HORAFIN' => $request->HORAFIN,
            'HORAINICIO' => $request->HORAINICIO,
            'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE,
            'TRABAJADOR_ID' => $request->TRABAJADOR_ID
        ];

        $validator = Validator::make($request->all(), [
            'ESTADO' => 'required',
            'FECHAUSO' => 'required',
            'HORAFIN' => 'required',
            'HORAINICIO' => 'required',
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
            DB::table('Uso')
                ->where('ID', $uso->ID)
                ->update(
                    ['ESTADO' => $request->EQUIPO_NUMSERIE, 'FECHAUSO' => $request->USUARIO_EMAIL, 'HORAFIN' => $request->HORAFIN, 'HORAINICIO' => $request->HORAINICIO, 'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE, 'TRABAJADOR_ID' => $request->TRABAJADOR_ID]
                );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Aviso actualizado',
            'uso' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Uso $uso)
    {
        try {
            DB::table('Uso')
                ->where('ID', $uso->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Uso eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
