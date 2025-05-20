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
        Schema::create('avisos_users', function (Blueprint $table) {

            $table->unsignedBigInteger('aviso_id');
            $table->unsignedBigInteger('user_id');
            $table->boolean('leido');
            $table->timestamps();

            $table->unique(['aviso_id','user_id'], 'UNQ_avisoId_userId');

            $table->foreign('aviso_id')->references('id')->on('avisos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avisos_users');
    }
};
