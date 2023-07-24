1.  /** que es un string */


/**
 * 
 * @param {string} nombre 
 * @return{boolean} boolean true  or false
 */
function validarNombre(nombre1){

    const nombre = nombre1.trim();  // quitar espacios que sobran en la string por delante y por detrás
    //console.log("sin limpiar: nombre," y limpio: ", name)
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;  // Patrón a usar para localizar nombre propios.
    //if(!pattern.test(input.value)){

    console.log(" Sin Limpiar: ", nombre, " y limpio: ", nombre)
    if ( typeof nombre !== 'string' || nombre === ""  || !pattern.test(nombre)){ // Que no sea string, que no esté vacía y que no cumple el patrón

        console.log("No es un nombre")
        return false

    }  else {
        return true

    }

} 

console.log(validarNombre("  P8pe  "))
console.log(validarNombre("      "))
console.log(validarNombre(" J4stin "))


// 2 <!--validar email-->

   /** que el @ este en medio de email que termine en punto y lo que añadamos (lista) de algo */

   function validaremail(email){
    const correo = email.trim(); // Quitar espacios que sobran de string por delante y por detrás
    const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //if(!pattern.test(input.value)){



    console.log(" Sin Limpiar: ", nombre, " y limpio: ", nombre)
    if ( typeof nombre !== 'string' || nombre === ""  || !pattern.test(nombre)){ 




    }


    console.log(validaremail(EMAIL))
    console.log(validaremail(EMAIL))
    console.log(validaremail(EMAIL))


}



function validarfecha(fecha){
    const fecha = fecha.trim();
    const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/



}

 console.log ()
 if ( typeof=fecha !== String || fecha === "" || !pattern.date(fecha)){


 }






    3<!--URL-->



    4 <!--validar fecha/hora de nacimiento-->

/**


    5 <!--validar tiempo-->






    6 <!--validar mes-->






    7 <!--validar semana-->






    8 <!--validar número-->






    9 <!--validar teléfono-->







    10 <!--validar término de búsqueda-->







    11 <!--validar color favorito-->







    12<!--Búsqueda-->






    13<!--Min/max-->




</ul>








