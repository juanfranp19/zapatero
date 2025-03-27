<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TrabajadorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array_trabajadores = parent::toArray($request);

        return array_merge($array_trabajadores, [
            'accesos' => $this->accesos,
        ]);
    }
}
