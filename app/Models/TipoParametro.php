<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoParametro extends Model
{
    protected $table = 'tipos_parametros';

    public $timestamps = false;

    protected $fillable = [
        'codigo',
        'descripcion',
        'eliminado',
        'medida',
        'equipo_numserie'
    ];
}
