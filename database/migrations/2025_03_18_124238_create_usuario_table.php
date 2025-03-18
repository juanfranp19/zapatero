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
        Schema::create('Usuario', function (Blueprint $table) {
            $table->string('EMAIL',255);
            $table->unsignedTinyInteger('ADMIN')->default(0);
            $table->string('NOMBRE',255);
            $table->string('PASSWORD',255);
            $table->string('ROL',255)->nullable();
            $table->string('TOKEN',255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Usuario');
    }
};
