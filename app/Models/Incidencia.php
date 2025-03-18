<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incidencia extends Model
{
    protected $fillable = [
        'ID',
        'FECHAINCIDENCIA',
        'TIEMPOINCIDENCIA',
        'TIPO_INCIDENCIA_ID',
        'TRABAJADOR_ID'
    ];
}
