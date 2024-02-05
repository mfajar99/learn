@extends('layouts.main')

@section('content')
    <div class="container">
        <h1>Add Organization</h1>
        <form action="{{ route('organizations.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" required>
            </div>
            <div class="form-group">
                <label for="short_name">Short Name:</label>
                <input type="text" class="form-control" name="short_name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
@endsection
