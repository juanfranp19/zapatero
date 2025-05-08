<?php

namespace App\Policies;

use App\Models\Acceso;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

class AccesoPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // solo admins
        return Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Acceso $acceso): bool
    {
        // propietarios y admins
        return $user->trabajador['id'] === $acceso->trabajador_id || Gate::allows('isAdmin', $user);
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
    public function update(User $user): bool
    {
        // admins
        return Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user): bool
    {
        // admins
        return Gate::allows('isAdmin', $user);
    }
}
