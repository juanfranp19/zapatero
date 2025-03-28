<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Equipo extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'numserie',
        'activo',
        'alias',
        'periodo_uso',
        'reparacion',
        'tipo'
    ];

    public function valores_produccion(): HasMany
    {
        return $this->hasMany(ValorProduccion::class);
    }

    public function permisos(): HasMany
    {
        return $this->hasMany(Permiso::class);
    }

    public function usos(): HasMany
    {
        return $this->hasMany(Uso::class);
    }

    public function avisos(): HasMany
    {
        return $this->hasMany(Aviso::class);
    }
}
