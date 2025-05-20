<?php

namespace Database\Seeders;

use App\Models\Aviso;
use App\Models\User;
use Illuminate\Database\Seeder;

class AvisosUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $avisos = Aviso::all();
        $users = User::all();

        foreach ($avisos as $aviso) {

            foreach ($users as $user) {

                // para cada aviso hace un attach de cada usuario con leido false
                $aviso->avisos_users()->attach($user, [
                    'leido' => 0,
                ]);
            }
        }
    }
}
