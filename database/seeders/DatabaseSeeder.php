<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {

        $file = database_path('sql/zapatero_bbdd.sql');

        if (!File::exists($file)) {
            echo "no hay archivo SQL\n";
            return;
        }

        $sql = File::get($file);

        $sql = preg_replace('/DELIMITER\s+\S+/', '', $sql);

        // Divide el archivo SQL en múltiples consultas
        $queries = preg_split('/;\s*[\r\n]+/', $sql);

        foreach ($queries as $query) {
            if (trim($query)) {
                try {
                    DB::unprepared($query);
                } catch (\Exception $e) {
                    echo "Error ejecutando la consulta: " . $e->getMessage() . "\n";
                }
            }
        }

        $this->command->info("archivo SQL ejecutado con éxito");
    }
}
