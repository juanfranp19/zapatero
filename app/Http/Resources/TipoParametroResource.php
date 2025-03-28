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

        $parametrosEficacia_array = $this->parametros_eficacia;
        $equipo_array = $this->equipo;

        if ($equipo_array == null) $equipo_array = 'No hay equipo asignado';

        return array_merge($tipoParametros_array, [
            'parametros_eficacia' => $parametrosEficacia_array,
            'equipo' => $equipo_array,
        ]);
    }
}
