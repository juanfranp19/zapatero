<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Trabajador extends Model
{
    protected $table = 'trabajadores';

    public $timestamps = false;

    protected $fillable = [
        'dni',
        'activo',
        'apellidos',
        'borrado',
        'nombre',
        'url_imagen',
        'usuario_nombre'
    ];

    public function accesos(): HasMany
    {
        return $this->hasMany(Acceso::class);
    }

    public function usos(): HasMany
    {
        return $this->hasMany(Uso::class);
    }

    public function usuario(): HasOne
    {
        return $this->hasOne(Usuario::class, 'id');
    }

    public function permisos(): HasMany
    {
        return $this->hasMany(Permiso::class);
    }
}
