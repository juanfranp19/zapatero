<?php

namespace App\Observers;

use App\Models\Comentario;
use Illuminate\Support\Facades\Auth;

class ComentarioObserver
{
    /**
     * Asigna el id del user que crea y actualiza el comentario
     */
    public function saving(Comentario $comentario): void
    {
        $user = Auth::user();

        $comentario->user_id = $user->id;
    }
}
