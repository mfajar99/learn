@extends('layouts.main')

@section('content')
   <div class="container">
       <h1>Organizations</h1>
       <a href="{{ route('organizations.create') }}" class="btn btn-primary mb-3">Add Organization</a>
       <table class="table">
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Short Name</th>
                   <th>Email</th>
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               @foreach($organizations as $organization)
               <tr>
                   <td>{{ $organization->name }}</td>
                   <td>{{ $organization->short_name }}</td>
                   <td>{{ $organization->email }}</td>
                   <td>
                       <a href="{{ route('organizations.edit', $organization->id) }}" class="btn btn-primary">Edit</a>
                       <form action="{{ route('organizations.destroy', $organization->id) }}" method="POST" style="display:inline">
                           @csrf
                           @method('DELETE')
                           <button type="submit" class="btn btn-danger">Delete</button>
                       </form>
                   </td>
               </tr>
               @endforeach
           </tbody>
       </table>
   </div>
@endsection
