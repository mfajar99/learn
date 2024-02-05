<!DOCTYPE html>
<html>

<head>
    <title>Laravel 8 CRUD with Dropdown Menu</title>
    <!-- Tambahkan CSS atau Bootstrap jika diperlukan -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container">
        <h2>Data Jurusan</h2>
        <a href="{{ route('jurusans.create') }}" class="btn btn-primary">Tambah Jurusan</a>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($jurusans as $jurusan)
                    <tr>
                        <td>{{ $jurusan->id }}</td>
                        <td>{{ $jurusan->nama }}</td>
                        <td>{{ $jurusan->deskripsi }}</td>
                        <td>
                            <form action="{{ route('jurusans.destroy', $jurusan->id) }}" method="POST">
                                <a href="{{ route('jurusans.show', $jurusan->id) }}" class="btn btn-info">Detail</a>
                                <a href="{{ route('jurusans.edit', $jurusan->id) }}" class="btn btn-primary">Edit</a>
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
</body>

</html>
