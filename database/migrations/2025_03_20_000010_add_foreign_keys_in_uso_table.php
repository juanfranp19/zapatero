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
        Schema::table('Uso', function (Blueprint $table) {

            //$table->foreign('EQUIPO_NUMSERIE')->references('NUMSERIE')->on('Equipo')->onDelete('cascade');
            //$table->foreign('TRABAJADOR_ID')->references('ID')->on('Trabajador')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('Uso', function (Blueprint $table) {
            //
        });
    }
};
