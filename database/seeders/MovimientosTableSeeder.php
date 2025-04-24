<?php

namespace Database\Seeders;

use App\Models\Movimiento;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovimientosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (self::$movimientos_array as $movimiento) {
            $mov = new Movimiento();
            $mov->fecha = $movimiento['fecha'];
            $mov->equipo_id = $movimiento['equipo_id'];
            $mov->origen = $movimiento['origen'];
            $mov->destino = $movimiento['destino'];
            $mov->trabajador_id = $movimiento['trabajador_id'];
            $mov->save();
        }
    }

    private static $movimientos_array = [
        [
            'fecha' => '2025-04-24 13:15:25',
            'equipo_id' => 52,
            'origen' => 3,
            'destino' => 5,
            'trabajador_id' => 1,
        ],
        [
            'fecha' => '2025-04-24 14:15:25',
            'equipo_id' => 50,
            'origen' => 4,
            'destino' => 5,
            'trabajador_id' => 1,
        ],
        [
            'fecha' => '2025-04-24 15:15:25',
            'equipo_id' => 51,
            'origen' => 2,
            'destino' => 5,
            'trabajador_id' => 1,
        ],
    ];
}
