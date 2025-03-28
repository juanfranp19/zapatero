<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ComentarioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $comentarios_array = parent::toArray($request);

        $usuario_array = $this->usuario;

        unset($comentarios_array['usuario_id']);

        return array_merge($comentarios_array, [
            'usuario' => $usuario_array,
        ]);
    }
}
