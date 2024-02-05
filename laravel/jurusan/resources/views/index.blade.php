<!DOCTYPE html>
<html>
<head>
    <title>Laravel 8 CRUD with Navbar Dropdown - Navbar</title>
    <!-- Tambahkan CSS atau Bootstrap jika diperlukan -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
</head>
<body>
    <nav>
        <ul>
            <li><a href="{{ route('home') }}">Home</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Jurusan <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    @foreach($jurusans as $jurusan)
                    <li>{{ $jurusan->nama }}</li>
                    @endforeach
                </ul>
            </li>
        </ul>
    </nav>
    @yield('content')
    <!-- Tambahkan script JavaScript atau jQuery jika diperlukan -->
</body>
</html>
