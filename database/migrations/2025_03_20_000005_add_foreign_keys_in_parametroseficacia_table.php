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
        Schema::table('ParametroEficacia', function (Blueprint $table) {

            $table->foreign('TIPO_PARAMETRO_ID')->references('ID')->on('TipoParametro')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ParametrosEficacia', function (Blueprint $table) {
            //
        });
    }
};
