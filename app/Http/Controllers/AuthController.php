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

            $user = User::create($data);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token,
            ], 201);

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        try {

            $data = $request->validate([
                'email' => ['required', 'email', 'exists:users'],
                'password' => ['required'],
            ]);

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response([
                'message' => 'Email o contraseña incorrectos'
            ], 401);
        }

        try {

            $token = $user->createToken('auth_token')->plainTextToken;

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json([
            'message' => 'Has iniciado sesión',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function logout()
    {
        try {

            auth()->user()->tokens()->delete();

        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json([
            'message' => 'Has cerrado sesión',
        ], 200);
    }
}
