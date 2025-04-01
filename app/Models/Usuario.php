<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Model
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

    public function trabajador(): HasOne
    {
        return $this->hasOne(Trabajador::class, 'user_id');
    }
}
