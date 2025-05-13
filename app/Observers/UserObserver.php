<?php

namespace App\Observers;

use App\Models\Trabajador;
use App\Models\User;
use Illuminate\Support\Facades\Request;

class UserObserver
{
    /**
     * Evento que se ejecuta antes de registrar a un usuario
     */
    public function creating(User $user): void
    {
        // si uno de estos campos está repetido en la base de datos, aborta el registro del usuario
        if (User::where('name', $user->name)->exists()) abort(403, 'Ya existe un usuario con ese nombre.');
        if (User::where('email', $user->email)->exists()) abort(403, 'Ya existe un usuario con ese email.');

        // datos de entrada
        $request = Request::instance();

        if ($request->has('trabajador')) {

            // encuentra al trabajador que se le asigna al usuario
            $trabajador = Trabajador::findOrFail($request->input('trabajador'));

            // si ese trabajador ya tiene un usuario, aborta
            if ($trabajador->user_id !== null) abort(403, 'Este trabajador ya tiene un usuario asigando');
        }
    }

    /**
     * Evento que se ejecuta una vez se haya registrado el usuario
     */
    public function created(User $user): void
    {
        // datos de entrada
        $request = Request::instance();

        if ($request->has('trabajador')) {

            // encuentra al trabajador que se le asigna al usuario
            $trabajador = Trabajador::findOrFail($request->input('trabajador'));

            // actualiza el user_id de ese trabajador
            $trabajador->update([
                'user_id' => $user->id,
            ]);
        }
    }
}
