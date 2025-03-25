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
        Schema::create('uso', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('estado')->default(0);
            $table->datetime('fechauso');
            $table->string('horafin',255)->nullable();
            $table->string('horainicio',255)->nullable();
            $table->string('equipo_numserie',255);
            $table->unsignedInteger('trabajador_id');

            $table->foreign('equipo_numserie')->references('numserie')->on('equipo')->onDelete('cascade');
            $table->foreign('trabajador_id')->references('id')->on('Trabajador')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('uso');
    }
};
