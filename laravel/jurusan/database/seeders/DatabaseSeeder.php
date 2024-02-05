<?php

namespace Database\Seeders;

use App\Models\Jurusan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Jurusan::create([
            'nama' => 'Struktur Organisasi',
            'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam voluptatem quo itaque ad eos natus ipsum similique amet nihil rem, maiores veniam sit totam, fugit reiciendis facere quibusdam perferendis sapiente facilis provident! Qui debitis blanditiis quaerat perspiciatis? Placeat, hic harum molestias omnis quia dolores veniam quidem ut maiores recusandae.'
        ]);
        Jurusan::create([
            'nama' => 'Visi-Misi',
            'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam voluptatem quo itaque ad eos natus ipsum similique amet nihil rem, maiores veniam sit totam, fugit reiciendis facere quibusdam perferendis sapiente facilis provident! Qui debitis blanditiis quaerat perspiciatis? Placeat, hic harum molestias omnis quia dolores veniam quidem ut maiores recusandae.'
        ]);
        Jurusan::create([
            'nama' => 'Sejarah Organisai',
            'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam voluptatem quo itaque ad eos natus ipsum similique amet nihil rem, maiores veniam sit totam, fugit reiciendis facere quibusdam perferendis sapiente facilis provident! Qui debitis blanditiis quaerat perspiciatis? Placeat, hic harum molestias omnis quia dolores veniam quidem ut maiores recusandae.'
        ]);
    }
}
