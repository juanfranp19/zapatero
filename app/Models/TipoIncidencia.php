<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
