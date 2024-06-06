function Validar() {
    var Nombre = nombre();
    var contra = Contraseña();
    var contra2 = confirmar_Contraseña();
    var correo = ValidarCorreo();
    var direccion = ValidarDireccion();
    var comuna = ValidarComuna();
    var comuna = ValidarPaginaWeb();
    var telefono = ValidarTelefono();
    var hobby = ValidarPasaTiempos();


    return (
        Nombre &&
        contra &&
        contra2 &&
        correo &&
        direccion &&
        comuna &&	
        telefono &&
        hobby
    );
    
}

function nombre() {
	var nombre = document.getElementById("nombre");
	var div_Nombre_error = document.getElementById("errorNombre");
	var nombre_solo_valor = nombre.value;
	if (nombre_solo_valor == "") {
		div_Nombre_error.innerHTML = "El nombre es obligatorio";
		div_Nombre_error.className = "form-text text-danger";
		return false;
	} else if (nombre_solo_valor.length > 20) {
		div_Nombre_error.innerHTML = "El nombre no puede tener mas de 20 caracteres";
		div_Nombre_error.className = "form-text text-danger";
		return false;
	} else {
		div_Nombre_error.innerHTML = "El nombre es válido";
		div_Nombre_error.className = "form-text text-success";
		return true;
	}
}

function Contraseña() {
    var contraseña = document.getElementById("contraseña");
    var contraseña_solo_valor = contraseña.value;
    var div_error_contraseña = document.getElementById("errorContraseña");
    var tiene_letras = false;
    var tiene_numero = false;

    for (var i = 0; i < contraseña_solo_valor.length; i++) {
        console.log("pass [i]", contraseña_solo_valor[i]);
        if (parseInt(contraseña_solo_valor[i])) {
            tiene_numero = true;
        } else if (typeof contraseña_solo_valor[i] === "string") {
            tiene_letras = true;
        }
    }

    if (contraseña_solo_valor == "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatoria";
        div_error_contraseña.className = "form-text text-danger";
        return false;
    } else if (contraseña_solo_valor.length < 3 || contraseña_solo_valor.length > 6) {
        div_error_contraseña.innerHTML = "La contraseña debe tener al menos 3 caracteres y menor que 6 caracteres digitos";
        div_error_contraseña.className = "form-text text-danger";
        return false;
    } else if (tiene_letras == false) {
        div_error_contraseña.innerHTML = "La contraseña necesita una letra minimo";
        div_error_contraseña.className = "form-text text-danger";
        return false;
    } else if (tiene_numero == false) {
        div_error_contraseña.innerHTML = "La contraseña necesita un numero minimo";
        div_error_contraseña.className = "form-text text-danger";
        return false;
    } else {
        div_error_contraseña.innerHTML = "La contraseña es válida";
        div_error_contraseña.className = "form-text text-success";
        return true;
    }
}

function confirmar_Contraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var contraseña_solo_valor = contraseña.value;
    var confirmar_Contraseña = document.getElementById("confirmarContraseña");
    var confirmar_contraseña_solo_valor = confirmar_Contraseña.value;
    var div_error_Confirmar_Contraseñaseña = document.getElementById("errorConfirmarContraseña");


    if (confirmar_contraseña_solo_valor == "") {
        div_error_Confirmar_Contraseñaseña.innerHTML = "La confirmacion de contraseña es obligatoria";
        div_error_Confirmar_Contraseñaseña.className = "form-text text-danger";
        return false;
    } else if (confirmar_contraseña_solo_valor != contraseña_solo_valor) {
        div_error_Confirmar_Contraseñaseña.innerHTML = "la contraseña no coincide";
        div_error_Confirmar_Contraseñaseña.className = "form-text text-danger";
        return false;
    } else {
        div_error_Confirmar_Contraseñaseña.innerHTML = "La contraseñas coinciden";
        div_error_Confirmar_Contraseñaseña.className = "form-text text-success";
        return true;
    }
}

function ValidarCorreo() {
    var correo = document.getElementById("correo");
    var correo_solo_valor = correo.value;
    var div_error_correo = document.getElementById("errorCorreo");
    var arroba = correo_solo_valor.indexOf("@");
    var punto = correo_solo_valor.lastIndexOf(".");
    var puntoCorreo = correo_solo_valor.split(".");
    var extension = puntoCorreo[puntoCorreo.length - 1];


    if (
        arroba > 0 &&
        punto > arroba &&
        extension.length > 1 &&
        extension.length <= 3
    ) {
        div_error_correo.innerHTML = "El correo electrónico es válido";
        div_error_correo.className = "form-text text-success";
        return true;
    } else {
        div_error_correo.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_correo.className = "form-text text-danger";
        return false;
    }
}

