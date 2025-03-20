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
        Schema::table('TipoParametro', function (Blueprint $table) {

            $table->foreign('EQUIPO_NUMSERIE')->references('NUMSERIE')->on('Equipo')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('TipoParametro', function (Blueprint $table) {
            //
        });
    }
};
