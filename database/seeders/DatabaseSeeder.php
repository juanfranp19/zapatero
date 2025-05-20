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
        $this->call(SalasTableSeeder::class);
        $this->command->info("SalasTableSeeder ejecutado");

        $this->call(TiposEquipoTableSeeder::class);
        $this->command->info("TiposEquipoTableSeeder ejecutado");

        $this->call(EquiposTableSeeder::class);
        $this->command->info("EquiposTableSeeder ejecutado");

        $this->call(RolSeeder::class);
        $this->command->info("RolSeeder ejecutado");

        $this->call(UsersTableSeeder::class);
        $this->command->info("UsersTableSeeder ejecutado");

        $this->call(ValoresProducionTableSeeder::class);
        $this->command->info("ValoresProducionTableSeeder ejecutado");

        $this->call(TrabajadoresTableSeeder::class);
        $this->command->info("TrabajadoresTableSeeder ejecutado");

        $this->call(PermisosTableSeeder::class);
        $this->command->info("PermisosTableSeeder ejecutado");

        $this->call(UsosTableSeeder::class);
        $this->command->info("UsosTableSeeder ejecutado");

        $this->call(TiposIncidenciasTableSeeder::class);
        $this->command->info("TiposIncidenciasTableSeeder ejecutado");

        $this->call(IncidenciasTableSeeder::class);
        $this->command->info("IncidenciasTableSeeder ejecutado");

        $this->call(TiposParametrosTableSeeder::class);
        $this->command->info("TiposParametrosTableSeeder ejecutado");

        $this->call(ParametrosEficaciaTableSeeder::class);
        $this->command->info("ParametrosEficaciaTableSeeder ejecutado");

        $this->call(AccesosTableSeeder::class);
        $this->command->info("AccesosTableSeeder ejecutado");

        $this->call(AvisosTableSeeder::class);
        $this->command->info("AvisosTableSeeder ejecutado");

        $this->call(ComentariosTableSeeder::class);
        $this->command->info("ComentariosTableSeeder ejecutado");

        $this->call(SequencesTableSeeder::class);
        $this->command->info("SequencesTableSeeder ejecutado");

        $this->call(MovimientosTableSeeder::class);
        $this->command->info("MovimientosTableSeeder ejecutado");

        $this->call(AvisosUsersTableSeeder::class);
        $this->command->info("AvisosUsersTableSeeder ejecutado");
    }
}
