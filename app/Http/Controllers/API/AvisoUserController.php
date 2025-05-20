<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Aviso;
use App\Models\AvisoUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class AvisoUserController extends Controller
{
    /**
     * Actualiza el valor pivot de la tabla: leido
     */
    public function update($aviso_id)
    {
        $aviso = Aviso::with('avisos_users')->findOrFail($aviso_id);

        // usuario autenticado
        $user = Auth::user();

        // fila que se actualiza
        $avisoUser = $aviso->avisos_users()->where('user_id', $user->id);

        //\Log::info($aviso->avisos_users()->where('user_id', $user->id)->pluck('user_id'));

        Gate::authorize('update', [AvisoUser::class, $avisoUser]);

        // si el user está en el aviso, lo actualiza; si no, salta error
        if ($avisoUser->exists()) {

            // actualiza el leido del user especificado del aviso
            $aviso->avisos_users()->updateExistingPivot($user->id, [
                'leido' => 1,
            ]);

            return response('', 204);

        } else {

            return response()->json(['message' => 'user no encontrado'], 404);
        }
    }
}
