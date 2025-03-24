<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sequence extends Model
{
    protected $table = 'SEQUENCE';

    public $timestamps = false;

    protected $fillable = [
        'SEQ_NAME',
        'SEQ_COUNT'
    ];
}
