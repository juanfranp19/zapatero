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
        Schema::create('avisos', function (Blueprint $table) {
            $table->id();
            $table->string('equipo_numserie', 255)->nullable();
            $table->string('usuario_nombre', 255)->nullable();

            $table->unique(['equipo_numserie','usuario_nombre'], 'UNQ_Aviso_0');

            //$table->foreign('equipo_numserie')->references('numserie')->on('equipos')->onDelete('cascade');
            //$table->foreign('usuario_email')->references('email')->on('usuarios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avisos');
    }
};
