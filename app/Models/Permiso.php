<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    protected $fillable = [
        'ID',
        'DESDE',
        'HASTA',
        'NUMUSOS',
        'PERIODOUSO',
        'EQUIPO_NUMSERIE',
        'TRABAJADOR_ID'
    ];
}
