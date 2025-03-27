<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsuarioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array_usuarios = parent::toArray($request);

        $array_avisos = $this->avisos;
        $array_comentarios = $this->comentarios;
        $array_trabajador = $this->trabajador;

        if ($array_trabajador == null) $array_trabajador = 'No hay trabajador asignado';

        return array_merge($array_usuarios, [
            'avisos' => $array_avisos,
            'comentarios' => $array_comentarios,
            'trabajador' => $array_trabajador,
        ]);
    }
}
