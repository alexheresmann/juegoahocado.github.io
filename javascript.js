//var  matrizCodigo=[['enter'],['imes'],['ai'],['ober'],['fat']];

let  Palabras=['HTML','JAVA','ALURA','CSS','GIT', 'JAVASCRIPT', 'CANVAS'];
let tablero = document.getElementById("myCanvas").getContext("2d");
let PalabraSecreta = "";
let letras = [];
let errores = 8;
let bloquear = 0;

  function escojerPalabrasecreta(){
    let palabraARR = Palabras[Math.floor(Math.random() * Palabras.length)];
    PalabraSecreta = palabraARR;
  }
  function comprobarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
      letras.push(key)      
    }else{
      estado = true
    }
    console.log(key)
    return estado
  }
  function agregar_palabra(){
      var element = document.getElementById('divBotoneraInicial');
      element.classList.add("d-none");
      var element2 = document.getElementById('divNuevaPalabra');
      element2.classList.remove("d-none");

      document.getElementById('in_palabra').value = '';        
      document.getElementById("in_palabra").focus();      

  }

  function Cancelar(){

            var element = document.getElementById('divBotoneraInicial');
            element.classList.remove("d-none");            
            var element2 = document.getElementById('divNuevaPalabra');
            element2.classList.add("d-none");

            var element3 = document.getElementById('divAhorcado');
            element3.classList.add("d-none");

  }
  function Guardar(){
            var element = document.getElementById('divBotoneraInicial');
            element.classList.add("d-none");            
            var element2 = document.getElementById('divNuevaPalabra');
            element2.classList.add("d-none");

            var element3 = document.getElementById('divAhorcado');
            element3.classList.remove("d-none");
  }   
  
  function agregarLetraIncorrecta(){
    errores = errores -1;
    console.log(errores);
  }
  
  function Empezar(tipo){
        bloquear = 0;
         errores = 8;
          var element = document.getElementById('divBotoneraInicial');
          element.classList.add("d-none");
          var element2 = document.getElementById('divNuevaPalabra');
          element2.classList.add("d-none");
          var element3 = document.getElementById('divAhorcado');
          element3.classList.remove("d-none");

          var nombre = document.querySelector("#txtAhorcado");
           nombre.focus();

          if(tipo == 1){
            PalabraSecreta = document.getElementById('in_palabra').value;
          }else{
            escojerPalabrasecreta();
          }          
          dibujarCanvas();
          dibujarLinea();
        

            document.onkeydown = (e) => {
              let letra = e.key.toLocaleUpperCase()        
              if(  comprobarLetra(letra) && PalabraSecreta.includes(letra)){
                for(let i= 0; i< PalabraSecreta.length;i++){
                  if(PalabraSecreta[i] === letra){

                    if(bloquear == 0){
                    escribriLetraCorrecta(i)
                    }

                  }
                }
              }else{
                if(bloquear == 0){
                agregarLetraIncorrecta(letra)
                escribriLetraIncorrecta(letra,errores)
                dibujarHorca(errores)
                }
              }
              document.getElementById('txtAhorcado').value = '';              
            } 
  }
  function dibujarCanvas(){
          tablero.lineWidth = 8;
          tablero.lineCap = "round";
          tablero.lineJoin = "round";
          tablero.fillStyle = "#F3F5F6";
          tablero.strokeStyle = "#8A3871";
          tablero.fillRect(0,0,900,630);
          tablero.beginPath();
          tablero.stroke();
          tablero.closePath(); 
  }
  function dibujarLinea(){
        tablero.lineWidth = 4;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#8A3871";
        let anchura = 660/PalabraSecreta.length;
        for(let i =0; i< PalabraSecreta.length; i++){
          tablero.moveTo(50 + (anchura*i), 320)
          tablero.lineTo(100 + (anchura*i), 320)
        }
        tablero.stroke();
        tablero.closePath();
  }
  function escribriLetraCorrecta(index){
    tablero.font = "bold 63px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000";
    tablero.strokeStyle = "#000";
    let anchura = 660/PalabraSecreta.length;
     tablero.fillText(PalabraSecreta[index], 50 + (anchura*index),320);
     tablero.stroke();
  }
  function escribriLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000";
    tablero.strokeStyle = "#000";

    tablero.fillText(letra,50 + (20 * (10 - errorsLeft)),360,20) 
    tablero.stroke();
    /*
    let anchura = 350/PalabraSecreta.length;
     tablero.fillText(PalabraSecreta[index], 105 + (anchura*index),305);
     tablero.stroke();
    */
  }
  function dibujarCanvas2(){
            /*cabeza*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(190, 80, 30, 0, 2 * Math.PI);
            ctx.stroke();
            /*cabeza*/

             /*brazo 1*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(190, 110);
            ctx.lineTo(150, 150);
            ctx.stroke();
            /*brazo 1*/ 

            /*brazo 2*/ 
             var c = document.getElementById("myCanvas");
             var ctx = c.getContext("2d");
             ctx.moveTo(190, 110);
             ctx.lineTo(230, 150);
             ctx.stroke();
             /*brazo 2*/ 

            /*tronco */ 
              var c = document.getElementById("myCanvas");
              var ctx = c.getContext("2d");
              ctx.moveTo(190, 110);
              ctx.lineTo(190, 160);
              ctx.stroke();
             /*tronco */ 

            /*pierna 1*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(150, 200);
            ctx.lineTo(190, 160);
            ctx.stroke();
           /*pierna 1*/  

            /*pierna 2*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(230, 200);
            ctx.lineTo(190, 160);
            ctx.stroke();
           /*pierna 2*/   

            /*cuerda*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(190, 48);
            ctx.lineTo(190, 15);
            ctx.stroke();
           /*Cuerda*/   

            /*BASE*/ 
            ctx.moveTo(10, 240);
            ctx.lineTo(10, 10);
            ctx.stroke();

            ctx.moveTo(20, 240);
            ctx.lineTo(20, 10);
            ctx.stroke();

            ctx.moveTo(10, 10);
            ctx.lineTo(240, 10);
            ctx.stroke();

            ctx.moveTo(240, 20);
            ctx.lineTo(20, 20);
            ctx.stroke();

            ctx.moveTo(80, 20);
            ctx.lineTo(20, 80);
            ctx.stroke();

            ctx.moveTo(70, 20);
            ctx.lineTo(20, 70);
            ctx.stroke();

            ctx.moveTo(20, 200);
            ctx.lineTo(60, 200);
            ctx.stroke();    
            
            ctx.moveTo(60, 200);
            ctx.lineTo(60, 240);
            ctx.stroke();  
           /*BASE*/ 
  }  


  function mensajePerdiaste(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";          
    ctx.fill();         
    alert('Juego terminado');
    bloquear = 1;
    

  }

  function dibujarHorca(errores){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    switch(errores) {
      case 7:   
       /*BASE*/ 
       ctx.moveTo(10, 240);
       ctx.lineTo(10, 10);
       ctx.stroke();          
       ctx.moveTo(20, 240);
       ctx.lineTo(20, 10);
       ctx.stroke();          
       ctx.moveTo(10, 10);
       ctx.lineTo(240, 10);
       ctx.stroke();          
       ctx.moveTo(240, 20);
       ctx.lineTo(20, 20);
       ctx.stroke();          
       ctx.moveTo(80, 20);
       ctx.lineTo(20, 80);
       ctx.stroke();          
       ctx.moveTo(70, 20);
       ctx.lineTo(20, 70);
       ctx.stroke();          
       ctx.moveTo(20, 200);
       ctx.lineTo(60, 200);
       ctx.stroke();                       
       ctx.moveTo(60, 200);
       ctx.lineTo(60, 240);
       ctx.stroke();  
       /*BASE*/
        break;
      case 6: 
            /*cuerda*/ 
            ctx.moveTo(190, 48);
            ctx.lineTo(190, 15);
            ctx.stroke();
           /*Cuerda*/  
        break;
      case 5:
            /*cabeza*/ 
            ctx.beginPath();
            ctx.arc(190, 80, 30, 0, 2 * Math.PI);
            ctx.stroke();
            /*cabeza*/
        break;
      case 4:
             /*tronco */                   
             ctx.moveTo(190, 110);
             ctx.lineTo(190, 160);
             ctx.stroke();
             /*tronco */ 

        break;  
      case 3:
             /*brazo 1*/ 
             ctx.moveTo(190, 110);
             ctx.lineTo(150, 150);
             ctx.stroke();
             /*brazo 1*/ 
         break;
      case 2:
            /*brazo 2*/ 
            ctx.moveTo(190, 110);
            ctx.lineTo(230, 150);
            ctx.stroke();
            /*brazo 2*/ 
         break;
      case 1:
            /*pierna 1*/ 
            ctx.moveTo(150, 200);
            ctx.lineTo(190, 160);
            ctx.stroke();
           /*pierna 1*/ 
         break;  
       case 0:
            /*pierna 2*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(230, 200);
            ctx.lineTo(190, 160);
            ctx.stroke();
           /*pierna 2*/ 
           //bloquear = 1;
           mensajePerdiaste();

          break;  
    }
  }


