<?php

namespace App\Providers;

use App\Models\Acceso;
use App\Models\Comentario;
use App\Models\Equipo;
use App\Models\Movimiento;
use App\Models\Trabajador;
use App\Models\User;
use App\Models\Uso;
use App\Observers\AccesoObserver;
use App\Observers\ComentarioObserver;
use App\Observers\EquipoObserver;
use App\Observers\MovimientoObserver;
use App\Observers\TrabajadorObserver;
use App\Observers\UserObserver;
use App\Observers\UsoObserver;
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
        Comentario::observe(ComentarioObserver::class);
        Movimiento::observe(MovimientoObserver::class);
        Trabajador::observe(TrabajadorObserver::class);
        User::observe(UserObserver::class);
        Uso::observe(UsoObserver::class);
    }
}
