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
        Schema::create('SEQUENCE', function (Blueprint $table) {
            $table->increments('ID');
            $table->string('SEQ_NAME',50);
            $table->decimal('SEQ_COUNT',38.0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('SEQUENCE');
    }
};
