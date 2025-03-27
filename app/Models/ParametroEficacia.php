<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ParametroEficacia extends Model
{
    protected $table = 'parametros_eficacia';

    public $timestamps = false;

    protected $fillable = [
        'fecha_parametro',
        'valor',
        'tipo_parametro_id'
    ];

    public function tipo_parametro(): BelongsTo
    {
        return $this->belongsTo(TipoParametro::class, 'tipo_parametro_id');
    }
}
