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
        Schema::create('valores_produccion', function (Blueprint $table) {
            $table->id();
            $table->dateTime('fecha')->nullable();
            $table->double('value_a')->default(0);
            $table->double('value_b')->default(0);
            $table->double('value_c')->default(0);
            $table->double('value_d')->default(0);
            $table->double('value_e')->default(0);
            $table->double('value_f')->default(0);
            $table->unsignedBigInteger('equipo_id')->nullable();

            $table->unique(['fecha','equipo_id'], 'UNQ_ValoresProduccion_0');

            /* $table->foreign('equipo_id')->references('id')->on('equipos')->onDelete('cascade'); */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('valores_produccion');
    }
};
