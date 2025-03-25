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
        Schema::table('Incidencia', function (Blueprint $table) {

            //$table->foreign('TIPO_INCIDENCIA_ID')->references('ID')->on('TipoIncidencia')->onDelete('cascade');
            //$table->foreign('TRABAJADOR_ID')->references('ID')->on('Trabajador')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('Incidencia', function (Blueprint $table) {
            //
        });
    }
};
