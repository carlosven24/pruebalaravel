//Developer Carlos Cardenas
//30/04/2022

//validate form placeholder
    const forms =  document.querySelectorAll('.formTanzu');


    

    forms.forEach(element => {
        element.addEventListener("keyup", event => {
            const spanNombreForm = document.getElementById(`span_${element.id}`);
            if (event.target.value.length > 0) {
                spanNombreForm.style.display = 'none';
            } else {
                spanNombreForm.style.display = 'block';
            }
        });// end add eventListerner
    })// end foreach




    const numeros = "0123456789";

    function tiene_numeros(texto) {
        for (i = 0; i < texto.length; i++) {
            if (numeros.indexOf(texto.charAt(i), 0) != -1) {

                return 1;
            }
        }
        return 0;
    }

    function validarCorreo(texto) {
        return texto.indexOf("@") != -1;
    }


    function errorForm(form) {
        let response = true;


        const validarNumeros = {
            camposValidar: ["name", "lastname", "cargo"],
            camposId: ["nombreForm", "apellidoForm", "cargoForm"],
            nombreCampos: ["Nombre", "Apellido", "Cargo"]
        };

        const soloNumeros = {
            camposValidar: ["phone"],
            camposId: ["telefonoForm"],
            nombreCampos: ["Teléfono"]
        }

        const soloCorreo = {
            camposValidar: ["email"],
            camposId: ["emailForm"],
            nombreCampos: ["Correo"]
        }

        //validar campos con numeros
        validarNumeros.camposValidar.forEach((element, index) => {
            if (tiene_numeros(form[element])) {
                document.getElementById(`error_${validarNumeros.camposId[index]}`).innerHTML = `${validarNumeros.nombreCampos[index]} no válido (No puede contener números)`;
                const elemento = document.getElementById(validarNumeros.camposId[index]);
                elemento.className += " error";
                response = false;
            } else {
                document.getElementById(`error_${validarNumeros.camposId[index]}`).innerHTML = "";
                const elemento = document.getElementById(validarNumeros.camposId[index]);
                elemento.className = "form-control formTanzu";
            }
        });


        //validar campos solo numeros
        soloNumeros.camposValidar.forEach((element, index) => {
            if (!tiene_numeros(form[element])) {
                document.getElementById(`error_${soloNumeros.camposId[index]}`).innerHTML = `${soloNumeros.nombreCampos[index]} no válido (Solo números)`;
                const elemento = document.getElementById(soloNumeros.camposId[index]);
                elemento.className += " error";
                response = false;
            } else {
                document.getElementById(`error_${soloNumeros.camposId[index]}`).innerHTML = " ";
                const elemento = document.getElementById(soloNumeros.camposId[index]);
                elemento.className = "form-control formTanzu";
            }
        });


        //validar campos solo correo
        soloCorreo.camposValidar.forEach((element, index) => {
            if (!validarCorreo(form[element])) {
                document.getElementById(`error_${soloCorreo.camposId[index]}`).innerHTML = `${soloCorreo.nombreCampos[index]} no válido`;
                const elemento = document.getElementById(soloCorreo.camposId[index]);
                elemento.className += " error";
                response = false;
            } else {
                document.getElementById(`error_${soloCorreo.camposId[index]}`).innerHTML = "";
                const elemento = document.getElementById(soloCorreo.camposId[index]);
                elemento.className = "form-control formTanzu";
            }
        });


        //validar checkbox
        var isChecked = document.getElementById('checkbox').checked;
        if (!isChecked) {
            document.getElementById('error_terminos').innerHTML = "Debe aceptar los términos y condiciones";
            response = false;
        }else{
            document.getElementById('error_terminos').innerHTML = "";
        }

        return response;
    }




    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("formAction").addEventListener('submit', validarFormulario);

        setTimeout(function(){ 
        forms.forEach(element => {
            const spanNombreForm = document.getElementById(`span_${element.id}`);
            if (element.value.length > 0) {
                spanNombreForm.style.display = 'none';
            } else {
                spanNombreForm.style.display = 'block';
            }      
        });
        }, 2000);
    });


    function validarFormulario(evento) {
        evento.preventDefault();

        var form = {
            name: document.getElementById("nombreForm").value,
            lastname: document.getElementById("apellidoForm").value,
            cargo: document.getElementById("cargoForm").value,
            company: document.getElementById("companiaForm").value,
            email: document.getElementById("emailForm").value,
            phone: document.getElementById("telefonoForm").value
        }

        var response = grecaptcha.getResponse();

        if (response.length == 0){
            document.getElementById('error_recaptcha').innerHTML = "Debe completar el captcha";
            return;
        }else{
            document.getElementById('error_recaptcha').innerHTML = "";
        }
        
        if (!errorForm(form)) return;



        this.submit();
    }