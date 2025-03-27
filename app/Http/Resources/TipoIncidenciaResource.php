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
        $array_tiposincidencias = parent::toArray($request);
        $array_incidencias = $this->incidencias;

        return array_merge($array_tiposincidencias, [
            'incidencia' => $array_incidencias,
        ]);
    }
}
