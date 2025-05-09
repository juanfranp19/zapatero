<?php

use App\Http\Controllers\StorageController;
use Illuminate\Support\Facades\Route;

// archivos privados
Route::get('/storage/private/{tabla}/{columna}/{archivo}', [StorageController::class, 'showPrivate'])
    ->middleware(['auth:sanctum']);

// archivos públicos
Route::get('/storage/public/{tabla}/{columna}/{archivo}', [StorageController::class, 'showPublic']);
