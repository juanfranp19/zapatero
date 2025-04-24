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
        Schema::create('movimientos', function (Blueprint $table) {
            $table->id();
            $table->dateTime('fecha');
            $table->unsignedBigInteger('equipo_id');
            $table->unsignedBigInteger('origen');
            $table->unsignedBigInteger('destino');
            $table->unsignedBigInteger('trabajador_id');

            $table->foreign('equipo_id')->references('id')->on('equipos');
            $table->foreign('origen')->references('id')->on('salas');
            $table->foreign('destino')->references('id')->on('salas');
            $table->foreign('trabajador_id')->references('id')->on('trabajadores');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movimientos');
    }
};
