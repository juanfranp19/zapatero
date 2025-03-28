<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AccesoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $accesos_array = parent::toArray($request);

        $trabajador_array = $this->trabajador;

        unset($accesos_array['trabajador_id']);

        return array_merge($accesos_array, [
            'trabajador' => $trabajador_array,
        ]);
    }
}
