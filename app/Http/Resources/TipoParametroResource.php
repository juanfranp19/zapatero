<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TipoParametroResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $tipoParametros_array = parent::toArray($request);

        // arrays de relaciones
        $parametrosEficacia_array = $this->parametros_eficacia;
        $equipo_array = $this->equipo;

        // valores que sobran
        unset($tipoParametros_array['equipo_id']);

        if (count($parametrosEficacia_array) != 0)   foreach ($parametrosEficacia_array as $key)  unset($key['tipo_parametro_id']);

        return array_merge($tipoParametros_array, [
            'parametros_eficacia' => $parametrosEficacia_array,
            'equipo' => $equipo_array,
        ]);
    }
}
