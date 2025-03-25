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
        Schema::create('parametros_eficacia', function (Blueprint $table) {
            $table->id();
            $table->datetime('fecha_parametro')->nullable();
            $table->string('valor',255)->nullable();
            $table->unsignedInteger('tipo_parametro_id')->nullable();

            $table->foreign('tipo_parametro_id')->references('id')->on('tipos_parametro')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parametros_eficacia');
    }
};
