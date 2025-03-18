<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ValoresProduccion extends Model
{
    protected $fillable = [
        'ID',
        'FECHA',
        'valueA',
        'valueB',
        'valueC',
        'valueD',
        'valueE',
        'valueF',
        'EQUIPO_NUMSERIE'
    ];
}
