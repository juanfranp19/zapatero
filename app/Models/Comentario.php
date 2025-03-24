<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    protected $table = 'Comentario';

    public $timestamps = false;

    protected $fillable = [
        'COMENTARIO',
        'FECHA',
        'USUARIO_EMAIL'
    ];
}
