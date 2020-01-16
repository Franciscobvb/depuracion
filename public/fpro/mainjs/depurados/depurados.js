var whatsappText = "Sigue aprovechando los beneficios de NIKKEN y alcanza grandes logros💪🏻🔝. Recuerda que tienes hasta el 15 de enero de 2020 para completar 💯 puntos de VP en un mes calendario y no perder el código. 🎉🎉🎉";
var type = $("#typegen").val(); // EXTRAER EL TIPO DE GENEALOGIA SELECCIONADA POR DEFAULT
var countDownDate = new Date("Jan 15, 2020 23:59:59").getTime();
//var countDownDate = new Date("Jan 13, 2020 10:11:00").getTime();
var promo = false; // AUN HAY PROMOCIO? (true = si hay promo) (false = no hay promo)
var showButtonCol = true; // VALOR PARA DEFINIR SI SE MUESTRA LA COLUMNA DE LOS BOTONES DE EMISIÓN

var dt = new Date();
var tz = dt.getTimezoneOffset();
console.log("getTimezoneOffset() : " + tz ); 

$(document).ready(function() {
    App.init(); // INICIALIZA LA APP
    getGenealogy(type); // INICIALIZAMOS DATATBLE
    $('.sinpromo').show(); // muestra el banner sin promo
});

// CONTADOR DE TIEMPO ANTES DE QUITAR LOS BOTONES DE EMISION AUTOMATICAMENTE
var x = setInterval(function() {
    // OBTENER la fecha y hora EN CURSO
    var now = new Date().getTime();
    
    // CALCULA la DISTNCIA entre ahora y la fecha PARA la cuenta regresiva
    var distance = countDownDate - now;
    
    // Cálculos de días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").text(days + " Dias");
    $("#hours").text(hours + " Horas");
    $("#minutes").text(minutes + " Minutos");
    $("#seconds").text(seconds + " Segundos");

    //console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    
    // Si LA DISTANCIA ENTRE LA FECHA ACTUAL Y LA FECHA LIMITE SON IGUALES, SE DEJA DE EJECUTAR EL CONTADOR Y OCULTA LA COLUMNA DE LOS BOTONES DE EMISION
    if (distance < 0) {
        clearInterval(x); // detiene el countdown
        getGenealogy(type); // INICIALIZAMOS DATATBLE
        showButtonCol = false; // INDICAMOS QUE LOS BOTONES DE EMISION YA NO SE MOSTRARAN
    }
}, 1000);

