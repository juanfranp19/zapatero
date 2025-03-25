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
        Schema::create('permisos', function (Blueprint $table) {
            $table->id();
            $table->datetime('desde');
            $table->datetime('hasta');
            $table->unsignedInteger('numusos')->nullable();
            $table->double('periodo_uso')->nullable();
            $table->string('equipo_numserie', 255);
            $table->unsignedBigInteger('trabajador_id');

            /* $table->foreign('equipo_numserie')->references('numserie')->on('equipos')->onDelete('cascade');
            $table->foreign('trabajador_id')->references('id')->on('trabajadores')->onDelete('cascade'); */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permisos');
    }
};
