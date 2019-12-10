<?php

namespace App\Http\Controllers\Depuracion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class Depuracion extends Controller{
    public function index(Request $request){
        $associateid = $request->associateid;

        $conection = \DB::connection('sqlsrv');
            $response = $conection->select("EXEC Gen_Depurados $associateid");
        \DB::disconnect('sqlsrv');

        return view('depuracion.index', compact('response'));
    }

    public function sendMail(Request $request){
        $email = $request->email;
        $nombre = $request->nombre;

        $data = array(
            'nombre' => "$nombre",
        );
        Mail::send('depuracion.emails.email', $data, function ($message){
            $message->from('servicio.chl@nikkenlatam.com', 'Nikken Latinoamérica');
            $message->to("jivimaw705@imail1.net")->subject('Nikken Latinoamérica');
        });

        return "success"; 
    }

    public function email(){
        return \view('depuracion.emails.email');
    }
}
