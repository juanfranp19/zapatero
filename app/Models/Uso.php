<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Uso extends Model
{
    protected $fillable = [
        'ID',
        'ESTADO',
        'FECHAUSO',
        'HORAFIN',
        'HORAINICIO',
        'EQUIPO_NUMSERIE',
        'TRABAJADOR_ID'
    ];
}
