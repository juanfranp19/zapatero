<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class EquipoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = database_path('sql/insert/equipo_insert.sql');

        if (!File::exists($file)) {
            echo "no hay archivo SQL\n";
            return;
        }

        $sql = File::get($file);

        DB::unprepared($sql);

        $this->command->info("archivo equipo_insert ejecutado");
    }
}
