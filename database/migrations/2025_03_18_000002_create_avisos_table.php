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
            $table->text('comentario');
            $table->unsignedBigInteger('equipo_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable(); // nullable para que el observer pueda asignar el user_id
            $table->timestamps();

            //$table->unique(['equipo_id','user_id'], 'UNQ_Aviso_0');

            //$table->foreign('equipo_id')->references('id')->on('equipos')->onDelete('cascade');
            //$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
