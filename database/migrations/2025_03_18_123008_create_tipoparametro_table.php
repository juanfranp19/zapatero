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
        Schema::create('TipoParametro', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('CODIGO')->unique();
            $table->string('DESCRIPTION',255);
            $table->unsignedTinyInteger('ELIMINADO')->default(0);
            $table->string('MEDIDA',255);
            $table->string('EQUIPO_NUMSERIE',255)->nullable()->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('TipoParametro');
    }
};
