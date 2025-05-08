<?php

namespace App\Providers;

use App\Models\Acceso;
use App\Models\Equipo;
use App\Models\Movimiento;
use App\Observers\AccesoObserver;
use App\Observers\EquipoObserver;
use App\Observers\MovimientoObserver;
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
        // observadores

        Equipo::observe(EquipoObserver::class);
        Acceso::observe(AccesoObserver::class);
        Movimiento::observe(MovimientoObserver::class);
    }
}
