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
        Schema::create('equipos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->unique();
            $table->string('descripcion')->unique()->nullable();
            $table->unsignedBigInteger('tipo_equipo_id')->nullable();
            $table->unsignedBigInteger('sala_id')->nullable();
            $table->string('imagen')->nullable();
            $table->date('fecha_integracion')->nullable();
            $table->unsignedTinyInteger('activo')->default(1);
            $table->unsignedTinyInteger('reparacion')->default(0);
            $table->unsignedTinyInteger('mantenimiento')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipos');
    }
};
