<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

return new class extends Migration
{
    // ejecuta lo que hay en el archivo sql
    public function up(): void
    {
        $archivo = database_path('sql/procedures.sql');

        if (File::exists($archivo)) {

            $sql = File::get($archivo);

            DB::unprepared($sql);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
