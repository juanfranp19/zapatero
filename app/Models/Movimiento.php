<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Movimiento extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'fecha',
        'equipo_id',
        'origen',
        'destino',
        'trabajador_id',
    ];

    // relaciones

    public function trabajador(): BelongsTo
    {
        return $this->belongsTo(Trabajador::class);
    }
}
