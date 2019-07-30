$(document).ready(function() {
	/*OBTENER RUTA ACTUAL*/
	var ruta = '';
	($('body input[name=modulo]').val() != 'inicio')?(ruta = '../'):(ruta = '');
	
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
	
});