<?php

namespace App\Providers;

use App\Models\Acceso;
use App\Models\Comentario;
use App\Models\Movimiento;
use App\Models\Rol;
use App\Models\Sala;
use App\Models\TipoEquipo;
use App\Models\Trabajador;
use App\Models\User;
use App\Policies\AccesoPolicy;
use App\Policies\ComentarioPolicy;
use App\Policies\MovimientoPolicy;
use App\Policies\RolPolicy;
use App\Policies\SalaPolicy;
use App\Policies\TipoEquipoPolicy;
use App\Policies\TrabajadorPolicy;
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
        Gate::policy(Comentario::class, ComentarioPolicy::class);
        Gate::policy(Movimiento::class, MovimientoPolicy::class);
        Gate::policy(Rol::class, RolPolicy::class);
        Gate::policy(Sala::class, SalaPolicy::class);
        Gate::policy(TipoEquipo::class, TipoEquipoPolicy::class);
        Gate::policy(Trabajador::class, TrabajadorPolicy::class);
        Gate::policy(User::class, UserPolicy::class);
    }
}