function ValidarDireccion() {
    var direccion = document.getElementById("direccion");
    var direccion_solo_valor = direccion.value;
    var div_error_direccion = document.getElementById("errorDireccion");

    if (direccion_solo_valor == "") {
        div_error_direccion.innerHTML = "La Dirección es obligatorio";
        div_error_direccion.className = "form-text text-danger";
        return false;
    } else {
        div_error_direccion.innerHTML = "La Dirección es válida";
        div_error_direccion.className = "form-text text-success";
        return true;
    }
}

function ValidarComuna() {
    var comuna = document.getElementById("comuna");
    var comuna_solo_valor = comuna.value;
    var div_error_comuna = document.getElementById("errorComuna");

    if (comuna_solo_valor == "") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "form-text text-danger";
        return true;
    } else {
        div_error_comuna.innerHTML = "La comuna fue seleccionada";
        div_error_comuna.className = "form-text text-success";
        return true;
    }
}

function ValidarPaginaWeb() {
    var paginaWeb = document.getElementById("paginaWeb");
    var div_error_PaginaWeb = document.getElementById("errorPaginaWeb");
    var PaginaWeb_solo_valor = paginaWeb.value;
    var inicio = false
    var final = false

    if(PaginaWeb_solo_valor.slice(0, 7) === "http://" ){
        inicio = true
    }
    else if(PaginaWeb_solo_valor.slice(0, 7) === "https://" ){
        inicio = true
    }
    else if(PaginaWeb_solo_valor.slice(0, 4) === "www."){
        inicio = true
    }

    if(PaginaWeb_solo_valor.slice(-4) === ".com"){
        final = true
    }
    else if(PaginaWeb_solo_valor.slice(-3) === ".cl"){
        final = true
    }
    


    if (PaginaWeb_solo_valor == "") {
        div_error_PaginaWeb.innerHTML = "La URL es obligatoria";
        div_error_PaginaWeb.className = "form-text text-danger";
        return false;

    } else if (inicio == false ) {
        div_error_PaginaWeb.innerHTML = "Porfavor siga los ejemplos";
        div_error_PaginaWeb.className = "form-text text-danger";
        return false;

    } else if (final == false){
        div_error_PaginaWeb.innerHTML = "La URL no tiene un dominio aceptable";
        div_error_PaginaWeb.className = "form-text text-danger";
        return false;

    } else {
        div_error_PaginaWeb.innerHTML = "La URL es válida";
        div_error_PaginaWeb.className = "form-text text-success";
        return true;
    }

}

function ValidarTelefono() {
    var telefono = document.getElementById("telefono");
    var div_error_Telefono = document.getElementById("errorTelefono");
    var telefono_solo_valor = telefono.value;

    var valorNumero = telefono_solo_valor.slice(1);

    if (telefono_solo_valor == "") {
        div_error_Telefono.innerHTML = "El teléfono es obligatorio";
        div_error_Telefono.className = "form-text text-danger";
        return false;

    } else if (telefono_solo_valor.length > 15) {
        div_error_Telefono.innerHTML = "El teléfono no puede tener mas de 15 caracteres";
        div_error_Telefono.className = "form-text text-danger";

        return false;
    } else if (telefono_solo_valor[0] !== "+") {
        div_error_Telefono.innerHTML = "Es necesario agregar el +";
        div_error_Telefono.className = "form-text text-danger";

        return false;
    } else if (!isNaN(valorNumero)) {
        div_error_Telefono.innerHTML = "El teléfono es válido";
        div_error_Telefono.className = "form-text text-success"
        return true;

    } else {
        div_error_Telefono.innerHTML = "El teléfono no debe tener letras ni espacios";
        div_error_Telefono.className = "form-text text-danger";
        return true;

    }
}

let pasatiemposArray = [];

document.getElementById('agregarPasatiempo').addEventListener('click', function() {

    const pasatiempo = document.getElementById('pasatiempos').value.trim();
    
    if (pasatiempo !== "") {
        pasatiemposArray.push(pasatiempo);
        document.getElementById('pasatiempos').value = "";
            document.getElementById('listaPasatiempos').innerHTML = "";
            pasatiemposArray.forEach(function(pasatiempo) {
                const nuevoElemento = document.createElement('li');
                nuevoElemento.className = 'list-group-item';
                nuevoElemento.textContent = pasatiempo;
                document.getElementById('listaPasatiempos').appendChild(nuevoElemento);
            });
    } 
            

    
    
});
function ValidarPasaTiempos() {
    var div_error_Pasa_tiempos = document.getElementById("errorpasatiempo");
if (pasatiemposArray.length >= 2) {
    div_error_Pasa_tiempos.innerHTML = "";
    div_error_Pasa_tiempos.innerHTML = "El correo electrónico es válido";
    div_error_Pasa_tiempos.className = "form-text text-success";
    return true;
}
    else {
        div_error_Pasa_tiempos.innerHTML = "Debe ingresar minimo 2 pasa tiempos";
        div_error_Pasa_tiempos.className = "form-text text-danger";
        return false
    }
}



