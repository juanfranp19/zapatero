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
        Schema::create('ValoresProduccion', function (Blueprint $table) {
            $table->increments('ID');
            $table->dateTime('FECHA')->nullable();
            $table->double('valueA')->default(0);
            $table->double('valueB')->default(0);
            $table->double('valueC')->default(0);
            $table->double('valueD')->default(0);
            $table->double('valueE')->default(0);
            $table->double('valueF')->default(0);
            $table->string('EQUIPO_NUMSERIE', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ValoresProduccion');
    }
};
