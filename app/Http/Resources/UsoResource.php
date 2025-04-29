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
        $usos_array = parent::toArray($request);

        // arrays de relaciones
        $trabajador_array = $this->trabajador;
        $equipo_array = $this->equipo;

        // valores que sobran
        unset($usos_array['trabajador_id']);
        unset($usos_array['equipo_id']);

        return array_merge($usos_array, [
            'trabajador' => $trabajador_array,
            'equipo' => $equipo_array,
        ]);
    }
}
