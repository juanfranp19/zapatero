<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrabajadorResource;
use App\Models\Trabajador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TrabajadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trabajadores = TrabajadorResource::collection(
            Trabajador::orderBy('ID')->paginate(5)
        );

        return $trabajadores;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'DNI' => 'required',
            'ACTIVO' => 'required',
            'APELLIDOS' => 'required',
            'BORRADO' => 'required',
            'NOMBRE' => 'required',
            'URLIMAGEN' => 'required',
            'USUARIO_NOMBRE' => 'required'
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
            $trabajador = Trabajador::create([
                'DNI' => $request->DNI,
                'ACTIVO' => $request->ACTIVO,
                'APELLIDOS' => $request->APELLIDOS,
                'BORRADO' => $request->BORRADO,
                'NOMBRE' => $request->NOMBRE,
                'URLIMAGEN' => $request->URLIMAGEN,
                'USUARIO_NOMBRE' => $request->USUARIO_NOMBRE
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'aviso' => $trabajador,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Trabajador $trabajador)
    {
        $data = [
            'trabajo' => $trabajador,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Trabajador $trabajador)
    {
        $datos = [
            'DNI' => $request->DNI,
            'ACTIVO' => $request->ACTIVO,
            'APELLIDOS' => $request->APELLIDOS,
            'BORRADO' => $request->BORRADO,
            'NOMBRE' => $request->NOMBRE,
            'URLIMAGEN' => $request->URLIMAGEN,
            'USUARIO_NOMBRE' => $request->USUARIO_NOMBRE
        ];

        $validator = Validator::make($request->all(), [
            'DNI' => 'required',
            'ACTIVO' => 'required',
            'APELLIDOS' => 'required',
            'BORRADO' => 'required',
            'NOMBRE' => 'required',
            'URLIMAGEN' => 'required',
            'USUARIO_NOMBRE' => 'required'
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
            DB::table('Trabajador')
                ->where('ID', $trabajador->ID)
                ->update(
                    ['DNI' => $request->DNI, 'ACTIVO' => $request->ACTIVO, 'APELLIDOS' => $request->APELLIDOS, 'BORRADO' => $request->BORRADO, 'NOMBRE' => $request->NOMBRE, 'URLIMAGEN' => $request->URLIMAGEN, 'USUARIO_NOMBRE' => $request->USUARIO_NOMBRE]
                );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Trabajador actualizado',
            'aviso' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Trabajador $trabajador)
    {
        try {
            DB::table('Trabajador')
                ->where('ID', $trabajador->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Trabajador eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
