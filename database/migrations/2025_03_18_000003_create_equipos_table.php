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
        Schema::create('equipos', function (Blueprint $table) {
            $table->id();
            $table->string('numserie', 255)->unique();
            $table->unsignedTinyInteger('activo')->default(0);
            $table->string('alias', 255)->unique();
            $table->double('periodo_uso')->nullable();
            $table->unsignedTinyInteger('reparacion')->default(0);
            $table->string('tipo', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipos');
    }
};
