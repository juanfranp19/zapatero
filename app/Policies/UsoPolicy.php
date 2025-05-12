<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Uso;
use Illuminate\Support\Facades\Gate;

class UsoPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Uso $uso): bool
    {
        // propietario y admin
        return $user->trabajador['id'] === $uso->trabajador_id || Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Uso $uso): bool
    {
        // propietario y admin
        return $user->trabajador['id'] === $uso->trabajador_id || Gate::allows('isAdmin', $user);
    }
}
