<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ComentarioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = database_path('sql/insert/comentarios_insert.sql');

        if (!File::exists($file)) {
            $this->command->error('no hay archivo SQL');
            return;
        }

        $sql = File::get($file);

        DB::unprepared($sql);
    }
}
