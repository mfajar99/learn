<?php

use App\Http\Controllers\OrganizationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/data/{id}', 'DataController@show')->name('data.show');
Route::get('/data/{id}/edit', 'DataController@edit')->name('data.edit');
Route::put('/data/{id}', 'DataController@update')->name('data.update');

