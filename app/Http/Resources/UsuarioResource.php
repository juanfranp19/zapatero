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
        $usuarios_array = parent::toArray($request);

        $avisos_array = $this->avisos;
        $comentarios_array = $this->comentarios;
        $trabajador_array = $this->trabajador;

        if (count($avisos_array) != 0)      foreach ($avisos_array as $key)         unset($key['usuario_id']);
        if (count($comentarios_array) != 0) foreach ($comentarios_array as $key)    unset($key['usuario_id']);

        if ($trabajador_array != null)  unset($trabajador_array['usuario_id']);

        return array_merge($usuarios_array, [
            'avisos' => $avisos_array,
            'comentarios' => $comentarios_array,
            'trabajador' => $trabajador_array,
        ]);
    }
}
