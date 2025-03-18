<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aviso extends Model
{
    protected $fillable = [
        'ID',
        'EQUIPO_NUMSERIE',
        'USUARIO_EMAIL'
    ];
}
