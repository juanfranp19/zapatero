<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Acceso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'fecha_entrada',
        'trabajador_id'
    ];
}
