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
        Schema::create('Uso', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('ESTADO')->default(0);
            $table->datetime('FECHAUSO');
            $table->string('HORAFIN',255)->nullable();
            $table->string('HORAINICIO',255)->nullable();
            $table->string('EQUIPO_NUMSERIE',255);
            $table->unsignedInteger('TRABAJADOR_ID');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Uso');
    }
};
