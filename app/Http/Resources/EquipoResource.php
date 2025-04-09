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
        $sala_array = $this->sala;
        $tipoEquipo_array = $this->tipo_equipo;
        $valoresProduccion_array = $this->valores_produccion;
        $permisos_array = $this->permisos;
        $usos_array = $this->usos;
        $avisos_array = $this->avisos;
        $tipoIncidencias_array = $this->tipos_incidencias;
        $tipoParametros_array = $this->tipos_parametros;

        unset($equipo_array['tipo_equipo_id']);
        unset($equipo_array['sala_id']);

        // borra equipo_id de cada objeto del array
        if (count($valoresProduccion_array) != 0)   foreach ($valoresProduccion_array as $key)  unset($key['equipo_id']);
        if (count($permisos_array) != 0)            foreach ($permisos_array as $key)           unset($key['equipo_id']);
        if (count($usos_array) != 0)                foreach ($usos_array as $key)               unset($key['equipo_id']);
        if (count($avisos_array) != 0)              foreach ($avisos_array as $key)             unset($key['equipo_id']);
        if (count($tipoIncidencias_array) != 0)     foreach ($tipoIncidencias_array as $key)    unset($key['equipo_id']);
        if (count($tipoParametros_array) != 0)      foreach ($tipoParametros_array as $key)     unset($key['equipo_id']);

        return array_merge($equipo_array, [
            'sala' => $sala_array,
            'tipo' => $tipoEquipo_array,
            'valores_produccion' => $valoresProduccion_array,
            'permisos' => $permisos_array,
            'usos' => $usos_array,
            'avisos' => $avisos_array,
            'tipos_incidencias' => $tipoIncidencias_array,
            'tipos_parametros' => $tipoParametros_array,
        ]);
    }
}
