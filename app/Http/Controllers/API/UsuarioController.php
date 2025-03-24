<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsuarioResource;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /* public function index()
    {
        try{
            $usuarios = Usuario::all();
            return $usuarios;
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        /*
        try {
            $usuarios = UsuarioResource::collection(
                Usuario::orderBy('EMAIL')->paginate(5)
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return $usuarios;
        */
    // }

    public function index()
    {
        try {
            $usuarios = UsuarioResource::collection(
                Usuario::orderBy('EMAIL')->paginate(5)
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return $usuarios;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'EMAIL' => 'required',
            'ADMIN' => 'required',
            'NOMBRE' => 'required',
            'PASSWORD' => 'required',
            'ROL' => 'required',
            'TOKEN' => 'required'
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
            $usuario = Usuario::create([
                'EMAIL' => $request->EMAIL,
                'ADMIN' => $request->ADMIN,
                'NOMBRE' => $request->NOMBRE,
                'PASSWORD' => $request->PASSWORD,
                'ROL' => $request->ROL,
                'TOKEN' => $request->TOKEN
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'usuario' => $usuario,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    /* public function show(Usuario $usuario)
    {
        $data = [
            'usuario' => $usuario,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
*/
    public function show($id)
    {
        $usuario = Usuario::findOrFail($id);
        return new UsuarioResource($usuario);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Usuario $usuario)
    {
        $datos = [
            'EMAIL' => $request->EMAIL,
            'ADMIN' => $request->ADMIN,
            'NOMBRE' => $request->NOMBRE,
            'PASSWORD' => $request->PASSWORD,
            'ROL' => $request->ROL,
            'TOKEN' => $request->TOKEN
        ];

        $validator = Validator::make($request->all(), [
            'EMAIL' => 'required',
            'ADMIN' => 'required',
            'NOMBRE' => 'required',
            'PASSWORD' => 'required',
            'ROL' => 'required',
            'TOKEN' => 'required'
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
            DB::table('Usuario')
                ->where('ID', $usuario->ID)
                ->update(
                    ['EMAIL' => $request->EMAIL, 'ADMIN' => $request->ADMIN, 'NOMBRE' => $request->NOMBRE, 'PASSWORD' => $request->PASSWORD, 'ROL' => $request->ROL, 'TOKEN' => $request->TOKEN]
                );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Usuario actualizado',
            'usuario' => $datos,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Usuario $usuario)
    {
        try {
            DB::table('Usuario')
                ->where('ID', $usuario->ID)
                ->delete();

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        $data = [
            'message' => 'Usuario eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
