<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TipoIncidenciaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $tiposincidencias_array = parent::toArray($request);
        $incidencias_array = $this->incidencias;
        $equipo_array = $this->equipo;

        return array_merge($tiposincidencias_array, [
            'incidencias' => $incidencias_array,
            'equipo' => $equipo_array,
        ]);
    }
}
