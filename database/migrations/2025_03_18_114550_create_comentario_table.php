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
        Schema::create('Comentario', function (Blueprint $table) {
            $table->unsignedInteger('ID')->primary();
            $table->string('COMENTARIO',255);
            $table->datetime('FECHA');
            $table->string('USUARIO_EMAIL',255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Comentario');
    }
};
