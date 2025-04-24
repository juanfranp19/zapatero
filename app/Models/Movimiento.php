<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movimiento extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'fecha',
        'equipo_id',
        'origen',
        'destino',
        'trabajador_id',
    ];
}
