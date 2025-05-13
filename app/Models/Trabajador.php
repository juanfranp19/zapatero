<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
        'user_id'
    ];

    // relaciones

    public function accesos(): HasMany
    {
        return $this->hasMany(Acceso::class);
    }

    public function usos(): HasMany
    {
        return $this->hasMany(Uso::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function permisos(): HasMany
    {
        return $this->hasMany(Permiso::class);
    }

    public function incidencias(): HasMany
    {
        return $this->hasMany(Incidencia::class);
    }

    public function movimientos(): HasMany
    {
        return $this->hasMany(Movimiento::class);
    }
}
