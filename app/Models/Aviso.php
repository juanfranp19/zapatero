<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Aviso extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'equipo_id',
        'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }

    public function equipo(): BelongsTo
    {
        return $this->BelongsTo(Equipo::class);
    }
}
