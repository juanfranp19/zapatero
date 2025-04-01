<?php

use App\Http\Controllers\API\AccesoController;
use App\Http\Controllers\API\AvisoController;
use App\Http\Controllers\API\ComentarioController;
use App\Http\Controllers\API\EquipoController;
use App\Http\Controllers\API\IncidenciaController;
use App\Http\Controllers\API\ParametroEficaciaController;
use App\Http\Controllers\API\PermisoController;
use App\Http\Controllers\API\SequenceController;
use App\Http\Controllers\API\TipoIncidenciaController;
use App\Http\Controllers\API\TipoParametroController;
use App\Http\Controllers\API\TrabajadorController;
use App\Http\Controllers\API\UsoController;
use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\ValorProduccionController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Psr\Http\Message\ServerRequestInterface;
use Tqdev\PhpCrudApi\Api;
use Tqdev\PhpCrudApi\Config\Config;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/logout', [AuthController::class, 'logout']);
});

Route::prefix('v1')->group(function(){

    // Acceso
    Route::apiResource('accesos', AccesoController::class);
    // Avisos
    Route::apiResource('avisos', AvisoController::class);
    // Comentario
    Route::apiResource('comentarios', ComentarioController::class);
    // Equipo
    Route::apiResource('equipos', EquipoController::class);
    // Incidencia
    Route::apiResource('incidencias', IncidenciaController::class);
    //ParametroEficacia
    Route::apiResource('parametros_eficacia', ParametroEficaciaController::class);
    // Permiso
    Route::apiResource('permisos', PermisoController::class);
    // Sequence
    Route::apiResource('sequences', SequenceController::class);
    // TipoIncidencia
    Route::apiResource('tipos_incidencias', TipoIncidenciaController::class);
    // TipoParametro
    Route::apiResource('tipos_parametros', TipoParametroController::class);
    // Trabajador
    Route::apiResource('trabajadores', TrabajadorController::class);
    // Uso
    Route::apiResource('usos', UsoController::class);
    // Usuario
    Route::apiResource('usuarios', UsuarioController::class);
    // ValorProduccion
    Route::apiResource('valores_produccion', ValorProduccionController::class);
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
