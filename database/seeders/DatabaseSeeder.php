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
        $this->command->info("archivo equipo_insert ejecutado");

        $this->call(UsuarioTableSeeder::class);
        $this->command->info("archivo usuario_insert ejecutado");

        $this->call(ValoresProducionTableSeeder::class);
        $this->command->info("archivo valoresproduccion_insert ejecutado");

        $this->call(TrabajadorTableSeeder::class);
        $this->command->info("archivo trabajador_insert ejecutado");

        $this->call(PermisoTableSeeder::class);
        $this->command->info("archivo permiso_insert ejecutado");

        $this->call(UsoTableSeeder::class);
        $this->command->info("archivo uso_insert ejecutado");

        $this->call(TipoIncidenciaTableSeeder::class);
        $this->command->info("archivo tipoincidencia_insert ejecutado");

        $this->call(IncidenciaTableSeeder::class);
        $this->command->info("archivo incidencia_insert ejecutado");

        $this->call(TipoParametroTableSeeder::class);
        $this->command->info("archivo tipoparametro_insert ejecutado");

        $this->call(ParametroEficaciaTableSeeder::class);
        $this->command->info("archivo parametroeficacia_insert ejecutado");

        $this->call(AccesoTableSeeder::class);
        $this->command->info("archivo acceso_insert ejecutado");

        $this->call(AvisoTableSeeder::class);
        $this->command->info("archivo aviso_insert ejecutado");

        $this->call(ComentarioTableSeeder::class);
        $this->command->info("archivo comentario_insert ejecutado");

        $this->call(SEQUENCETableSeeder::class);
        $this->command->info("archivo sequence_insert ejecutado");
    }
}
