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
        Schema::create('trabajador', function (Blueprint $table) {
            $table->id();
            $table->string('dni',255);
            $table->unsignedTinyInteger('activo')->default(0);
            $table->string('apellidos',255);
            $table->unsignedTinyInteger('borrado')->default(0);
            $table->string('nombre',255);
            $table->string('urlimagen',255)->nullable();
            $table->string('usuario_nombre',255)->nullable();

            $table->foreign('usuario_nombre')->references('email')->on('usuario')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trabajador');
    }
};
