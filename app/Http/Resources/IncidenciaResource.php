<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IncidenciaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $incidencias_array = parent::toArray($request);

        $tipoIncidencia_array = $this->tipo_incidencia;
        $trabajador_array = $this->trabajador;

        return array_merge($incidencias_array, [
            'tipo_incidencia' => $tipoIncidencia_array,
            'trabajador' => $trabajador_array,
        ]);
    }
}
