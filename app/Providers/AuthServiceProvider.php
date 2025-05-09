<?php

namespace App\Providers;

use App\Models\Acceso;
use App\Models\Rol;
use App\Models\User;
use App\Policies\AccesoPolicy;
use App\Policies\RolPolicy;
use App\Policies\UserPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // gates

        Gate::define('isPropietario', function (User $user, $model) {
            // devualve true si el usuario que hace la petición coincide con el user_id de la petición
            return $model->user_id === $user->id;
        });

        Gate::define('isAdmin', function (User $user) {

            // devuelve true si el usuario tiene rol admin
            return $user->rol_id === 1;
        });

        Gate::define('isMantenimiento', function (User $user) {
            // devuelve true si el usuario tiene rol mantenimiento
            return $user->rol_id === 2;
        });

        Gate::define('isPracticas', function (User $user) {
            // devuelve true si el usuario tiene rol prácticas
            return $user->rol_id === 3;
        });

        Gate::define('isUniversitario', function (User $user) {
            // devuelve true si el usuario tiene rol universitario
            return $user->rol_id === 4;
        });

        // policies

        Gate::policy(Acceso::class, AccesoPolicy::class);
        Gate::policy(Rol::class, RolPolicy::class);
        Gate::policy(User::class, UserPolicy::class);
    }
}
