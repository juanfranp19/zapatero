<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParametroEficacia extends Model
{
    //protected $table = 'Equipo';

    public $timestamps = false;

    protected $fillable = [
        'fecha_parametro	',
        'valor',
        'tipo_parametro_id'
    ];
}
