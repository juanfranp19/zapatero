<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $users_array = parent::toArray($request);

        // arrays de relaciones
        $avisos_array = $this->avisos;
        $comentarios_array = $this->comentarios;
        $trabajador_array = $this->trabajador;
        $rol_array = $this->rol;
        $avisos_users_array = $this->avisos_users;

        // valores que sobran
        if (count($avisos_array) != 0)      foreach ($avisos_array as $key)         unset($key['user_id']);
        if (count($comentarios_array) != 0) foreach ($comentarios_array as $key)    unset($key['user_id']);

        if ($trabajador_array != null)  unset($trabajador_array['user_id']);

        unset($users_array['rol_id']);

        return array_merge($users_array, [
            'avisos' => $avisos_array,
            'comentarios' => $comentarios_array,
            'trabajador' => $trabajador_array,
            'rol' => $rol_array,
            'avisos_users' => $avisos_users_array,
        ]);
    }
}
