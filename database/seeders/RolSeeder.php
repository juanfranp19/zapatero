<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // llena la tabla con los datos del array

        foreach (self::$roles_array as $rol) {
            $ro = new Rol();
            $ro->nombre = $rol['nombre'];
            $ro->save();
        }
    }

    private static $roles_array = [
        ['nombre' => 'admin'], ['nombre' => 'mantimiento'], ['nombre' => 'prácticas'], ['nombre' => 'universitario'], ['nombre' => 'otro'],
    ];
}
