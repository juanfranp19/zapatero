<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incidencia extends Model
{
    protected $table = 'Incidencia';

    public $timestamps = false;

    protected $fillable = [
        'FECHAINCIDENCIA',
        'TIEMPOINCIDENCIA',
        'TIPO_INCIDENCIA_ID',
        'TRABAJADOR_ID'
    ];
}
