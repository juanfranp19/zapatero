<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TipoIncidencia extends Model
{
    protected $table = 'tipos_incidencias';

    public $timestamps = false;

    protected $fillable = [
        'codigo',
        'descripcion',
        'eliminado',
        'equipo_id'
    ];
    public function incidencias(): HasMany
    {
        return $this->hasMany(Incidencia::class);
    }

    public function equipo(): BelongsTo
    {
        return $this->belongsTo(Equipo::class);
    }
}
