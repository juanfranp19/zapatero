<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TrabajadorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array_trabajadores = parent::toArray($request);

        $array_accesos = $this->accesos;
        $array_usuario = $this->usuario;
        $array_usos = $this->usos;
        $array_permisos = $this->permisos;
        $array_incidencias = $this->incidencias;

        if (count($array_accesos) == 0) $array_accesos = 'No hay accesos';
        if ($array_usuario == null) $array_usuario = 'No hay usuario asignado';
        if (count($array_usos) == 0) $array_usos = 'No hay usos';
        if (count($array_permisos) == 0) $array_permisos = 'No hay usos';
        if (count($array_incidencias) == 0) $array_incidencias = 'No hay incidencias asignadas';

        return array_merge($array_trabajadores, [
            'accesos' => $array_accesos,
            'usuario' => $array_usuario,
            'usos' => $array_usos,
            'permisos' => $array_permisos,
            'incidencias' => $array_incidencias,
        ]);
    }
}
