<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovimientoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $movimientos_array = parent::toArray($request);

        // arrays de relaciones
        $trabajador_array = $this->trabajador;

        // valores que sobran
        unset($movimientos_array['trabajador_id']);

        return array_merge($movimientos_array, [
            'trabajador' => $trabajador_array,
        ]);
    }
}
