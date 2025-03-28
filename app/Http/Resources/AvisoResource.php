<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AvisoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $avisos_array = parent::toArray($request);

        $usuario_array = $this->usuario;
        $equipo_array = $this->equipo;

        unset($avisos_array['usuario_id']);
        unset($avisos_array['equipo_id']);

        return array_merge($avisos_array, [
            'usuario' => $usuario_array,
            'equipo' => $equipo_array,
        ]);
    }
}
