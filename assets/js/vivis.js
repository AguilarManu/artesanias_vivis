$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip()
	

	/*OBTENER RUTA ACTUAL*/
	var ruta = '';
	var modulo = $('body input[name=modulo]').val();
	(modulo != 'inicio') ? (ruta = '../') : (ruta = '');

	/*CAMBIAR EL BACKGROUND DEPENDIENDO DE CADA MÓDULO*/
	if (modulo == 'about')
		$("#home").css("background", "url('../assets/images/msj/2019-07-24-9_26_56.jpeg') no-repeat center center");
	if (modulo == 'products')
		$("#home").css("background", "url('../assets/images/msj/2019-07-24-9_27_26.jpeg') no-repeat center center");
	$('#home').css('background-size', 'cover');
	$('#home').css('display','flex');

	/*CARGAR HEADER*/
	$(".menu_content").load(ruta+"assets/layauts/header.html", function(response, status, http){
		(status == "success")?(console.log('Menu loaded')):(
			(status == "error")?(console.error("Error: " + http.status + ": " + http.statusText)):(''));
	});

	/*CARGAR FOOTER*/
	$(".footer_content").load(ruta+"assets/layauts/footer.html", function(response, status, http){ 
		(status == "success")?(console.log('Footer loaded')):(
			(status == "error")?(console.error("Error: " + http.status + ": " + http.statusText)):(''));
	});

	/*RUTAS DINÁMICAS EN EL ENCABEZADO*/
	$('body').on('click', '.menu', function(event) {
		event.preventDefault();
		if ($(this).attr('id') == 'm_home_logo')
			location.href=ruta+'index.html';
		if ($(this).attr('id') == 'm_home')
			location.href=ruta+'index.html';
		if ($(this).attr('id') == 'm_about')
			location.href=ruta+'about/';
		if ($(this).attr('id') == 'm_products')
			location.href=ruta+'products/';
		if ($(this).attr('id') == 'm_contact')
			location.href=ruta+'contact/';
	});

	/*MOSTRAR LOGO DINÁMICAMENTE DE LA RUTA*/
	var showLogo = setTimeout(() => {
		$('#m_home_logo').html('<img class="img-responsive img-logo" style="max-width:100px; '+
								'margin-top: -7px;" src="'+ruta+'assets/images/vivis/artesanias2.png">');
    }, 350);
});