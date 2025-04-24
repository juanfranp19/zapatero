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
        $trabajador_array = $this->trabajador;

        unset($movimientos_array['trabajador_id']);

        return array_merge($movimientos_array, [
            'trabajador' => $trabajador_array,
        ]);
    }
}
