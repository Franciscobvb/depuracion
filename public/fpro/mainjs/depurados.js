// AÑADIR DIV QUE CONTIENE LOS SELECTS DEL FILTRO EN LA DATATABLE
function cbDropdown(column) {
    return $('<ul>', {
    'class': 'cb-dropdown'
    }).appendTo($('<div>', {
    'class': 'cb-dropdown-wrap'
    }).appendTo(column));
}

$(document).ready(function() {
    App.init(); // INICIALIZA LA APP

    getGenealogy(); // INICIALIZAMOS DATATBLE
});

function getGenealogy(){
    var associateid = $("#associateid").val();

    var whatsappText = "¡Sigue aprovechando los beneficios de Nikken y alcanza grandes logros,  descubre todo lo que tenemos preparado para el próximo año!";

    // HABILITA DATATABLE Y AÑADE LOS TIPOS DE FILTROS APLICABLE A LOS HEAD Y LOS SELECTS ADEMAS DE CARGAR LOS REGISTROS CON AJAX A DICHA TABLA
    var table = $('#html5-extension').DataTable( {
        destroy: true,
        ajax: "/getgenealogy?associateid=" + associateid,
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
                data: 'VP_Nov',
                "render": function (data, type, row) {
                    if (row.VP_Nov >= 100) {
                        return parseInt(row.VP_Nov) + '&nbsp;&nbsp;<span class="flaticon-single-circle-tick" style="color: green"></span>';
                    }
                    else{
                        return parseInt(0) + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                    }
                }
            },
            { 
                data: 'VP_Dic',
                "render": function (data, type, row) {
                    if (row.VP_Dic >= 100) {
                        return parseInt(row.VP_Dic) + '&nbsp;&nbsp;<span class="flaticon-single-circle-tick" style="color: green"></span>';
                    }
                    else{
                        return parseInt(0) + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                    }
                }
            },
            { 
                data: 'VP_Enero',
                "render": function (data, type, row) {
                    if (row.VP_Enero >= 100) {
                        return parseInt(row.VP_Enero) + '&nbsp;&nbsp;<span class="flaticon-single-circle-tick" style="color: green"></span>';
                    }
                    else{
                        return parseInt(0) + '&nbsp;&nbsp;<span class="flaticon-circle-cross" style="color: red"></span>';
                    }
                }
            },
            { data: 'Telefono' },
            {
                data: null,
                className: "center",
                "render": function (data, type, row) {
                    var nombre = String(row.AssociateName);
                    var nombreformat = nombre.replace(/"/g, '');
                    return '<a href="https://api.whatsapp.com/send?phone=5215540884257&text=' + whatsappText + '" class="mr-3" target="_new"> ' +
                                    '<i class="fab fa-whatsapp alerticonwa" style="font-size: 25px"></i>' +
                    '</a>' +
                    '<a href="javascript:void(0)" onclick="sendMail(\'' + row.Email + '\', \'' + nombreformat + '\')">' +
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
        /*initComplete: function() {
            this.api().columns([2,3]).every(function() {
                var column = this;
                var ddmenu = cbDropdown($(column.header()))
                .on('change', ':checkbox', function() {
                    var active;
                    var vals = $(':checked', ddmenu).map(function(index, element) {
                        active = true;
                        return $.fn.dataTable.util.escapeRegex($(element).val());
                    }).toArray().join('|');

                    column
                    .search(vals.length > 0 ? '^(' + vals + ')$' : '', true, false)
                    .draw();

                    if (this.checked) {
                        $(this).closest('li').addClass('active');
                    } else {
                        $(this).closest('li').removeClass('active');
                    }

                    var active2 = ddmenu.parent().is('.active');
                    if (active && !active2) {
                        ddmenu.parent().addClass('active');
                    } else if (!active && active2) {
                        ddmenu.parent().removeClass('active');
                    }
                });

                column.data().unique().sort().each(function(d, j) {
                    var 
                    $label = $('<label>'),
                    $text = $('<span>', {
                        text: d
                    }),
                    $cb = $('<input>', {
                        type: 'checkbox',
                        value: d,
                    });
                    $text.appendTo($label);
                    $cb.appendTo($label);
                    ddmenu.append($('<li>').append($label));
                });
            });
        },*/
    });

    // AÑADE LISTA DESPLEGABLE EN HEAD ADICIONAL PARA PODER FILTAR POR TIPO DE DATO

    /*$(".filterhead").each( function ( i ) {
        if(i == 2 || i == 3){
            var select = $('<select><option value="">Seleccione...</option></select>')
            .appendTo( $(this).empty() )
            .on( 'change', function () {
            var term = $(this).val();
                table.column( i ).search(term, false, false ).draw();
            } );
        
            table.column( i ).data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
            } );
        }
    });*/
}

// Envio de correo a asesor propenso a ser depurado
function sendMail(email, nombre){
    console.log(nombre);
    var data = {email: email, nombre: nombre};
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
            text: "Posiblemente este asesor no tienen correo registrado!",
            type: 'error',
            padding: '2em'
        })
    });
}

function prueba_notificacion() {
    var title = "test";
    if (Notification) {
        if (Notification.permission !== "granted") {
            Notification.requestPermission()
        }
        var extra = {
            icon: "http://xitrus.es/imgs/logo_claro.png",
            body: "Notificación de prueba en Xitrus"
        }
        var noti = new Notification(title, extra)
    }
}