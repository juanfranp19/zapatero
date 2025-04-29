<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sala extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'accesible',
    ];

    // relaciones

    public function equipos(): HasMany
    {
        return $this->hasMany(Equipo::class);
    }
}
