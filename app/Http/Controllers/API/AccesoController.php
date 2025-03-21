<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccesoResource;
use App\Models\Acceso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AccesoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $accesos = AccesoResource::collection(
            Acceso::orderBy('ID')->paginate(5)
        );

        return $accesos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'FECHAENTRADA' => 'required',
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
            $acceso = Acceso::create([
                'FECHAENTRADA' => $request->FECHAENTRADA,
                'TRABAJADOR_ID' => $request->TRABAJADOR_ID
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'acceso' => $acceso,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Acceso $acceso)
    {
        $data = [
            'acceso' => $acceso,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Acceso $acceso)
    {
        $datos = [
            'FECHAENTRADA' => $request->FECHAENTRADA,
            'TRABAJADOR_ID' => $request->TRABAJADOR_ID
        ];

        $validator = Validator::make($request->all(), [
            'FECHAENTRADA' => 'required',
            'TRABAJADOR_ID' => 'required',
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
            DB::table('Acceso')
                ->where('ID', $acceso->ID)
                ->update(
                    ['FECHAENTRADA' => $request->FECHAENTRADA, 'TRABAJADOR_ID' => $request->TRABAJADOR_ID]
                );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Aviso actualizado',
            'acceso' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Acceso $acceso)
    {
        try {
            DB::table('Acceso')
                ->where('ID', $acceso->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Acceso eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
