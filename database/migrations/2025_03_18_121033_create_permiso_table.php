<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Permiso', function (Blueprint $table) {
            $table->unsignedInteger('ID')->primary();
            $table->datetime('DESDE');
            $table->datetime('HASTA');
            $table->unsignedInteger('NUMUSOS')->nullable();
            $table->double('PERIODOUSO')->nullable();
            $table->string('EQUIPO_NUMSERIE',255);
            $table->unsignedInteger('TRABAJADOR_ID');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Permiso');
    }
};
