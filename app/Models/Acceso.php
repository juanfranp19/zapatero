<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Acceso extends Model
{
    protected $table = 'Acceso';

    public $timestamps = false;

    protected $fillable = [
        'FECHAENTRADA',
        'TRABAJADOR_ID'
    ];
}
