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
        Schema::create('Trabajador', function (Blueprint $table) {
            $table->unsignedInteger('ID')->primary();
            $table->string('DNI',255);
            $table->unsignedTinyInteger('ACTIVO')->default(0);
            $table->string('APELLIDOS',255);
            $table->unsignedTinyInteger('BORRADO')->default(0);
            $table->string('NOMBRE',255);
            $table->string('URLIMAGEN',255)->nullable();
            $table->string('USUARIO_NOMBRE',255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Trabajador');
    }
};
