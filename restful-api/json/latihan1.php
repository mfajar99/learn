<?php 
// $mahasiswa = 
// [
//   [
//     "nama" => "Muhammad Fajar",
//     "nim" => "2016520021",
//     "email" => "fajarreal97@gmail.com"
//   ],
//   [
//     "nama" => "Abdussalama",
//     "nim" => "2016520034",
//     "email" => "abdussalam@gmail.com"
//   ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>