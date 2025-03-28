<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EquipoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $equipo_array = parent::toArray($request);

        $valoresProduccion_array = $this->valores_produccion;
        $permisos_array = $this->permisos;
        $usos_array = $this->usos;
        $avisos_array = $this->avisos;
        $tipoincidencias_array = $this->tipo_incidencias;

        if (count($valoresProduccion_array) == 0) $valoresProduccion_array = 'No tiene valores de producción';
        if (count($permisos_array) == 0) $permisos_array = 'No tiene permisos';
        if (count($usos_array) == 0) $usos_array = 'No tiene usos';
        if (count($avisos_array) == 0) $avisos_array = 'No tiene avisos';

        return array_merge($equipo_array, [
            'valores_produccion' => $valoresProduccion_array,
            'permisos' => $permisos_array,
            'usos' => $usos_array,
            'avisos' => $avisos_array,
            'tipo de incidencias' => $tipoincidencias_array,
        ]);
    }
}
