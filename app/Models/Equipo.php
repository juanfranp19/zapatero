<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Equipo extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'tipo',
        'sala',
        'imagen',
        'fecha_integracion',
        'activo',
        'reparacion',
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

    public function tipos_incidencias(): HasMany
    {
        return $this->hasMany(TipoIncidencia::class);
    }

    public function tipos_parametros(): HasMany
    {
        return $this->hasMany(TipoParametro::class);
    }

    public function tipo_equipo(): BelongsTo
    {
        return $this->belongsTo(TipoEquipo::class);
    }

    public function sala(): BelongsTo
    {
        return $this->belongsTo(Sala::class);
    }

    public function movimientos(): HasMany
    {
        return $this->hasMany(Movimiento::class);
    }
}
