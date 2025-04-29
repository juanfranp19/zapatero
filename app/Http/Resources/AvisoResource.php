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

        // arrays de relaciones
        $user_array = $this->user;
        $equipo_array = $this->equipo;

        // valores que sobran
        unset($avisos_array['user_id']);
        unset($avisos_array['equipo_id']);

        return array_merge($avisos_array, [
            'user' => $user_array,
            'equipo' => $equipo_array,
        ]);
    }
}
