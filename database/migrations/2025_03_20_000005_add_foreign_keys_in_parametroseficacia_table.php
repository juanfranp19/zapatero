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
        Schema::table('parametros_eficacia', function (Blueprint $table) {

            $table->foreign('tipo_parametro_id')->references('id')->on('tipos_parametros')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('parametros_eficacia', function (Blueprint $table) {
            //
        });
    }
};
