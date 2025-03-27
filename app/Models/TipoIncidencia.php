<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TipoIncidencia extends Model
{
    protected $table = 'tipos_incidencias';

    public $timestamps = false;

    protected $fillable = [
        'codigo',
        'descripcion',
        'eliminado',
        'equipo_numserie'
    ];
    public function incidencias(): HasMany
    {
        return $this->hasMany(Incidencia::class);
    }
}
