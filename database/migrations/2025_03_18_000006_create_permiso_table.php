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
            $table->unsignedInteger('num_usos')->nullable();
            $table->double('periodo_uso')->nullable();
            $table->string('equipo_num_serie',255);
            $table->unsignedInteger('trabajador_id');
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
