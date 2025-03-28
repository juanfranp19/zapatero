<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array_usos = parent::toArray($request);

        if (count($array_usos) == 0) $array_usos = 'No hay usos';
        return array_merge($array_usos, [
            'trabajador' => $this->trabajador,
        ]);
    }
}
