<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
}
