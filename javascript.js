//var  matrizCodigo=[['enter'],['imes'],['ai'],['ober'],['fat']];
var  matrizCodigo=['enter','imes','ai','ober','fat'];

/*
        function encriptar(){
            let stringEncriptado = document.getElementById('textParaEncriptar').value;           
             stringEncriptado = stringEncriptado.toLowerCase();
             for(let i = 0; i < matrizCodigo.length; i++){
                if(stringEncriptado.includes(matrizCodigo[i][0])){
                    stringEncriptado = stringEncriptado.replaceAll(matrizCodigo [i][0],matrizCodigo[i][1]);
                }
             }      
             document.getElementById('textEncriptado').value =   stringEncriptado;
            }
        function desencriptar(){
            let stringDesEncriptado = document.getElementById('textParaEncriptar').value;           
            stringDesEncriptado = stringDesEncriptado.toLowerCase();
            for(let i = 0; i < matrizCodigo.length; i++){
                if(stringDesEncriptado.includes(matrizCodigo[i][1])){
                    stringDesEncriptado = stringDesEncriptado.replaceAll(matrizCodigo [i][1],matrizCodigo[i][0])
                }
            }          
            document.getElementById('textEncriptado').value =   stringDesEncriptado;      
        }
        function copiar(){
            var copyText = document.getElementById("textEncriptado");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);            
            var tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copied: " + copyText.value;
        }
        */
        function agregar_palabra(){
            var element = document.getElementById('divBotoneraInicial');
            element.classList.add("d-none");
            var element2 = document.getElementById('divNuevaPalabra');
            element2.classList.remove("d-none");
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
        function Empezar(){

            /*circulo*/ 
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(190, 80, 30, 0, 2 * Math.PI);
            ctx.stroke();
            /*circulo*/

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
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(10, 240);
            ctx.lineTo(10, 10);
            ctx.stroke();
        //    var c = document.getElementById("myCanvas");
         //   var ctx = c.getContext("2d");
            ctx.moveTo(20, 240);
            ctx.lineTo(20, 10);
            ctx.stroke();
          //  var c = document.getElementById("myCanvas");
         //   var ctx = c.getContext("2d");
            ctx.moveTo(10, 10);
            ctx.lineTo(240, 10);
            ctx.stroke();
          //  var c = document.getElementById("myCanvas");
          //  var ctx = c.getContext("2d");
            ctx.moveTo(240, 20);
            ctx.lineTo(20, 20);
            ctx.stroke();
          //  var c = document.getElementById("myCanvas");
          //  var ctx = c.getContext("2d");
            ctx.moveTo(80, 20);
            ctx.lineTo(20, 80);
            ctx.stroke();
          //  var c = document.getElementById("myCanvas");
           // var ctx = c.getContext("2d");
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








            var element = document.getElementById('divBotoneraInicial');
            element.classList.add("d-none");      

            var element2 = document.getElementById('divNuevaPalabra');
            element2.classList.add("d-none");

            var element3 = document.getElementById('divAhorcado');
            element3.classList.remove("d-none");

        }
