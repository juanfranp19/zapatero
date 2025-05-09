<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovimientoResource;
use App\Models\Movimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class MovimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            Gate::authorize('viewAny', Movimiento::class);

            // desde el recurso, saca todos los datos, ordenados por id y de 5 en 5
            $movimientos = MovimientoResource::collection(
                Movimiento::orderBy('id')->get(),
            );

            return response()->json([
                'data' => $movimientos,
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            Gate::authorize('create', Movimiento::class);

            // obtiene el contenido del json y lo transforma a array asociativo
            $movimiento = json_decode($request->getContent(), true);

            // crea el modelo con los datos transformados
            $movimiento = Movimiento::create($movimiento);
            // el trabajador_id lo asigna el observer

            // devuleve el modelo creado desde el recurso
            return response()->json([
                'data' => new MovimientoResource($movimiento),
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        Gate::authorize('view', Movimiento::class);

        // encuentra el modelo
        $movimiento = Movimiento::findOrFail($id);

        // lo devuelve a través del recurso
        return response()->json([
            'data' => new MovimientoResource($movimiento),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // encuentra el modelo
        $movimiento = Movimiento::findOrFail($id);

        Gate::authorize('update', [Movimiento::class, $movimiento]);

        // verifica que se encuentren los campos
        $request->validate([
            'fecha' => 'required',
            'equipo_id' => 'required',
            'origen' => 'required',
            'destino' => 'required',
            //'trabajador_id' => 'required',
        ]);

        // los actualiza
        $movimiento->fecha = $request->input('fecha');
        $movimiento->equipo_id = $request->input('equipo_id');
        $movimiento->origen = $request->input('origen');
        $movimiento->destino = $request->input('destino');
        // el trabajador_id lo asigna el observer
        $movimiento->save();

        // devuelve respuesta vacía
        return response('', 204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // encuentra el modelo
        $movimiento = Movimiento::findOrFail($id);

        Gate::authorize('delete', [Movimiento::class, $movimiento]);

        // lo elimina
        $movimiento->delete();

        // devuelve mensaje vacío
        return response('', 204);
    }
}
