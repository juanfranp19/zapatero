<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PermisoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $permisos_array = parent::toArray($request);

        // arrays de relaciones
        $equipo_array = $this->equipo;
        $trabajador_array = $this->trabajador;

        // valores que sobran
        unset($permisos_array['equipo_id']);
        unset($permisos_array['trabajador_id']);

        return array_merge($permisos_array, [
            'equipo' => $equipo_array,
            'trabajador' => $trabajador_array,
        ]);
    }
}
