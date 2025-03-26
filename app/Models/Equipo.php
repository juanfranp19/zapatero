<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    //protected $table = 'Equipo';

    public $timestamps = false;

    protected $fillable = [
        'numserie',
        'activo',
        'alias',
        'periodo_uso',
        'reparacion',
        'tipo'
    ];
}
