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
        $trabajadores_array = parent::toArray($request);

        $accesos_array = $this->accesos;
        $usos_array = $this->usos;
        $permisos_array = $this->permisos;
        $incidencias_array = $this->incidencias;
        $user_array = $this->user;
        $movimientos_array = $this->movimientos;

        unset($trabajadores_array['user_id']);

        if (count($accesos_array) != 0)        foreach ($accesos_array as $key)        unset($key['trabajador_id']);
        if (count($usos_array) != 0)           foreach ($usos_array as $key)           unset($key['trabajador_id']);
        if (count($permisos_array) != 0)       foreach ($permisos_array as $key)       unset($key['trabajador_id']);
        if (count($incidencias_array) != 0)    foreach ($incidencias_array as $key)    unset($key['trabajador_id']);
        if (count($movimientos_array) != 0)    foreach ($movimientos_array as $key)    unset($key['trabajador_id']);

        return array_merge($trabajadores_array, [
            'accesos' => $accesos_array,
            'usos' => $usos_array,
            'permisos' => $permisos_array,
            'incidencias' => $incidencias_array,
            'user' => $user_array,
            'movimientos' => $movimientos_array,
        ]);
    }
}
