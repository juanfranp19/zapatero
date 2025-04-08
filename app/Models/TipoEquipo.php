<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoEquipo extends Model
{
    protected $table = 'tipos_equipo';

    public $timestamps = false;

    protected $fillable = [
        'nombre',
    ];
}
