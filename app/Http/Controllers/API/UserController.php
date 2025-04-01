<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        try {

            $users = UserResource::collection(
                User::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $users;
    }

    /**
     * Store a newly created resource in storage.
     */

    // la sustituye register

    /*public function store(Request $request)
    {
        try {

            $user = json_decode($request->getContent(), true);
            $user = User::create($user);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new UserResource($user);
    }*/

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $user = User::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($user) {

            $request->validate([
                'name' => 'required',
                'email' => 'required',
                'admin' => 'required',
                'password' => 'required',
                //'rol' => 'required',
                //'token' => 'required',
            ]);

            try {

                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->admin = $request->input('admin');
                $user->password = $request->input('password');
                $user->rol = $request->input('rol');
                $user->token = $request->input('token');
                $user->save();

                return response()->json(new UserResource($user), 200);

            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

        } else {
            return response()->json(['message' => 'User no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if ($user) {

            $user->delete();
            return response()->json(['message' => 'User eliminado'], 200);

        } else {
            return response()->json(['message' => 'User no encontrado'], 404);
        }
    }
}
