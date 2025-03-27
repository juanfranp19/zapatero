<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sequence extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'seq_name',
        'seq_count'
    ];
}
