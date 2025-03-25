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
        Schema::create('tipo_parametro', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('codigo')->unique();
            $table->string('descripcion',255);
            $table->unsignedTinyInteger('eliminado')->default(0);
            $table->string('medida',255);
            $table->string('equipo_numserie',255)->nullable()->unique();


            $table->foreign('equipo_numserie')->references('numserie')->on('equipo')->onDelete('cascade');

            //$table->unique(['codigo','equipo_numserie'], 'UNQ_TipoParametro_0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipo_parametro');
    }
};
