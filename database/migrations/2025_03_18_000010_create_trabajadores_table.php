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
        Schema::create('trabajadores', function (Blueprint $table) {
            $table->id();
            $table->string('dni', 255)->unique();
            $table->string('nombre', 255);
            $table->string('apellidos', 255);
            $table->unsignedTinyInteger('activo')->default(0);
            $table->unsignedTinyInteger('borrado')->default(0);
            $table->string('imagen', 255)->nullable();
            $table->unsignedBigInteger('user_id')->nullable();

            /* $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trabajadores');
    }
};
