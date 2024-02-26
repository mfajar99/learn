<?php  

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

$respons = $client->request('GET', 'http://omdbapi.com', [
  'query' => [
    'apikey' => '4690078d',
    's' => 'transformers'
  ]
]); 

$result = json_decode($respons->getBody()->getContents(), true);

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Movie</title>
</head>
<body>
<?php foreach ($result['Search'] as $movie) : ?>
  <ul>
    <li>Title: <?= $movie['Title']; ?></li>
    <li>Year: <?= $movie['Year']; ?></li>
    <li><img src="<?= $movie['Poster']; ?>" width="80"></li>
  </ul>
<?php endforeach; ?>
</body>
</html>