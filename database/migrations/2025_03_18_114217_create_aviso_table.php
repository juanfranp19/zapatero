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
        Schema::create('Aviso', function (Blueprint $table) {
            $table->unsignedInteger('ID')->primary();
            $table->string('EQUIPO_NUMSERIE',255)->nullable()->unique();
            $table->string('USUARIO_EMAIL',255)->nullable()->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Aviso');
    }
};
