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

        // arrays de relaciones
        $user_array = $this->user;

        // valores que sobran
        unset($comentarios_array['user_id']);

        return array_merge($comentarios_array, [
            'user' => $user_array,
        ]);
    }
}
