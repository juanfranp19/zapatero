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
        Schema::table('Acceso', function (Blueprint $table) {

            $table->foreign('TRABAJADOR_ID')->references('ID')->on('Trabajador')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('Acceso', function (Blueprint $table) {
            //
        });
    }
};
