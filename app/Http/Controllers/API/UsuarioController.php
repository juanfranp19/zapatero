<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsuarioResource;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        try {

            $usuarios = UsuarioResource::collection(
                Usuario::orderBy('id')->paginate(5)
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
        try {

            $usuario = json_decode($request->getContent(), true);
            $usuario = Usuario::create($usuario);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new UsuarioResource($usuario);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $usuario = Usuario::findOrFail($id);
        return new UsuarioResource($usuario);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $usuario = Usuario::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($usuario) {

            $request->validate([
                'nombre' => 'required',
                'email' => 'required',
                'admin' => 'required',
                'password' => 'required',
                //'rol' => 'required',
                //'token' => 'required',
            ]);

            try {

                $usuario->nombre = $request->input('nombre');
                $usuario->email = $request->input('email');
                $usuario->admin = $request->input('admin');
                $usuario->password = $request->input('password');
                $usuario->rol = $request->input('rol');
                $usuario->token = $request->input('token');
                $usuario->save();

                return response()->json(new UsuarioResource($usuario), 200);

            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

        } else {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = Usuario::find($id);

        if ($usuario) {

            $usuario->delete();
            return response()->json(['message' => 'Usuario eliminado'], 200);

        } else {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
    }
}
