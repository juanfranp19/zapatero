<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'desde',
        'hasta',
        'numusos',
        'periodo_uso',
        'equipo_numserie',
        'trabajador_id'
    ];
}
