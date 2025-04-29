<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\EquipoResource;
use App\Models\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $equipos = EquipoResource::collection(
                Equipo::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $equipos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // obtiene el contenido del json y lo transforma a array asociativo
            $equipo = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $equipo = Equipo::create($equipo);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // devuleve el modelo creado desde el recurso
        return new EquipoResource($equipo);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // encuentra el modelo
        $equipo = Equipo::findOrFail($id);

        // lo devuelve a través del recurso
        return new EquipoResource($equipo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            // encuentra el modelo
            $equipo = Equipo::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($equipo) {

            try {

                // verifica que se encuentren los campos
                $request->validate([
                    'nombre' => 'required',
                    'descripcion' => 'required',
                    'tipo_equipo_id' => 'required',
                    'sala_id' => 'required',
                    'imagen' => 'required',
                    //'fecha_integracion' => 'required',
                    'activo' => 'required',
                    'reparacion' => 'required',
                    'mantenimiento' => 'required',
                ]);

                // los actualiza
                $equipo->nombre = $request->input('nombre');
                $equipo->descripcion = $request->input('descripcion');
                $equipo->tipo_equipo_id = $request->input('tipo_equipo_id');
                $equipo->sala_id = $request->input('sala_id');
                $equipo->imagen = $request->input('imagen');
                $equipo->fecha_integracion = $request->input('fecha_integracion');
                $equipo->activo = $request->input('activo');
                $equipo->reparacion = $request->input('reparacion');
                $equipo->mantenimiento = $request->input('mantenimiento');
                $equipo->save();

            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

            // lo devuelve mediante el recurso
            return response()->json(new EquipoResource($equipo), 200);

        } else {
            return response()->json(['message' => 'Equipo no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $equipo = Equipo::find($id);

        if ($equipo) {

            // lo elimina
            $equipo->delete();

            // devuelve mensaje
            return response()->json(['message' => 'Equipo eliminado'], 200);

        } else {
            return response()->json(['message' => 'Equipo no encontrado'], 404);
        }
    }
}
