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
        Schema::create('Acceso', function (Blueprint $table) {
            $table->unsignedInteger('ID')->primary();
            $table->datetime('FECHAENTRADA');
            $table->unsignedInteger('TRABAJADOR_ID');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Acceso');
    }
};
