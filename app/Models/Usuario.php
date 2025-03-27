<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Usuario extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'email',
        'admin',
        'rol'
    ];

    protected $hidden = [
        'password',
        'token',
    ];

    public function comentarios(): HasMany
    {
        return $this->hasMany(Comentario::class);
    }

    public function avisos(): HasMany
    {
        return $this->hasMany(Aviso::class);
    }
}
