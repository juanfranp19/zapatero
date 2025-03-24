<?php

use App\Http\Controllers\API\AccesoController;
use App\Http\Controllers\API\AvisoController;
use App\Http\Controllers\API\EquipoController;
use App\Http\Controllers\API\PermisoController;
use App\Http\Controllers\API\TrabajadorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Psr\Http\Message\ServerRequestInterface;
use Tqdev\PhpCrudApi\Api;
use Tqdev\PhpCrudApi\Config\Config;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function(){
    Route::apiResource('acceso', AccesoController::class);
    Route::apiResource('aviso', AvisoController::class);
    Route::apiResource('equipo', EquipoController::class);
    Route::apiResource('permiso', PermisoController::class);
    Route::apiResource('trabajador', TrabajadorController::class);
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
