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
        $equipo_array = $this->equipo;
        $origen_array = $this->sala_origen;
        $destino_array = $this->sala_destino;
        $trabajador_array = $this->trabajador;

        // valores que sobran
        unset($movimientos_array['equipo_id']);
        unset($movimientos_array['origen']);
        unset($movimientos_array['destino']);
        unset($movimientos_array['trabajador_id']);

        return array_merge($movimientos_array, [
            'equipo' => $equipo_array,
            'sala_origen' => $origen_array,
            'sala_destino' => $destino_array,
            'trabajador' => $trabajador_array,
        ]);
    }
}
