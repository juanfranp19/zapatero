<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoParametro extends Model
{
    protected $fillable = [
        'ID',
        'CODIGO',
        'DESCRIPCION',
        'ELIMINADO',
        'MEDIDA',
        'EQUIPO_NUMSERIE'
    ];
}
