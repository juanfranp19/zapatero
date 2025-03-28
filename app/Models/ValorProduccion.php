<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ValorProduccion extends Model
{
    protected $table = 'valores_produccion';

    public $timestamps = false;

    protected $fillable = [
        'fecha',
        'value_a',
        'value_b',
        'value_c',
        'value_d',
        'value_e',
        'value_f',
        'equipo_numserie'
    ];

    public function equipo(): BelongsTo
    {
        return $this->belongsTo(Equipo::class);
    }
}
