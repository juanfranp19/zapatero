<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TipoEquipoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $tipoEquipo_array = parent::toArray($request);

        $equipos_array = $this->equipos;

        if (count($equipos_array) != 0)   foreach ($equipos_array as $key)  unset($key['tipo_equipo_id']);

        return array_merge($tipoEquipo_array, [
            'equipos' => $equipos_array,
        ]);
    }
}
