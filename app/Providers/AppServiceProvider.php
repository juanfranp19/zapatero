<?php

namespace App\Providers;

use App\Models\Acceso;
use App\Models\Equipo;
use App\Models\Movimiento;
use App\Models\User;
use App\Observers\AccesoObserver;
use App\Observers\EquipoObserver;
use App\Observers\MovimientoObserver;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // gates

        Gate::define('isAdmin', function (User $user) {
            // devuelve true si en usuarios, la columna admin tiene valor 1 o la columna rol tiene valor "ADMIN"
            return $user->admin === 1 || $user->rol === 'ADMIN';
        });

        // observadores

        Equipo::observe(EquipoObserver::class);
        Acceso::observe(AccesoObserver::class);
        Movimiento::observe(MovimientoObserver::class);
    }
}
