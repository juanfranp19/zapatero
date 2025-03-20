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
        Schema::create('ParametroEficacia', function (Blueprint $table) {
            $table->id();
            $table->datetime('FECHAPARAMETRO')->nullable();
            $table->string('VALOR',255)->nullable();
            $table->unsignedInteger('TIPO_PARAMETRO_ID')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ParametroEficacia');
    }
};
