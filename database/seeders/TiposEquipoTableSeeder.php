<?php

namespace Database\Seeders;

use App\Models\TipoEquipo;
use Illuminate\Database\Seeder;

class TiposEquipoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // llena la tabla con los datos del array

        foreach (self::$tiposEquipo_array as $tipo) {
            $te = new TipoEquipo();
            $te->nombre = $tipo['nombre'];
            $te->save();
        }
    }

    private static $tiposEquipo_array = [
        [
            'nombre' => 'Bordadora',
        ],
        [
            'nombre' => 'Cortadora Láser',
        ],
        [
            'nombre' => 'Estampadora',
        ],
        [
            'nombre' => 'Fresadora CNC',
        ],
        [
            'nombre' => 'Impresión 3D',
        ],
        [
            'nombre' => 'Plotters Impresión y corte',
        ],
        [
            'nombre' => 'Termoconfortadora',
        ],
        [
            'nombre' => 'Digitalización 3D',
        ],
        [
            'nombre' => 'XR VR AR',
        ],
        [
            'nombre' => 'Ordenador',
        ],
        [
            'nombre' => 'Impresora',
        ],
    ];
}
