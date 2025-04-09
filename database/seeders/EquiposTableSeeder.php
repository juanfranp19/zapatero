<?php

namespace Database\Seeders;

use App\Models\Equipo;
use Illuminate\Database\Seeder;

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
            $equ->tipo_equipo_id = $equipo['tipo_equipo_id'];
            $equ->sala_id = $equipo['sala_id'];
            $equ->imagen = $equipo['imagen'];
            $equ->save();
        }
    }

    private static $equipos_fablab = [

        // bordadora

        [
            'nombre' => 'Bordadora Brother Model PR760E',
            'tipo_equipo_id' => 1,
            'sala_id' => 3,
            'imagen' => 'bordadora-brother-model-pr670e.png',
        ],

        // cortadoras laser

        [
            'nombre' => 'Framun FL-1409',
            'tipo_equipo_id' => 2,
            'sala_id' => 3,
            'imagen' => 'framun-fl1409.png',
        ],
        [
            'nombre' => 'GCC Mercury III',
            'tipo_equipo_id' => 2,
            'sala_id' => 3,
            'imagen' => 'gcc-mercury-iii.png',
        ],

        // estampadora

        [
            'nombre' => 'Estampadora Beinsen',
            'tipo_equipo_id' => 3,
            'sala_id' => 3,
            'imagen' => 'estampadora-beinsen.png',
        ],
        [
            'nombre' => 'Máquina universal de ensayos',
            'tipo_equipo_id' => 3,
            'sala_id' => 3,
            'imagen' => 'maquina-universal-de-ensayos-instron-68tm-10.png',
        ],

        // fresadora CNC

        [
            'nombre' => 'Fresadora 5 Ejes HAAS UNC-1000',
            'tipo_equipo_id' => 4,
            'sala_id' => 3,
            'imagen' => 'fresadora-5-ejes-haas-unc-1000.png',
        ],
        [
            'nombre' => 'Cortadora por chorro de agua WAZER',
            'tipo_equipo_id' => 4,
            'sala_id' => 3,
            'imagen' => 'cortadora-por-chorro-de-agua-wazer.png',
        ],
        [
            'nombre' => 'Roland SRM-20',
            'tipo_equipo_id' => 4,
            'sala_id' => 3,
            'imagen' => 'roland-srm-20.png',
        ],
        [
            'nombre' => 'Fresadora CNC SW1325',
            'tipo_equipo_id' => 4,
            'sala_id' => 3,
            'imagen' => 'fresadora-cnc-sw1325.png',
        ],
        [
            'nombre' => 'Fresadora Stepcraft 420',
            'tipo_equipo_id' => 4,
            'sala_id' => 3,
            'imagen' => 'fresadora-stepcraft-420.png',
        ],

        // impresion 3D

        [
            'nombre' => 'Meltio Engine Impresora 3D en Metal. Integración en CNC HASS UMC-1000',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'metal-cnc-haas-meltio.png',
        ],
        [
            'nombre' => 'Sigmax Pro R19',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'sigmax-pro-r19.png',
        ],
        [
            'nombre' => 'Dimension BST 1200',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'dimension-bst-1200.png',
        ],
        [
            'nombre' => 'Object 30 Pro',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'object-30-pro.png',
        ],
        [
            'nombre' => 'Discovery 3D',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'discovery-3d.png',
        ],
        [
            'nombre' => 'Ender 3 Pro',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'ender-3-pro.png',
        ],
        [
            'nombre' => 'FormLab Form3B',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'formlab-form3b.png',
        ],
        [
            'nombre' => 'Lápiz 3D Prince',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'lapiz-3d-prince.png',
        ],
        [
            'nombre' => '3D Creality Ender 3',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => '3d-creality-ender-3.png',
        ],
        [
            'nombre' => 'BQ Prusa i3 Hephestos',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'bq-prusa-i3-hephestos.png',
        ],
        [
            'nombre' => 'Bioimpresora REG4LIFE',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'bioimpresora-reg4life.png',
        ],
        [
            'nombre' => 'Arcilla - Delta WASP 2040',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'arcilla-delta-wasp-2040.png',
        ],
        [
            'nombre' => 'Anycubic Photon M3 Max',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'anycubic-photon-m3-max.png',
        ],
        [
            'nombre' => 'Anycubic Photon Mono M5s',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'anycubic-photon-mono-m5s.png',
        ],
        [
            'nombre' => 'Bambu Lab X1 Carbon',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'bambulab-x1-carbon.png',
        ],
        [
            'nombre' => 'Creality K1 MAX',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'creality-k1max.png',
        ],
        [
            'nombre' => 'Elegoo 4 MAX',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'elegoo-4max.png',
        ],
        [
            'nombre' => 'Elegoo 4 PLUS',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'elegoo-4plus.png',
        ],
        [
            'nombre' => 'Creality Ender 6',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'creality-ender6.png',
        ],
        [
            'nombre' => 'Creality CR 6',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'creality-cr6.png',
        ],
        [
            'nombre' => 'Ender CR 30',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'creality-cr6.png',
        ],
        [
            'nombre' => 'Procusini 5.0 Alimentos',
            'tipo_equipo_id' => 5,
            'sala_id' => 3,
            'imagen' => 'procusini-5-alimentos.png',
        ],

        // plotters impresión y corte

        [
            'nombre' => 'Epson SureColor S80600',
            'tipo_equipo_id' => 6,
            'sala_id' => 3,
            'imagen' => 'epson-surecolor-s80600.png',
        ],
        [
            'nombre' => 'Plotter de corte GCC Jaguar IV',
            'tipo_equipo_id' => 6,
            'sala_id' => 3,
            'imagen' => 'plotter-de-corte-gcc-jaguar-iv.png',
        ],
        [
            'nombre' => 'HP DesignJet 800',
            'tipo_equipo_id' => 6,
            'sala_id' => 3,
            'imagen' => 'hp-designjet-800.png',
        ],

        // termoconformadora

        [
            'nombre' => 'Inyectora de plástico BOY 35 E PRO',
            'tipo_equipo_id' => 7,
            'sala_id' => 3,
            'imagen' => 'inyectora-de-plastico-boy-35-e-pro.png',
        ],
        [
            'nombre' => 'Termoconformadora Formech 508 DT',
            'tipo_equipo_id' => 7,
            'sala_id' => 3,
            'imagen' => 'termoconformadora-formech-508-dt.png',
        ],

        //digitalizacion 3d

        [
            'nombre' => 'Escáner 3D Handy Scan Revscan',
            'tipo_equipo_id' => 8,
            'sala_id' => 3,
            'imagen' => 'escaner-handyscan-revscan.png',
        ],
        [
            'nombre' => 'Escáner 3D Artec Spider',
            'tipo_equipo_id' => 8,
            'sala_id' => 3,
            'imagen' => 'escaner-artec-space-spider.png',
        ],
        [
            'nombre' => 'Escáner 3D Artec Eva',
            'tipo_equipo_id' => 8,
            'sala_id' => 3,
            'imagen' => 'escaner-artec-eva.png',
        ],

        // XR / VR / AR

        [
            'nombre' => 'Plataforma de Movimiento VR',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'plataforma-de-movimiento-vr.png',
        ],
        [
            'nombre' => 'MOCAP',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'mocap.png',
        ],
        [
            'nombre' => 'Simuladores VR Conducción',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'simuladores-vr-conduccion.png',
        ],
        [
            'nombre' => 'Meta Quest 2',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'meta-quest-2.png',
        ],
        [
            'nombre' => 'Meta Quest 3',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'meta-quest-3.png',
        ],
        [
            'nombre' => 'HP Reverb 2',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'hp-reverb-2.png',
        ],
        [
            'nombre' => 'HTC Vive Cosmos',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'htc-vive-cosmos.png',
        ],
        [
            'nombre' => 'HTC Vive Pro',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'htc-vive-pro.png',
        ],
        [
            'nombre' => 'Hololones 2 Realidad Aumentada',
            'tipo_equipo_id' => 9,
            'sala_id' => 2,
            'imagen' => 'hololones-2-realidad-aumentada.png',
        ],
    ];
}
