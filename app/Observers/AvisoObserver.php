<?php

namespace App\Observers;

use App\Models\Aviso;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AvisoObserver
{
    /**
     * Evento que se ejecuta antes de crear o actualizar un aviso
     */
    public function saving(Aviso $aviso): void
    {
        // asigna el id del user que crea o actualiza el aviso
        $user = Auth::user();
        $aviso->user_id = $user->id;
    }

    /**
     * Evento que se ejecuta antes de crear un aviso
     */
    public function created(Aviso $aviso): void
    {
        // añade a la tabla avisos_users ese aviso por cada usuario
        $users = User::all();

        foreach ($users as $user) {

            $aviso->avisos_users()->attach($user, [
                'leido' => 0,
            ]);
        }
    }
}
