<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incidencia extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'fecha_incidencia',
        'tiempo_incidencia',
        'tipo_incidencia_id',
        'trabajador_id'
    ];
}
