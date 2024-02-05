<?php

use App\Http\Controllers\DropdownController;
use App\Http\Controllers\JurusanController;


Route::resource('/jurusans', JurusanController::class);


// Route::get('/{jurusan}', [DropdownController::class, 'detail'])->name('detail');
Route::get('/', [DropdownController::class, 'index'])->name('home');
// Route::get('/', function () {
//    return view('index');
// })->name('home');


