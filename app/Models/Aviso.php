<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Aviso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'equipo_id',
        'usuario_id'
    ];

    public function usuario(): BelongsTo
    {
        return $this->BelongsTo(Usuario::class);
    }

    public function equipo(): BelongsTo
    {
        return $this->BelongsTo(Equipo::class);
    }
}
