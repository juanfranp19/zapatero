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
        $array_comentarios = $this->comentarios;
        $array_avisos = $this->avisos;

        return array_merge($array_usuarios, [
            'comentarios' => $array_comentarios,
            'avisos' => $array_avisos,
        ]);
    }
}
