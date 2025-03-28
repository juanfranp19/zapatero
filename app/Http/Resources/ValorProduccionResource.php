<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ValorProduccionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $valoresProduccion_array = parent::toArray($request);

        $equipo_array = $this->equipo;

        unset($valoresProduccion_array['equipo_id']);

        return array_merge($valoresProduccion_array, [
            'equipo' => $equipo_array,
        ]);
    }
}
