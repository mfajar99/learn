<!DOCTYPE html>
<html>
<head>
    <title>Laravel 8 CRUD with Navbar Dropdown - Show</title>
    <!-- Tambahkan CSS atau Bootstrap jika diperlukan -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
</head>
<body>
    <h2>Detail Jurusan</h2>
    <div class="form-group">
        <label for="nama">Nama:</label>
        <input type="text" class="form-control" id="nama" name="nama" value="{{ $jurusan->nama }}" readonly>
    </div>
    <div class="form-group">
        <label for="deskripsi">Deskripsi:</label>
        <textarea class="form-control" id="deskripsi" name="deskripsi" readonly>{{ $jurusan->deskripsi }}</textarea>
    </div>
</body>
</html>
