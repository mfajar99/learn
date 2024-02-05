<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use Illuminate\Http\Request;


class JurusanController extends Controller
{
    public function index()
    {
        return view('jurusans.index', [
            'jurusans' => Jurusan::all()
        ]);
    }

    public function create()
    {
        return view('jurusans.create', [
            'jurusans' => Jurusan::all()
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',

        ]);

        Jurusan::create($validatedData);

        return redirect('/jurusans')->with('success', 'Jurusan berhasil diubah!');
    }

    public function show(Jurusan $jurusan)
    {
        return view('jurusans.show', compact('jurusan'));
    }

    public function edit(Jurusan $jurusan)
    {
        return view('jurusans.edit', compact('jurusan'));
    }

    public function update(Request $request, Jurusan $jurusan)
    {
        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
        ]);

        $jurusan->update($request->all());

        return redirect()->route('jurusans.index')
            ->with('success', 'Jurusan updated successfully');
    }

    public function destroy(Jurusan $jurusan)
    {
        $jurusan->delete();

        return redirect()->route('jurusans.index')
            ->with('success', 'Jurusan deleted successfully');
    }
}
