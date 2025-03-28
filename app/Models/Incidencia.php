<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Incidencia extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'fecha_incidencia',
        'tiempo_incidencia',
        'tipo_incidencia_id',
        'trabajador_id'
    ];

    public function tipo_incidencia(): BelongsTo
    {
        return $this->belongsTo(TipoIncidencia::class);
    }
}
