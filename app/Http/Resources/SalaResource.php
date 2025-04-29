<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SalaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $sala_array = parent::toArray($request);

        // arrays de relaciones
        $equipos_array = $this->equipos;

        // valores que sobran
        if (count($equipos_array) != 0)   foreach ($equipos_array as $key)  unset($key['sala_id']);

        return array_merge($sala_array, [
            'equipos' => $equipos_array,
        ]);
    }
}
