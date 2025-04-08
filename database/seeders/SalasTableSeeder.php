<?php

namespace Database\Seeders;

use App\Models\Sala;
use Illuminate\Database\Seeder;

class SalasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (self::$salas as $sala) {
            $sa = new Sala();
            $sa->nombre = $sala['nombre'];
            $sa->accesible = $sala['accesible'];
            $sa->save();
        }
    }

    private static $salas = [
        [
            'nombre' => 'Cocina',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Sala VR',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Salón Cooworking',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Sala de Reuniones',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Aula Informática',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Despacho',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Sala Prototipado',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Aseos Comúnes',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Almacén Central',
            'accesible' => '0',
        ],
        [
            'nombre' => 'Almacén 1',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Almacén 2',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Almacén 3',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Almacén 4',
            'accesible' => '1',
        ],
        [
            'nombre' => 'Aseo Almacén',
            'accesible' => '1',
        ],
    ];
}
