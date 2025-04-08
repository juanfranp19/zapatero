<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class EquiposTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
        $file = database_path('sql/insert/equipos_insert.sql');

        if (!File::exists($file)) {
            $this->command->error('no hay archivo SQL');
            return;
        }

        $sql = File::get($file);

        DB::unprepared($sql);
        */


    }

    private static $equipos_fablab = [
        [
            'nombre' => 'METAL - CNC HAAS / MELTIO',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'DISCOVERY 3D',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'DIMENSION BST 1200',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'BIOIMPRESORA REG4LIFE',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ARCILLA - DELTA WASP 2040',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'OBJECT 30 PRO',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'SIGMAX PRO R19',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'PROCUSINI 5.0 ALIMENTOS',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'FORMLAB 3B',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ANYCUBIC M3 MAX',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ANYCUBIC M3 MAX 2',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        // PAGINA 7
        [
            'nombre' => 'BAMBULAB X1 CARBON',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'CREALITY K1MAX',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ELEGOO 4MAX',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ELEGOO 4PLUS',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'CREALITY ENDER6',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'CREALITY ENDER6 2',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'BQ PRUSA I3',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ENDER CR30',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ENDER 3 PRO',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
        ],
        // PAGINA 8
        [
            'nombre' => 'CNC HAAS 5 EJES',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'CNC SW 1325',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'FRAMUN FL1409',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'GCC MERCURY III',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'WAZER CORTADORA AGUA',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ROLAND SRM20',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'STEPCRAFT 420',
            'tipo' => 'CNC Fresadora/Cortadora Láser',
            'sala' => 'Salón Cooworking',
        ],
        //pagina 9
        [
            'nombre' => 'ESCANER HANDYSCAN REVSCAN',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ESCANER ARTEC SPACE SPIDER',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ESCANER ARTEC EVA',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'MUE INSTRON 68TM-10',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'TERMOCONFORMADORA FORMECH 508T',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'BORDADORA BROTHER PR670E',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'INYECTORA DE PLÁSTICO BOY35E PRO',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'PLOTER EPSON SURE COLOR S80600',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'PLOTTER CORTE GCC JAGUAR IV',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        [
            'nombre' => 'ESTAMPADORA BEINSEN',
            'tipo' => 'Otras técnicas',
            'sala' => 'Salón Cooworking',
        ],
        // pagina 10
        [
            'nombre' => 'PLATAFORMA DE MOVIMIENTO VR',
            'tipo' => 'XR / VR / AR',
            'sala' => 'Sala VR',
        ],
        [
            'nombre' => 'MOCAP',
            'tipo' => 'XR / VR / AR',
            'sala' => 'Sala VR',
        ],
        [
            'nombre' => 'SIMULADORES VR CONDUCCIÓN',
            'tipo' => 'XR / VR / AR',
            'sala' => 'Sala VR',
        ],
    ];
}
