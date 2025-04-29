<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Permiso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'desde',
        'hasta',
        'numusos',
        'periodo_uso',
        'equipo_id',
        'trabajador_id'
    ];

    // relaciones

    public function equipo(): BelongsTo
    {
        return $this->belongsTo(Equipo::class);
    }

    public function trabajador(): BelongsTo
    {
        return $this->belongsTo(Trabajador::class);
    }
}
