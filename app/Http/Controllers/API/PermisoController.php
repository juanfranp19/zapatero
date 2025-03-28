<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermisoResource;
use App\Models\Permiso;
use Illuminate\Http\Request;

class PermisoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $permisos = PermisoResource::collection(
                Permiso::orderBy('id')->paginate(5)
            );

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return $permisos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $permiso = json_decode($request->getContent(), true);
            $permiso = Permiso::create($permiso);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return new PermisoResource($permiso);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $permiso = Permiso::findOrFail($id);
        return new PermisoResource($permiso);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
        $permiso = Permiso::find($id);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }

        if ($permiso) {

            $request->validate([
                'desde' => 'required',
                'hasta' => 'required',
                'numusos' => 'required',
                'periodo_uso' => 'required',
                'equipo_id' => 'required',
                'trabajador_id' => 'required'
            ]);

            $permiso->desde = $request->input('desde');
            $permiso->hasta = $request->input('hasta');
            $permiso->numusos = $request->input('numusos');
            $permiso->periodo_uso = $request->input('periodo_uso');
            $permiso->equipo_id = $request->input('equipo_id');
            $permiso->trabajador_id = $request->input('trabajador_id');
            $permiso->save();

            return response()->json(new PermisoResource($permiso), 200);

        } else {
            return response()->json(['message' => 'Permiso no encontrado'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $permiso = Permiso::find($id);
        if ($permiso) {
            $permiso->delete();
            return response()->json(['message' => 'Permiso eliminado'], 200);
        } else {
            return response()->json(['message' => 'Permiso no encontrado'], 404);
        }
    }
}
