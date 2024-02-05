<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use Illuminate\Http\Request;

class DropdownController extends Controller
{
    public function index()
    {

        $jurusans = Jurusan::all();
    
        return view('index', ['jurusans' => $jurusans]);
    }

    public function show(Jurusan $jurusan)
    {
        return view('show.show', compact('jurusan'));
    }
}
