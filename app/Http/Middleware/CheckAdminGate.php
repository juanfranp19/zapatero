<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class CheckAdminGate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // si el usuario tiene el gate: isAdmin; tiene permitido entrar al $request, si no, aborta 403

        if (!Gate::allows('isAdmin', auth()->user())) {
            abort(403);
        }

        return $next($request);
    }
}
