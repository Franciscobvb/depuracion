<?php

Route::get('/depuracion/{associateid}', 'Depuracion\Depuracion@index');
Route::get('/sendemail', 'Depuracion\Depuracion@sendMail');
Route::get('/email', 'Depuracion\Depuracion@email');
Route::get('/getgenealogy', 'Depuracion\Depuracion@getgenealogy');