@extends('layouts.app')

@section('content')
    <h1>Data Detail</h1>
    <p>Nama: {{ $data->name }}</p>
    <!-- tambahkan field lain yang ingin ditampilkan -->
    <a href="{{ route('data.edit', $data->id) }}" class="btn btn-primary">Edit</a>
@endsection
