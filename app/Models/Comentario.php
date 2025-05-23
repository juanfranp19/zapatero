<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comentario extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'comentario',
        'fecha',
        'user_id'
    ];

    // relaciones

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
