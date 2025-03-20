<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call(EquipoTableSeeder::class);
        $this->call(UsuarioTableSeeder::class);
        $this->call(ValoresProducionTableSeeder::class);
        $this->call(TrabajadorTableSeeder::class);
        $this->call(PermisoTableSeeder::class);
        $this->call(UsoTableSeeder::class);
        $this->call(TipoIncidenciaTableSeeder::class);
        $this->call(IncidenciaTableSeeder::class);
        $this->call(TipoParametroTableSeeder::class);
        $this->call(ParametroEficaciaTableSeeder::class);
        $this->call(AccesoTableSeeder::class);
        $this->call(AvisoTableSeeder::class);
        $this->call(ComentarioTableSeeder::class);
        $this->call(SEQUENCETableSeeder::class);
    }
}
