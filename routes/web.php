<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\ContactController;
Route::get('/', function () {
    return view('welcome');
});
Route::get('/test', function () {
    return 'Test route works!';
});

Route::get('/hello', [HelloController::class, 'show']);
Route::get('/contact', [ContactController::class, 'create']);
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
