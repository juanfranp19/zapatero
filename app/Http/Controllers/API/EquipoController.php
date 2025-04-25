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

            $equipo = json_decode($request->getContent(), true);
            $equipo = Equipo::create($equipo);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new EquipoResource($equipo);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $equipo = Equipo::findOrFail($id);
        return new EquipoResource($equipo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {

            $equipo = Equipo::find($id);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        if ($equipo) {

            try {

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
        $equipo = Equipo::find($id);
        if ($equipo) {
            $equipo->delete();
            return response()->json(['message' => 'Equipo eliminado'], 200);
        } else {
            return response()->json(['message' => 'Equipo no encontrado'], 404);
        }
    }
}
