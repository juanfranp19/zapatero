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

    public function equipo(): BelongsTo
    {
        return $this->belongsTo(Equipo::class);
    }
    public function sala_origen(): BelongsTo
    {
        return $this->belongsTo(Sala::class, 'origen');
    }
    public function sala_destino(): BelongsTo
    {
        return $this->belongsTo(Sala::class, 'destino');
    }
    public function trabajador(): BelongsTo
    {
        return $this->belongsTo(Trabajador::class);
    }
}
