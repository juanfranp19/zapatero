<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Uso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'estado',
        'fecha_uso',
        'hora_fin',
        'hora_inicio',
        'equipo_numserie',
        'trabajador_id'
    ];
}
