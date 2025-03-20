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
        Schema::table('Trabajador', function (Blueprint $table) {

            $table->foreign('USUARIO_NOMBRE')->references('EMAIL')->on('Usuario')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('Trabajador', function (Blueprint $table) {
            //
        });
    }
};
