<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Acceso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'fecha_entrada',
        'fecha_salida',
        'trabajador_id'
    ];

    public function trabajador(): BelongsTo
    {
        return $this->belongsTo(Trabajador::class);
    }
}
