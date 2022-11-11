    const TICKET= 200;
    const ESTUDIANTE= 0.8;
    const TRAINEE= 0.5;
    const JUNIOR= 0.15;
    

    const formulario = document.querySelector('#formulario')
    const nombre= document.querySelector('#nombre'); 
    const apellido= document.getElementById('apellido'); 
    const email= document.querySelector('#mail');
    const cantidad= document.querySelector('#cantidadTickets');
    const categoria=document.querySelector('#categoriaSelect');
  

    let btnBorrar= document.getElementById('btnBorrar');
    const btnResumen= document.getElementById('btnResumen');

    let totalPago= document.getElementById('totalPago');

    //metodos y eventos
    btnBorrar.addEventListener('click', borrarRegistros);
    btnResumen.addEventListener('click', calcularTotal);

    // funciones //

    function borrarRegistros(){
        formulario.reset();
        
    };


    function calcularTotal(){
        if(cantidad.value != '' & categoria.value != ''){
            totalPago.textContent = ('Usted comprará a nombre de')+ (' ') + (nombre.value)+ (' ') +(apellido.value)+ (' ') +('un total a pagar de ')+(' ')+('$')+((TICKET - calcularDescuento()) * cantidad.value) + ('')+('valido por una cantidad de:' + cantidad.value + 'de entrada/s') + ('')+ (' y se le enviara un email a:') + ('') + (email.value);
            

        }else{
            totalPago.textContent =  'completar campos';
       }
   };
    


    function calcularDescuento(){
      switch(categoria.value){
        case '0':
        return 0 * TICKET;
        break;
        case'1':
        return ESTUDIANTE * TICKET;
        break;
        case '2': 
        return TRAINEE * TICKET;
        break;
        case '3':
        return JUNIOR * TICKET;
        break;
      }
    }

