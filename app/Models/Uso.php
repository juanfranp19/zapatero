<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsTo;

class Uso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'estado',
        'fecha_uso',
        'hora_fin',
        'hora_inicio',
        'equipo_id',
        'trabajador_id'
    ];

    public function trabajador(): belongsTo
    {
        return $this->belongsTo(Trabajador::class);
    }

    public function equipo(): belongsTo
    {
        return $this->belongsTo(Equipo::class);
    }
}
