<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\EquipoResource;
use App\Models\Equipo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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
        try{
        $equipo = Equipo::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($equipo) {

            $request->validate([
                'numserie' => 'required',
                'activo' => 'required',
                'alias' => 'required',
                'periodo_uso' => 'required',
                'reparacion' => 'required',
                'tipo' => 'required'
            ]);

            $equipo->numserie = $request->input('numserie');
            $equipo->activo = $request->input('activo');
            $equipo->alias = $request->input('alias');
            $equipo->periodo_uso = $request->input('periodo_uso');
            $equipo->reparacion = $request->input('reparacion');
            $equipo->tipo = $request->input('tipo');
            $equipo->save();

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
