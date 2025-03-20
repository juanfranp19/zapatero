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
        Schema::create('Equipo', function (Blueprint $table) {
            $table->string('NUMSERIE',255)->primary()->unique();
            $table->unsignedTinyInteger('ACTIVO')->default(0);
            $table->string('ALIAS',255)->unique();
            $table->double('PERIODOUSO')->nullable();
            $table->unsignedTinyInteger('REPARACION')->default(0);
            $table->string('TIPO',255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Equipo');
    }
};
