<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class PermisoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = database_path('sql/insert/permiso_insert.sql');

        if (!File::exists($file)) {
            echo "no hay archivo SQL\n";
            return;
        }

        $sql = File::get($file);

        DB::unprepared($sql);

        $this->command->info("archivo permiso_insert ejecutado");
    }
}
