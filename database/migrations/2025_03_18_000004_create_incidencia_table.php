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
        Schema::create('Incidencia', function (Blueprint $table) {
            $table->increments('ID');
            $table->datetime('FECHAINCIDENCIA')->nullable();
            $table->double('TIEMPOINCIDENCIA')->nullable();
            $table->unsignedInteger('TIPO_INCIDENCIA_ID')->nullable();
            $table->unsignedInteger('TRABAJADOR_ID')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Incidencia');
    }
};
