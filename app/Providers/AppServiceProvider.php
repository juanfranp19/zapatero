<?php

namespace App\Providers;

use App\Models\Equipo;
use App\Models\User;
use App\Observers\EquipoObserver;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
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
        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url')."/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
        });

        Gate::define('isAdmin', function (User $user) {
            return $user->admin === 1 || $user->rol === 'ADMIN';
        });

        Equipo::observe(EquipoObserver::class);
    }
}
