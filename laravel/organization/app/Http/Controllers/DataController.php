<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function show($id)
    {
        $data = Data::find($id);

        return view('data.show', compact('data'));
    }

    public function edit($id)
    {
        $data = Data::find($id);

        return view('data.edit', compact('data'));
    }

    public function update(Request $request, $id)
    {
        $data = Data::find($id);
        $data->name = $request->input('name');
        // tambahkan field lain yang ingin diubah

        $data->save();

        return redirect()->route('data.show', $id)->with('success', 'Data berhasil diperbarui!');
    }
}
