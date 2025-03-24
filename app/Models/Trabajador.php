<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trabajador extends Model
{

    protected $table = 'Trabajador';

    public $timestamps = false;

    protected $fillable = [
        'ID',
        'DNI',
        'ACTIVO',
        'APELLIDOS',
        'BORRADO',
        'NOMBRE',
        'URLIMAGEN',
        'USUARIO_NOMBRE'
    ];
}
