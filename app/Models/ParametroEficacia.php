<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParametroEficacia extends Model
{
    protected $fillable = [
        'ID',
        'FECHAPARAMETRO	',
        'VALOR',
        'TIPO_PARAMETRO_ID'
    ];
}
