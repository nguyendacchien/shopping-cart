<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('users', [\App\Http\Controllers\Api\UserController::class,'getAll']);
Route::get('product', [\App\Http\Controllers\ProductController::class,'index']);
Route::get('addToCart/{id}',[\App\Http\Controllers\ProductController::class,'addToCart']);
Route::get('cart',[\App\Http\Controllers\ProductController::class,'getCart']);

