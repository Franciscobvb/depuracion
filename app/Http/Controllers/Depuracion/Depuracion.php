<?php

namespace App\Http\Controllers\Depuracion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class Depuracion extends Controller{
    public function index(Request $request){
        $associateid = $request->associateid;

        /*$conection = \DB::connection('sqlsrv');
            $response = $conection->select("EXEC Gen_Depurados $associateid");
        \DB::disconnect('sqlsrv');*/

        return view('depuracion.index', compact('associateid'));
    }

    public function sendMail(Request $request){
        $email = $request->email;
        $nombre = $request->nombre;

        // Envio de correo a asesor propenso a ser depurado
        $data = array(
            'nombre' => "$nombre",
        );
        Mail::send('depuracion.emails.email', $data, function ($message) use($email){
            $message->from('servicio.chl@nikkenlatam.com', 'Nikken Latinoamérica');
            $message->to("arodriguez@nikkenlatam.com")->subject('Nikken Latinoamérica');
            $message->to("depurados1@amail1.com")->subject('Nikken Latinoamérica');
        });

        return "success"; 
    }

    public function getgenealogy(Request $request){
        $associateid = $request->associateid;
        // extrae la genealogia propensos a ser depurados
        $conection = \DB::connection('sqlsrv');
            $response = $conection->select("EXEC Gen_Depurados $associateid");
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
