<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EquipoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $equipo_array = parent::toArray($request);

        $valoresProduccion_array = $this->valores_produccion;

        if (count($valoresProduccion_array) == 0) $valoresProduccion_array = 'No tiene valores de producción';

        return array_merge($equipo_array, [
            'valores_produccion' => $valoresProduccion_array,
        ]);
    }
}
