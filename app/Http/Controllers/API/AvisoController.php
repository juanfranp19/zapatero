<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AvisoResource;
use App\Models\Acceso;
use App\Models\Aviso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AvisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $avisos = AvisoResource::collection(
            Aviso::orderBy('ID')->paginate(5)
        );

        return $avisos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'EQUIPO_NUMSERIE' => 'required',
            'USUARIO_EMAIL' => 'required'
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
            $aviso = Acceso::create([
                'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE,
                'USUARIO_EMAIL' => $request->USUARIO_EMAIL
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'aviso' => $aviso,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Aviso $aviso)
    {
        $data = [
            'aviso' => $aviso,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aviso $aviso)
    {
        $datos = [
            'EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE,
            'USUARIO_EMAIL' => $request->USUARIO_EMAIL
        ];

        $validator = Validator::make($request->all(), [
            'EQUIPO_NUMSERIE' => 'required',
            'USUARIO_EMAIL' => 'required',
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
            DB::table('Aviso')
                ->where('ID', $aviso->ID)
                ->update(
                    ['EQUIPO_NUMSERIE' => $request->EQUIPO_NUMSERIE, 'USUARIO_EMAIL' => $request->USUARIO_EMAIL]
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
    public function destroy(Aviso $aviso)
    {
        try {
            DB::table('Aviso')
                ->where('ID', $aviso->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Aviso eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
