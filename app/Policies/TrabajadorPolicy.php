<?php

namespace App\Policies;

use App\Models\Trabajador;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

class TrabajadorPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // admin
        return Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Trabajador $trabajador): bool
    {
        // mismo usuario o admin
        return $user->id === $trabajador->user_id || Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        // admin
        return Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user): bool
    {
        // admin
        return Gate::allows('isAdmin', $user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user): bool
    {
        // admin
        return Gate::allows('isAdmin', $user);
    }
}
