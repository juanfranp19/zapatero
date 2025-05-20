<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Aviso extends Model
{
    protected $fillable = [
        'comentario',
        'equipo_id',
        'user_id'
    ];

    // relaciones

    public function user(): BelongsTo
    {
        return $this->BelongsTo(User::class);
    }

    public function equipo(): BelongsTo
    {
        return $this->BelongsTo(Equipo::class);
    }

    public function avisos_users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'avisos_users')
            ->withTimestamps()
            ->withPivot('leido');
    }
}
