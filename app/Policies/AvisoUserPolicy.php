<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Support\Facades\Log;

class AvisoUserPolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, $avisoUser): bool
    {
        Log::info($avisoUser->pluck('user_id'));
        Log::info($user->id);

        // el avisoUser del propio usuario
        return $avisoUser->pluck('user_id')->first() === $user->id;
    }
}
