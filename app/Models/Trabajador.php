<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trabajador extends Model
{
    protected $table = 'trabajadores';

    public $timestamps = false;

    protected $fillable = [
        'dni',
        'activo',
        'apellidos',
        'borrado',
        'nombre',
        'url_imagen',
        'usuario_nombre'
    ];
}
