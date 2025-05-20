<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AvisoUser extends Model
{
    protected $table = 'avisos_users';

    protected $fillable = [
        'aviso_id',
        'user_id',
        'leido',
    ];
}
