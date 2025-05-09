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
        Schema::create('usos', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_uso');
            $table->time('hora_inicio');
            $table->time('hora_fin')->nullable();
            $table->unsignedBigInteger('equipo_id');
            $table->unsignedBigInteger('trabajador_id');

            /* $table->foreign('equipo_id')->references('id')->on('equipos')->onDelete('cascade');
            $table->foreign('trabajador_id')->references('id')->on('trabajadores')->onDelete('cascade'); */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usos');
    }
};
