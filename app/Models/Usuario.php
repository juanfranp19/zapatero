<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = [
        'EMAIL',
        'ADMIN',
        'NOMBRE',
        'PASSWORD',
        'ROL',
        'TOKEN'
    ];
}
