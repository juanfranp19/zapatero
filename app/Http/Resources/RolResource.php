<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RolResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $rol_array = parent::toArray($request);

        // arrays de relaciones
        $users_array = $this->users;

        return array_merge($rol_array, [
            'users' => $users_array,
        ]);
    }
}
