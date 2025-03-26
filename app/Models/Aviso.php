<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aviso extends Model
{
    //protected $table = 'Aviso';

    public $timestamps = false;

    protected $fillable = [
        'equipo_numserie',
        'usuario_nombre'
    ];
}
