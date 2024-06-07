<?php

namespace App\Routes\api;

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

class AuthRoutes
{
    public static function getRoutes($prefix = '/auth')
    {
        return Route::group(['middleware' => [], 'prefix' => $prefix], function () {
            Route::post('/login', [AuthController::class, 'login']);
            Route::post('/register', [AuthController::class, 'register']);
            Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
        });
    }
}
