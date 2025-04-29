<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ParametroEficaciaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $parametrosEficacia_array = parent::toArray($request);

        // arrays de relaciones
        $tipoParametro_array = $this->tipo_parametro;

        // valores que sobran
        unset($parametrosEficacia_array['tipo_parametro_id']);

        return array_merge($parametrosEficacia_array, [
            'tipo_parametro' => $tipoParametro_array,
        ]);
    }
}
