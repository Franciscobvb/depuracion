<?php

namespace App\Http\Controllers\Depuracion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class Depuracion extends Controller{
    public function index(Request $request){
        $associateid = base64_decode($request->associateid);

        return view('depuracion.index', compact('associateid'));
    }

    public function sendMail(Request $request){
        $email = $request->email;
        $nombre = $request->nombre;
        $dukTape = $request->dukTape;

        // Envio de correo a asesor propenso a ser depurado
        $data = array(
            'nombre' => "$nombre",
            'dukTape' => $dukTape,
        );
        Mail::send('depuracion.emails.email', $data, function ($message) use($email){
            $message->from('servicio.chl@nikkenlatam.com', 'Nikken Latinoamérica');
            $message->to("cafij31030@email-9.com")->subject('Nikken Latinoamérica');
        });

        return "success"; 
    }

    public function getgenealogy(Request $request){
        $associateid = $request->associateid;
        $type = $request->tipo;
        // extrae la genealogia propensos a ser depurados
        $conection = \DB::connection('sqlsrv');
            $response = $conection->select("EXEC Gen_Depurados $associateid, $type");
        \DB::disconnect('sqlsrv');

        $data = [
            'data' => $response,
        ];
        return \Response::json($data);
    }

    public function email(){
        return \view('depuracion.emails.email');
    }
}
