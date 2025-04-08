<?php

namespace Database\Seeders;

use App\Models\Equipo;
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

        //Equipo::truncate();

        foreach (self::$equipos_fablab as $equipo) {
            $equ = new Equipo();
            $equ->nombre = $equipo['nombre'];
            $equ->tipo = $equipo['tipo'];
            $equ->sala = $equipo['sala'];
            $equ->imagen = $equipo['imagen'];
            $equ->save();
        }


    }

    private static $equipos_fablab = [

        // bordadora

        [
            'nombre' => 'Bordadora Brother Model PR760E',
            'tipo' => 'Bordadora',
            'sala' => 'Salón Cooworking',
            'imagen' => 'bordadora-brother-model-pr670e.png',
        ],

        // cortadoras laser

        [
            'nombre' => 'Framun FL-1409',
            'tipo' => 'Cortadora Láser',
            'sala' => 'Salón Cooworking',
            'imagen' => 'framun-fl1409.png',
        ],
        [
            'nombre' => 'GCC Mercury III',
            'tipo' => 'Cortadora Láser',
            'sala' => 'Salón Cooworking',
            'imagen' => 'gcc-mercury-iii.png',
        ],

        // estampadora

        [
            'nombre' => 'Estampadora Beinsen',
            'tipo' => 'Estampadora',
            'sala' => 'Salón Cooworking',
            'imagen' => 'estampadora-beinsen.png',
        ],
        [
            'nombre' => 'Máquina universal de ensayos',
            'tipo' => 'Estampadora',
            'sala' => 'Salón Cooworking',
            'imagen' => 'maquina-universal-de-ensayos-instron-68tm-10.png',
        ],

        // fresadora CNC

        [
            'nombre' => 'Fresadora 5 Ejes HAAS UNC-1000',
            'tipo' => 'Fresadora CNC',
            'sala' => 'Salón Cooworking',
            'imagen' => 'fresadora-5-ejes-haas-unc-1000.png',
        ],
        [
            'nombre' => 'Cortadora por chorro de agua WAZER',
            'tipo' => 'Fresadora CNC',
            'sala' => 'Salón Cooworking',
            'imagen' => 'cortadora-por-chorro-de-agua-wazer.png',
        ],
        [
            'nombre' => 'Roland SRM-20',
            'tipo' => 'Fresadora CNC',
            'sala' => 'Salón Cooworking',
            'imagen' => 'roland-srm-20.png',
        ],
        [
            'nombre' => 'Fresadora CNC SW1325',
            'tipo' => 'Fresadora CNC',
            'sala' => 'Salón Cooworking',
            'imagen' => 'fresadora-cnc-sw1325.png',
        ],
        [
            'nombre' => 'Fresadora Stepcraft 420',
            'tipo' => 'Fresadora CNC',
            'sala' => 'Salón Cooworking',
            'imagen' => 'fresadora-stepcraft-420.png',
        ],

        // impresion 3D

        [
            'nombre' => 'Meltio Engine Impresora 3D en Metal. Integración en CNC HASS UMC-1000',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'metal-cnc-haas-meltio.png',
        ],
        [
            'nombre' => 'Sigmax Pro R19',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'sigmax-pro-r19.png',
        ],
        [
            'nombre' => 'Dimension BST 1200',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'dimension-bst-1200.png',
        ],
        [
            'nombre' => 'Object 30 Pro',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'object-30-pro.png',
        ],
        [
            'nombre' => 'Discovery 3D',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'discovery-3d.png',
        ],
        [
            'nombre' => 'Ender 3 Pro',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'ender-3-pro.png',
        ],
        [
            'nombre' => 'FormLab Form3B',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'formlab-form3b.png',
        ],
        [
            'nombre' => 'Lápiz 3D Prince',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'lapiz-3d-prince.png',
        ],
        [
            'nombre' => '3D Creality Ender 3',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => '3d-creality-ender-3.png',
        ],
        [
            'nombre' => 'BQ Prusa i3 Hephestos',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'bq-prusa-i3-hephestos.png',
        ],
        [
            'nombre' => 'Bioimpresora REG4LIFE',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'bioimpresora-reg4life.png',
        ],
        [
            'nombre' => 'Arcilla - Delta WASP 2040',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'arcilla-delta-wasp-2040.png',
        ],
        [
            'nombre' => 'Anycubic Photon M3 Max',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'anycubic-photon-m3-max.png',
        ],
        [
            'nombre' => 'Anycubic Photon Mono M5s',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'anycubic-photon-mono-m5s.png',
        ],
        [
            'nombre' => 'Bambu Lab X1 Carbon',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'bambulab-x1-carbon.png',
        ],
        [
            'nombre' => 'Creality K1 MAX',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'creality-k1max.png',
        ],
        [
            'nombre' => 'Elegoo 4 MAX',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'elegoo-4max.png',
        ],
        [
            'nombre' => 'Elegoo 4 PLUS',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'elegoo-4plus.png',
        ],
        [
            'nombre' => 'Creality Ender 6',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'creality-ender6.png',
        ],
        [
            'nombre' => 'Creality CR 6',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'creality-cr6.png',
        ],
        [
            'nombre' => 'Ender CR 30',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'creality-cr6.png',
        ],
        [
            'nombre' => 'Procusini 5.0 Alimentos',
            'tipo' => 'Impresión 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'procusini-5-alimentos.png',
        ],

        // plotters impresión y corte

        [
            'nombre' => 'Epson SureColor S80600',
            'tipo' => 'Plotters Impresión y corte',
            'sala' => 'Salón Cooworking',
            'imagen' => 'epson-surecolor-s80600.png',
        ],
        [
            'nombre' => 'Plotter de corte GCC Jaguar IV',
            'tipo' => 'Plotters Impresión y corte',
            'sala' => 'Salón Cooworking',
            'imagen' => 'plotter-de-corte-gcc-jaguar-iv.png',
        ],
        [
            'nombre' => 'HP DesignJet 800',
            'tipo' => 'Plotters Impresión y corte',
            'sala' => 'Salón Cooworking',
            'imagen' => 'hp-designjet-800.png',
        ],

        // termoconformadora

        [
            'nombre' => 'Inyectora de plástico BOY 35 E PRO',
            'tipo' => 'Termoconfortadora',
            'sala' => 'Salón Cooworking',
            'imagen' => 'inyectora-de-plastico-boy-35-e-pro.png',
        ],
        [
            'nombre' => 'Termoconformadora Formech 508 DT',
            'tipo' => 'Termoconfortadora',
            'sala' => 'Salón Cooworking',
            'imagen' => 'termoconformadora-formech-508-dt.png',
        ],

        //digitalizacion 3d

        [
            'nombre' => 'Escáner 3D Handy Scan Revscan',
            'tipo' => 'Digitalización 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'escaner-handyscan-revscan.png',
        ],
        [
            'nombre' => 'Escáner 3D Artec Spider',
            'tipo' => 'Digitalización 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'escaner-artec-space-spider.png',
        ],
        [
            'nombre' => 'Escáner 3D Artec Eva',
            'tipo' => 'Digitalización 3D',
            'sala' => 'Salón Cooworking',
            'imagen' => 'escaner-artec-eva.png',
        ],

        // XR / VR / AR

        [
            'nombre' => 'Plataforma de Movimiento VR',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'plataforma-de-movimiento-vr.png',
        ],
        [
            'nombre' => 'MOCAP',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'mocap.png',
        ],
        [
            'nombre' => 'Simuladores VR Conducción',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'simuladores-vr-conduccion.png',
        ],
        [
            'nombre' => 'Meta Quest 2',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'meta-quest-2.png',
        ],
        [
            'nombre' => 'Meta Quest 3',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'meta-quest-3.png',
        ],
        [
            'nombre' => 'HP Reverb 2',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'hp-reverb-2.png',
        ],
        [
            'nombre' => 'HTC Vive Cosmos',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'htc-vive-cosmos.png',
        ],
        [
            'nombre' => 'HTC Vive Pro',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'htc-vive-pro.png',
        ],
        [
            'nombre' => 'Hololones 2 Realidad Aumentada',
            'tipo' => 'XR VR AR',
            'sala' => 'Sala VR',
            'imagen' => 'hololones-2-realidad-aumentada.png',
        ],
    ];
}
