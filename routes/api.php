<?php

use App\Http\Controllers\API\AccesoController;
use App\Http\Controllers\API\AvisoController;
use App\Http\Controllers\API\ComentarioController;
use App\Http\Controllers\API\EquipoController;
use App\Http\Controllers\API\IncidenciaController;
use App\Http\Controllers\API\MovimientoController;
use App\Http\Controllers\API\ParametroEficaciaController;
use App\Http\Controllers\API\PermisoController;
use App\Http\Controllers\API\RolController;
use App\Http\Controllers\API\SalaController;
use App\Http\Controllers\API\SequenceController;
use App\Http\Controllers\API\TipoEquipoController;
use App\Http\Controllers\API\TipoIncidenciaController;
use App\Http\Controllers\API\TipoParametroController;
use App\Http\Controllers\API\TrabajadorController;
use App\Http\Controllers\API\UsoController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ValorProduccionController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckAdminGate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Psr\Http\Message\ServerRequestInterface;
use Tqdev\PhpCrudApi\Api;
use Tqdev\PhpCrudApi\Config\Config;

Route::post('/login', [AuthController::class, 'login']);

/**
 *  para autenticados
 */
Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/register', [AuthController::class, 'register'])->middleware(CheckAdminGate::class);
    Route::get('/logout', [AuthController::class, 'logout']);

    /**
     *  base de datos
     */
    Route::prefix('v1')->group(function(){

        Route::get('accesos', [AccesoController::class, 'index']);
        Route::get('accesos/{id}', [AccesoController::class, 'show']);

        Route::get('avisos', [AvisoController::class, 'index']);
        Route::get('avisos/{id}', [AvisoController::class, 'show']);

        Route::get('comentarios', [ComentarioController::class, 'index']);
        Route::get('comentarios/{id}', [ComentarioController::class, 'show']);

        Route::get('equipos', [EquipoController::class, 'index']);
        Route::get('equipos/{id}', [EquipoController::class, 'show']);

        Route::get('incidencias', [IncidenciaController::class, 'index']);
        Route::get('incidencias/{id}', [IncidenciaController::class, 'show']);

        Route::get('parametros_eficacia', [ParametroEficaciaController::class, 'index']);
        Route::get('parametros_eficacia/{id}', [ParametroEficaciaController::class, 'show']);

        Route::get('permisos', [PermisoController::class, 'index']);
        Route::get('permisos/{id}', [PermisoController::class, 'show']);

        Route::get('sequences', [SequenceController::class, 'index']);
        Route::get('sequences/{id}', [SequenceController::class, 'show']);

        Route::get('tipos_incidencias', [TipoIncidenciaController::class, 'index']);
        Route::get('tipos_incidencias/{id}', [TipoIncidenciaController::class, 'show']);

        Route::get('tipos_parametros', [TipoParametroController::class, 'index']);
        Route::get('tipos_parametros/{id}', [TipoParametroController::class, 'show']);

        Route::get('trabajadores', [TrabajadorController::class, 'index']);
        Route::get('trabajadores/{id}', [TrabajadorController::class, 'show']);

        Route::get('usos', [UsoController::class, 'index']);
        Route::get('usos/{id}', [UsoController::class, 'show']);
        Route::post('usos', [UsoController::class, 'store']);
        Route::put('usos/{id}', [UsoController::class, 'update']);
        Route::delete('usos/{id}', [UsoController::class, 'destroy']);

        Route::get('users', [UserController::class, 'index']);
        Route::get('users/{id}', [UserController::class, 'show']);

        Route::get('valores_produccion', [ValorProduccionController::class, 'index']);
        Route::get('valores_produccion/{id}', [ValorProduccionController::class, 'show']);

        Route::get('salas', [SalaController::class, 'index']);
        Route::get('salas/{id}', [SalaController::class, 'show']);

        Route::get('tipos_equipo', [TipoEquipoController::class, 'index']);
        Route::get('tipos_equipo/{id}', [TipoEquipoController::class, 'show']);

        Route::get('movimientos', [MovimientoController::class, 'index']);
        Route::get('movimientos/{id}', [MovimientoController::class, 'show']);
        Route::post('movimientos', [MovimientoController::class, 'store']);
        Route::put('movimientos/{id}', [MovimientoController::class, 'update']);
        Route::delete('movimientos/{id}', [MovimientoController::class, 'destroy']);

        Route::get('roles', [RolController::class, 'index']);
        Route::get('roles/{id}', [RolController::class, 'show']);

        /**
         *  para admin
         */
        Route::middleware([CheckAdminGate::class])->group(function () {

            Route::post('accesos', [AccesoController::class, 'store']);
            Route::put('accesos/{id}', [AccesoController::class, 'update']);
            Route::delete('accesos/{id}', [AccesoController::class, 'destroy']);

            Route::post('avisos', [AvisoController::class, 'store']);
            Route::put('avisos/{id}', [AvisoController::class, 'update']);
            Route::delete('avisos/{id}', [AvisoController::class, 'destroy']);

            Route::post('comentarios', [ComentarioController::class, 'store']);
            Route::put('comentarios/{id}', [ComentarioController::class, 'update']);
            Route::delete('comentarios/{id}', [ComentarioController::class, 'destroy']);

            Route::post('equipos', [EquipoController::class, 'store']);
            Route::put('equipos/{id}', [EquipoController::class, 'update']);
            Route::delete('equipos/{id}', [EquipoController::class, 'destroy']);

            Route::post('incidencias', [IncidenciaController::class, 'store']);
            Route::put('incidencias/{id}', [IncidenciaController::class, 'update']);
            Route::delete('incidencias/{id}', [IncidenciaController::class, 'destroy']);

            Route::post('parametros_eficacia', [ParametroEficaciaController::class, 'store']);
            Route::put('parametros_eficacia/{id}', [ParametroEficaciaController::class, 'update']);
            Route::delete('parametros_eficacia/{id}', [ParametroEficaciaController::class, 'destroy']);

            Route::post('permisos', [PermisoController::class, 'store']);
            Route::put('permisos/{id}', [PermisoController::class, 'update']);
            Route::delete('permisos/{id}', [PermisoController::class, 'destroy']);

            Route::post('sequences', [SequenceController::class, 'store']);
            Route::put('sequences/{id}', [SequenceController::class, 'update']);
            Route::delete('sequences/{id}', [SequenceController::class, 'destroy']);

            Route::post('tipos_incidencias', [TipoIncidenciaController::class, 'store']);
            Route::put('tipos_incidencias/{id}', [TipoIncidenciaController::class, 'update']);
            Route::delete('tipos_incidencias/{id}', [TipoIncidenciaController::class, 'destroy']);

            Route::post('tipos_parametros', [TipoParametroController::class, 'store']);
            Route::put('tipos_parametros/{id}', [TipoParametroController::class, 'update']);
            Route::delete('tipos_parametros/{id}', [TipoParametroController::class, 'destroy']);

            Route::post('trabajadores', [TrabajadorController::class, 'store']);
            Route::put('trabajadores/{id}', [TrabajadorController::class, 'update']);
            Route::delete('trabajadores/{id}', [TrabajadorController::class, 'destroy']);

            Route::post('users', [UserController::class, 'store']);
            Route::put('users/{id}', [UserController::class, 'update']);
            Route::delete('users/{id}', [UserController::class, 'destroy']);

            Route::post('valores_produccion', [ValorProduccionController::class, 'store']);
            Route::put('valores_produccion/{id}', [ValorProduccionController::class, 'update']);
            Route::delete('valores_produccion/{id}', [ValorProduccionController::class, 'destroy']);

            Route::post('salas', [SalaController::class, 'store']);
            Route::put('salas/{id}', [SalaController::class, 'update']);
            Route::delete('salas/{id}', [SalaController::class, 'destroy']);

            Route::post('tipos_equipo', [TipoEquipoController::class, 'store']);
            Route::put('tipos_equipo/{id}', [TipoEquipoController::class, 'update']);
            Route::delete('tipos_equipo/{id}', [TipoEquipoController::class, 'destroy']);

            Route::post('roles', [RolController::class, 'store']);
            Route::put('roles/{id}', [RolController::class, 'update']);
            Route::delete('roles/{id}', [RolController::class, 'destroy']);
        });
    });
});

Route::any('/{any}', function (ServerRequestInterface $request) {
    $config = new Config([
        'address' => env('DB_HOST', '127.0.0.1'),
        'database' => env('DB_DATABASE', 'forge'),
        'username' => env('DB_USERNAME', 'forge'),
        'password' => env('DB_PASSWORD', ''),
        'basePath' => '/api',
    ]);
    $api = new Api($config);
    $response = $api->handle($request);

    try {
        $records = json_decode($response->getBody()->getContents())->records;
        $response = response()->json($records, 200, $headers = ['X-Total-Count' => count($records)]);
    } catch (\Throwable $th) {
    }

    return $response;

})->where('any', '.*');
