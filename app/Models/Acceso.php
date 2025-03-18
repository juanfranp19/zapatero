<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Acceso extends Model
{
    protected $fillable = [
        'ID',
        'FECHAENTRADA',
        'TRABAJADOR_ID'
    ];
}
