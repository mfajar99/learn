@extends('layouts.app')

@section('content')
    <h1>Edit Data</h1>
    <form action="{{ route('data.update', $data->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" class="form-control" id="name" name="name" value="{{ $data->name }}">
        </div>
        <!-- tambahkan field lain yang ingin diubah -->
        <button type="submit" class="btn btn-primary">Simpan</button>
    </form>
@endsection
