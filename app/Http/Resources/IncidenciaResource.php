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
        $array_incidencias = parent::toArray($request);

        return array_merge($array_incidencias, [
            'tipo incidencia' => $this->tipo_incidencia,
            'trabajador' => $this->trabajador,

        ]);
    }
}
