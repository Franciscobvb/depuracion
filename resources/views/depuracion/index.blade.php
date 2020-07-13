<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
        <title>NIKKEN | Depuración</title>
        <link rel="icon" type="image/x-icon" href="https://nikkenlatam.com/favicon.ico"/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="{{asset('fpro/bootstrap/css/bootstrap.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('fpro/css/plugins.css')}}" rel="stylesheet" type="text/css" />

        <script src="{{asset('fpro/js/libs/jquery-3.1.1.min.js')}}"></script>
        <script src="{{asset('fpro/bootstrap/js/popper.min.js')}}"></script>
        <script src="{{asset('fpro/bootstrap/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('fpro/plugins/scrollbar/jquery.mCustomScrollbar.concat.min.js')}}"></script>
        <script src="{{asset('fpro/js/custom.js')}}"></script>

        <link href="{{asset('fpro/css/ui-kit/custom-modal.css')}}" rel="stylesheet" type="text/css" />
        <script src="{{asset('fpro/js/modal/classie.js')}}"></script>

        <link rel="stylesheet" type="text/css" href="{{asset('fpro/plugins/table/datatable/datatables.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('fpro/plugins/table/datatable/custom_dt_html5.css')}}">

        <link href="{{asset('fpro/plugins/animate/animate.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('fpro/css/modals/component.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('fpro/css/ui-kit/custom-modal.css')}}" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="{{asset('fpro/plugins/font-icons/pixeden/pe-icon-7-stroke.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('fpro/plugins/font-icons/pixeden/style.css')}}">

        <link href="{{asset('fpro/css/components/custom-carousel.css')}}" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="{{asset('fpro/plugins/font-icons/fontawesome/css/regular.css')}}">
        <link rel="stylesheet" href="{{asset('fpro/plugins/font-icons/fontawesome/css/solid.css')}}">
        <link rel="stylesheet" href="{{asset('fpro/plugins/font-icons/fontawesome/css/brands.css')}}">
        <link rel="stylesheet" href="{{asset('fpro/plugins/font-icons/fontawesome/css/fontawesome.css')}}">

        <link href="{{asset('fpro/plugins/animate/animate.css')}}" rel="stylesheet" type="text/css" />
        <script src="{{asset('fpro/plugins/sweetalerts/promise-polyfill.js')}}"></script>
        <link href="{{asset('fpro/plugins/sweetalerts/sweetalert2.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('fpro/plugins/sweetalerts/sweetalert.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('fpro/css/ui-kit/custom-sweetalert.css')}}" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="{{asset('fpro/css/components/animation/css/animate.min.css')}}">
        <link href="{{ asset('fpro/css/components/custom-countdown.css') }}" rel="stylesheet" type="text/css">
        <style>
            .btnExcel{
                background-image: linear-gradient(to right, #3862f5 0%, #00d1c1 100%);
                border: none;
                font-size: 14px;
                padding: 9px 18px;
                transition: 0.3s;
            }

            .btnExcel:hover{
                background-image: linear-gradient(to right, #00d1c1 0%, #3862f5 100%);
            }

            .alerticonwa{
                font-size: 72px;
                background: -webkit-linear-gradient(#2fbe6d, #a5c636);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .alerticonwa:hover{
                background: -webkit-linear-gradient(#a5c636, #2fbe6d);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .alerticonem{
                color: #00a2ff;
            }

            .alerticonem:hover{
                color: #28d0db;
            }

            .widget.box .widget-header-banner {
                background: #fff;
                border-top-right-radius: 6px;
                border-top-left-radius: 6px;
            }

            .widget-content-area-banner {
                position: relative;
                background-color: #fff;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
                -webkit-box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
                box-shadow: 0px 2px 4px
                rgba(126,142,177,0.12);
            }

            #html5-extension_info{
                display: none;
            }

            .table-responsive {
                overflow-y: hidden;
            }

            .cb-dropdown-wrap {
                max-height: 100px;
                position: relative;
                height: 19px;
            }

            .cb-dropdown,
            .cb-dropdown li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .cb-dropdown {
                position: absolute;
                z-index: 1;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: #fff;
                border-radius: 5px;
                padding: 5px 0 0 0;
            }

            .cb-dropdown-wrap:hover .cb-dropdown {
                height: 100px;
                overflow: auto;
                transition: 0.2s height ease-in-out;
            }

            .cb-dropdown li.active {
                background: #ff0;
            }

            .cb-dropdown li label {
                display: block;
                position: relative;
                cursor: pointer;
            }

            .cb-dropdown li label > input {
                position: absolute;
                right: 0;
                top: 0;
                width: 16px;
            }

            .cb-dropdown li label > span {
                display: block;
                margin-left: 3px;
                margin-right: 20px;
                /*font-family: sans-serif;*/
                font-size: 0.8em;
                /*font-weight: normal;*/
                text-align: left;
            }

            table.dataTable thead .sorting,
            table.dataTable thead .sorting_asc,
            table.dataTable thead .sorting_desc,
            table.dataTable thead .sorting_asc_disabled,
            table.dataTable thead .sorting_desc_disabled {
                background-position: 100% 10px;
            }

            .alerticonwaDisabled{
                font-size: 72px;
                background: -webkit-linear-gradient(#323232, #999999);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .clock-val{
                color: #e9ecef; 
            }
        </style>
    </head>
    <body class="default-sidebar">
        <header class="tabMobileView header navbar fixed-top d-lg-none">
            <div class="nav-toggle">
                    <a href="javascript:void(0);" class="nav-link sidebarCollapse" data-placement="bottom">
                        <i class="flaticon-menu-line-2"></i>
                    </a>
                <a href="javascript:void(0);" class=""> <img src="http://services.nikken.com.mx/img/icons/logo_nikken_white.png" class="img-fluid" alt="logo"></a>
            </div>
            <ul class="nav navbar-nav">
                <li class="nav-item d-lg-none"> 
                    
                </li>
            </ul>
        </header>
        <header class="header navbar fixed-top navbar-expand-sm" style="background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);">
            <a href="javascript:void(0);" class="sidebarCollapse d-none d-lg-block" data-placement="bottom">
                <i class="flaticon-menu-line-2"></i>
            </a>
        </header>
        <div class="main-container sidebar-closed sbar-open" id="container">
            <div class="overlay"></div>
            <div class="cs-overlay"></div>
            <div class="sidebar-wrapper sidebar-theme">
                <div id="dismiss" class="d-lg-none"><i class="flaticon-cancel-12"></i></div>
                <nav id="sidebar">
                    <ul class="navbar-nav theme-brand flex-row d-none d-lg-flex">
                        <li class="nav-item d-flex">
                            <a href="javascript:void(0)" class="navbar-brand">
                                <img src="http://services.nikken.com.mx/img/icons/logo_nikken_white.png" class="img-fluid" alt="logo">
                            </a>
                            <p class="border-underline"></p>
                        </li>
                        <li class="nav-item theme-text">
                            <a href="javascript:void(0)" class="nav-link"> NIKKEN </a>
                        </li>
                    </ul>
                    <ul class="list-unstyled menu-categories" id="accordionExample">
                        <li class="menu">
                            <a href="javascript:void(0)" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle">
                                <div class="">
                                    &nbsp;&nbsp;&nbsp;
                                    <span class="pe-7s-delete-user" style="font-size: 30px"></span>&nbsp;&nbsp;
                                    <span>Depuración</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="content" class="main-content">
                <br>
                <span class="clock-val" id="days"></span>
                <span class="clock-val" id="hours"></span>
                <span class="clock-val" id="minutes"></span>
                <span class="clock-val" id="seconds"></span>
                <div class="container">
                    <div class="row" id="cancel-row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 layout-spacing sinpromo">
                            <div class="statbox widget box box-shadow">
                                <div class="widget-header-banner">
                                    <div class="widget-content widget-content-area-banner">
                                        <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <a href="javascript:void(0)">
                                                        <img class="d-block w-100" src="{{ asset('fpro/img/depurados/bannerDepurados.png')}}" width="100%" alt="First slide">
                                                    </a>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 layout-spacing">
                            <div class="statbox widget box box-shadow">
                                <div class="widget-content widget-content-area">
                                    <div class="row">
                                        <div class="col-lg-4 ">
                                            <img class="ml-4 mb-3" src="{{ asset('fpro/img/depurados/depurados.png')}}" width="50%">
                                        </div>
                                        <div class="col-lg-4 ">
                                            <div class="form-group">
                                                <p>Tipo de genealogía: </p>
                                                <select id="typegen" class="custom-select form-control-rounded mb-4" onchange="getGenealogy(this.value)">
                                                    <option value="1" selected="">Grupo Personal</option>
                                                    <option value="2">Genealogía Completa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12">
                                            <input type="hidden" value='{{ $associateid }}' id="associateid">
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table id="html5-extension" class="table table-striped table-bordered table-hover" >
                                            <thead>
                                                <tr class="text-center" style="background-color: #fbb314">
                                                    <th><input type="checkbox" name="select_all" value="1" id="example-select-all"></th>
                                                    <th><p style="width: 150px">Nombre de asesor</p></th>
                                                    <th>Numero de asesor</th>
                                                    <th><p style="width: 150px">Tipo asesor</p></th>
                                                    <th><p style="width: 50px">Rango</p></th>
                                                    <th><p style="width: 150px">Patrocinador</p></th>
                                                    <th>Puntos Diciembre</th>
                                                    <th>Puntos Enero</th>
                                                    <th>Teléfono contacto</th>
                                                    <th class="text-center actionsh"><p style="width: 90px">Forma de emisión</p></th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <h5>
                                            <span class="flaticon-left-arrow-12"></span>
                                            Desliza para ver tu Genealogía
                                            <span class="flaticon-arrow-left"></span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer-section theme-footer">
            <div class="footer-section-1  sidebar-theme">
            </div>
            <div class="footer-section-2 container-fluid">
                <div class="row">
                    <div id="toggle-grid" class="col-xl-7 col-md-6 col-sm-6 col-12 text-sm-left text-center">
                        
                    </div>
                    <div class="col-xl-5 col-md-6 col-sm-6 col-12">
                        <ul class="list-inline mb-0 d-flex justify-content-sm-end justify-content-center mr-sm-3 ml-sm-0 mx-3">
                            <li class="list-inline-item  mr-3">
                                <p class="bottom-footer">&#xA9; 2019 <a href="javascript:void(0)">NIKKEN Latinoamérica</a></p>
                            </li>
                            <li class="list-inline-item align-self-center">
                                <div class="scrollTop"><i class="flaticon-up-arrow-fill-1"></i></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </body>
    <script src="{{asset('fpro/js/libs/jquery-3.1.1.min.js')}}"></script>
    <script src="{{asset('fpro/bootstrap/js/popper.min.js')}}"></script>
    <script src="{{asset('fpro/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('fpro/plugins/scrollbar/jquery.mCustomScrollbar.concat.min.js')}}"></script>
    <script src="{{asset('fpro/js/app.js')}}"></script>
    <script src="{{asset('fpro/js/custom.js')}}"></script>
    <script src="{{asset('fpro/plugins/table/datatable/datatables.js')}}"></script>
    <script src="{{asset('fpro/plugins/table/datatable/button-ext/dataTables.buttons.min.js')}}"></script>
    <script src="{{asset('fpro/plugins/table/datatable/button-ext/jszip.min.js')}}"></script>    
    <script src="{{asset('fpro/plugins/table/datatable/button-ext/buttons.html5.min.js')}}"></script>
    <script src="{{asset('fpro/plugins/table/datatable/button-ext/buttons.print.min.js')}}"></script>
    <script src="{{asset('fpro/mainjs/depurados/depurados.js')}}"></script>
    <script src="{{asset('fpro/plugins/sweetalerts/sweetalert2.min.js')}}"></script>
    <script src="https://cdn.datatables.net/scroller/2.0.1/js/dataTables.scroller.min.js"></script>
    <script src="{{asset('fpro/plugins/blockui/jquery.blockUI.min.js')}}"></script>
    <script src="{{asset('fpro/plugins/blockui/custom-blockui.js')}}"></script>
</html>