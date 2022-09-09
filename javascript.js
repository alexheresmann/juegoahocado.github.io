var  matrizCodigo=[['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','fat']];
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
            console.log('aca');
           // navigator.clipboard.writeText(document.getElementById('textEncriptado').value);
            /*var copyText = document.getElementById("textEncriptado");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
            alert("copieado");*/

            var copyText = document.getElementById("textEncriptado");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
            
            var tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copied: " + copyText.value;
        }