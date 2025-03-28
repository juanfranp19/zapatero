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
        Schema::create('tipos_parametros', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('codigo');
            $table->string('descripcion', 255);
            $table->unsignedTinyInteger('eliminado')->default(0);
            $table->string('medida', 255);
            $table->unsignedBigInteger('equipo_id')->nullable();


            /* $table->foreign('equipo_id')->references('id')->on('equipos')->onDelete('cascade'); */

            $table->unique(['codigo','equipo_id'], 'UNQ_TipoParametro_0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipos_parametros');
    }
};
