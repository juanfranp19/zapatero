<?php

use App\Http\Controllers\API\AccesoController;
use App\Http\Controllers\API\ComentarioController;
use App\Http\Controllers\API\IncidenciaController;
use App\Http\Controllers\API\SequenceController;
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
    Route::apiResource('comentario', ComentarioController::class);
    Route::apiResource('sequence', SequenceController::class);
    Route::apiResource('incidencia', IncidenciaController::class);

    Route::get('incidencia/{incidencia}', [IncidenciaController::class, 'show']);

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
