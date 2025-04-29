<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {

            // valida los datos del registro
            $data = $request->validate([
                'name' => ['required', 'string'],
                'email' => ['required', 'email'],
                'admin' => [],
                'password' => ['required', 'confirmed', 'min:8'],
                'rol' => [],
            ]);

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }

        try {

            // crea el modelo con los datos
            $user = User::create($data);

            // devulve el nombre del usuario creado
            return response()->json([
                'user' => $user
            ], 201);

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        try {

            // valida los datos del login
            $data = $request->validate([
                'email' => ['required', 'email', 'exists:users'],
                'password' => ['required'],
            ]);

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }

        // verifica que estén los datos en la base de datos
        $user = User::where('email', $data['email'])->first();

        // si no encuentra el user o la contraseña es incorrecta, devuelve error 401
        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response([
                'message' => 'Email o contraseña incorrectos'
            ], 401);
        }

        try {

            // crea el token
            $token = $user->createToken('auth_token')->plainTextToken;

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuelve mensaje, nombre de usuario y token
        return response()->json([
            'message' => 'Has iniciado sesión',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function logout()
    {
        try {

            // elimina el token
            auth()->user()->tokens()->delete();

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuelve mensaje
        return response()->json([
            'message' => 'Has cerrado sesión',
        ], 200);
    }
}
