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
        $array_comentarios = parent::toArray($request);

        return array_merge($array_comentarios, [
            'usuario' => $this->usuario,
        ]);
    }
}