function getGenealogy(type){
    var associateid = $("#associateid").val();
    var type = type;

    // HABILITA DATATABLE Y AÑADE LOS TIPOS DE FILTROS APLICABLE A LOS HEAD Y LOS SELECTS ADEMAS DE CARGAR LOS REGISTROS CON AJAX A DICHA TABLA
    var table = $('#html5-extension').DataTable( {
        destroy: true,
        ajax: "/getgenealogy?associateid=" + associateid + "&tipo=" + type,
        columns: [
            { 
                data: 'AssociateName',
                "render": function (data, type, row) {
                    var nombre = String(row.AssociateName);
                    var nombreformat = nombre.replace(/"/g, '');
                    return nombreformat;
                },
            },
            { data: 'associateid' },
            { 
                data: 'AssociateType',
                "render": function (data, type, row) {
                    if (row.AssociateType > 100) {
                        return 'Club de Bienestar';
                    }
                    else {
                        return 'Asesor de Bienestar';
                    }
                }
            },
            { 
                data: 'Rango',
                className: "text-center",
                "render": function (data, type, row) {
                    if (parseInt(row.Rango) == 1) {
                        return 'DIR';
                    }
                    else if(parseInt(row.Rango) == 3){
                        return 'EXE';
                    }
                    else if(parseInt(row.Rango) == 5){
                        return 'PLA';
                    }
                    else if(parseInt(row.Rango) == 6){
                        return 'ORO';
                    }
                    else if(parseInt(row.Rango) == 7){
                        return 'PLO';
                    }
                    else if(parseInt(row.Rango) == 8){
                        return 'DIA';
                    }
                    else if(parseInt(row.Rango) == 9){
                        return 'DRL';
                    }
                    else{
                        return 'DIR';
                    }
                }
            },
            { data: 'SponsorName' },
            { 
                data: 'VP_Dic',
                className: "text-center",
                "render": function (data, type, row) {
                    if (row.VP_Dic >= 100) {
                        return parseInt(row.VP_Dic) + '&nbsp;&nbsp;<span class="flaticon-single-circle-tick" style="color: green"></span>';
                    }
                    else{
                        if(row.VP_Dic <= 0){
                            return parseInt(0) + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                        }
                        else{
                            return row.VP_Dic + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                        }
                    }
                }
            },
            { 
                data: 'VP_Enero',
                className: "text-center",
                "render": function (data, type, row) {
                    if (row.VP_Enero >= 100) {
                        return parseInt(row.VP_Enero) + '&nbsp;&nbsp;<span class="flaticon-single-circle-tick" style="color: green"></span>';
                    }
                    else{
                        if(row.VP_Enero <= 0){
                            return parseInt(0) + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                        }
                        else{
                            return row.VP_Enero + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                        }
                    }
                }
            },
            { data: 'Telefono' },
            {
                data: null,
                className: "text-center actions",
                "render": function (data, type, row) {
                    var countryCode = ["57", "51", "506", "507", "503", "502", "56", "52", "593"];
                    var number = 0;
                    if(row.Telefono == '' || row.Telefono == null || row.Telefono == ' '){
                        number = 00000000;
                    }
                    else{
                        number = row.Telefono.trim();
                    }
                    //var number = datanumber.replace(' ', '');
                    var whatsappLink = "javascript:void(0)";
                    var whatsappLinkIcon = "";
                    var target = "";

                    var nombre = String(row.AssociateName);
                    var nombreformat = nombre.replace(/"/g, '');

                    switch(row.Country){
                        case('COL'):
                            if(number != ''){
                                if(number.length >= 10 && number.length <= 10){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[0] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('PER'):
                            if(number != ''){
                                if(number.length >= 9 && number.length <= 9){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[1] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('CRI'):
                            if(number != ''){
                                if(number.length >= 8 && number.length <= 8){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[2] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('PAN'):
                            if(number != ''){
                                if(number.length >= 7 && number.length <= 7){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[3] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('SLV'):
                            if(number != ''){
                                if(number.length >= 8 && number.length <= 8){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[4] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('GTM'):
                            if(number != ''){
                                if(number.length >= 8 && number.length <= 8){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[5] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('CHL'):
                            if(number != ''){
                                if(number.length >= 9 && number.length <= 9){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[6] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('LAT'):
                            if(number != ''){
                                if(number.length >= 10 && number.length <= 10){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[7] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                        case('ECU'):
                            if(number != ''){
                                if(number.length >= 8 && number.length <= 8){
                                    whatsappLink = "https://api.whatsapp.com/send?phone=" + countryCode[8] + number + "&text=" + whatsappText;
                                    
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwa";
                                    target = "target='_new'";
                                }
                                else{
                                    whatsappLinkIcon = "fab fa-whatsapp alerticonwaDisabled";
                                }
                            }
                            break;
                    }

                    if(!showButtonCol){
                        $(".actionsh").hide();
                        $(".actions").hide();
                    }

                    return '<a href="' + whatsappLink + '" ' + target + ' class="mr-3">' +
                                '<i class="' + whatsappLinkIcon + '" style="font-size: 25px"></i>' +
                            '</a>' +
                            '<a href="javascript:void(0)" onclick="sendMail(\'' + row.Email + '\', \'' + nombreformat + '\', \'' + row.Country + '\')">' +
                                '<span class="flaticon-mail-open alerticonem" style="font-size: 25px"></span>' +
                            '</a>';
                },
            },
        ],
        dom: '<"row"<"col-md-12"<"row"<"col-md-6"B><"col-md-6"f> > ><"col-md-12"rt> <"col-md-12"<"row"<"col-md-5 mb-md-0 mb-5"i><"col-md-7"p>>> >',
        buttons: {
            buttons: [
                { extend: 'excel', className: 'btn btn-fill btn-fill-dark btn-rounded mb-4 mr-3 btnExcel', text:"<img src='http://services.nikken.com.mx/retos/img/excel.png' width='15px'></img> Exportar a Excel",}
            ]
        },
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
        },
        "bLengthChange": false,
        "iDisplayLength": 10,
    });
}

// ENVIO DE CORREO A ASESOR PROPENSO A SER DEPURADO
function sendMail(email, nombre, pais){
    var dukTape = "mailMicroSiteLAT.png";

    if(pais.trim() == "LAT"){
        dukTape = "mailMicroSiteMEX.png";
    }

    if(promo == false){
        dukTape = "mailMicroSiteCierre.png";
    }

    var data = {email: email, nombre: nombre, dukTape: dukTape};
    swal({
        title: 'Envió de correo',
        text: "¿Desea enviar el correo a " + nombre + "?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Enviar',
        padding: '2em'
    }).then(function(result) {
        if (result.value) {
            $.ajax({
                type: 'GET',
                url: '/sendemail',
                data: data,
                success: function(Response) {
                    if(Response == 'success'){
                        swal({
                            title: '',
                            text: "Correo enviaiado!",
                            type: 'success',
                            padding: '2em'
                        })
                    }
                }
            }).fail( function() {
                swal({
                    title: 'Error!!',
                    text: "Posiblemente este asesor no tiene correo registrado!",
                    type: 'error',
                    padding: '2em'
                })
            });
        }
    });
}
