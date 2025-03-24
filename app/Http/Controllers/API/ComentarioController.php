<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use App\Models\Comentario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Stmt\TryCatch;

class ComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $comentarios = ComentarioResource::collection(
                Comentario::orderBy('ID')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $comentarios;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'COMENTARIO' => 'required',
            'FECHA' => 'required',
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
            $comentario = Comentario::create([
                'COMENTARIO' => $request->COMENTARIO,
                'FECHA' => $request->FECHA,
                'USUARIO_EMAIL' => $request->USUARIO_EMAIL,
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'comentario' => $comentario,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comentario $comentario)
    {
        $data = [
            'comentario' => $comentario,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comentario $comentario)
    {
        $datos = [
            'COMENTARIO' => $request->COMENTARIO,
            'FECHA' => $request->FECHA,
            'USUARIO_EMAIL' => $request->USUARIO_EMAIL,
        ];

        $validator = Validator::make($request->all(), [
            'COMENTARIO' => 'required',
            'FECHA' => 'required',
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
            DB::table('Comentario')
                ->where('ID', $comentario->ID)
                ->update($datos);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Comentario actualizado',
            'comentario' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comentario $comentario)
    {
        try {
            DB::table('Comentario')
                ->where('ID', $comentario->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Comentario eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
