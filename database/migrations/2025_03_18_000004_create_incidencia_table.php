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
        Schema::create('incidencias', function (Blueprint $table) {
            $table->id();
            $table->datetime('fecha_incidencia')->nullable();
            $table->double('tiempo_incidencia')->nullable();
            $table->unsignedInteger('tipo_incidencia_id')->nullable();
            $table->unsignedInteger('trabajador_id')->nullable();

            $table->foreign('tipo_incidencia_id')->references('id')->on('tipo_incidencias')->onDelete('cascade');
            $table->foreign('trabajador_id')->references('id')->on('trabajadores')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('incidencias');
    }
};
