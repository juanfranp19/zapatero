<?php

use App\Http\Controllers\API\AccesoController;

use App\Http\Controllers\API\AvisoController;
use App\Http\Controllers\API\EquipoController;
use App\Http\Controllers\API\PermisoController;
use App\Http\Controllers\API\TrabajadorController;
use App\Http\Controllers\API\UsoController;
use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\ComentarioController;
use App\Http\Controllers\API\IncidenciaController;
use App\Http\Controllers\API\SequenceController;

use App\Http\Resources\UsuarioResource;

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
    Route::apiResource('uso', UsoController::class);
    Route::apiResource('usuario', UsuarioResource::class);
    Route::get('usuario', [UsuarioController::class,'index']);
    Route::get('usuario/{id}', [UsuarioController::class,'show']);

    Route::apiResource('comentario', ComentarioController::class);
    Route::apiResource('sequence', SequenceController::class);

    Route::apiResource('incidencias', IncidenciaController::class);


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
