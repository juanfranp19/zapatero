<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TipoParametro extends Model
{
    protected $table = 'tipos_parametros';

    public $timestamps = false;

    protected $fillable = [
        'codigo',
        'descripcion',
        'eliminado',
        'medida',
        'equipo_id'
    ];

    public function parametros_eficacia(): HasMany
    {
        return $this->HasMany(ParametroEficacia::class);
    }

    public function equipo(): BelongsTo
    {
        return $this->belongsTo(Equipo::class);
    }
}
