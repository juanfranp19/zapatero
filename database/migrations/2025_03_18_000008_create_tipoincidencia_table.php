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
        Schema::create('tipo_incidencia', function (Blueprint $table) {
            $table->id();
            $table->string('codigo',255)->unique();
            $table->string('descripcion',255);
            $table->unsignedTinyInteger('eliminado')->default(0);
            $table->string('equipo_numserie',255)->nullable()->unique();

            $table->foreign('equipo_numserie')->references('numserie')->on('equipo')->onDelete('cascade');

            //$table->unique(['codigo','equipo_numserie'], 'UNQ_TipoIncidencia_0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipo_incidencia');
    }
};
