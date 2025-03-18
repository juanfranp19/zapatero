<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoIncidencia extends Model
{
    protected $fillable = [
        'ID',
        'CODIGO',
        'DESCRIPCION',
        'ELIMINADO',
        'EQUIPO_NUMSERIE'
    ];
}
