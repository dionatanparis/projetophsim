function endereco_prev() {
    var end = $("#endereco_edicao").val();
    if(end>0){
        end=parseInt(end)-1;
        $("#endereco_edicao").val(end);        
        carregar_valores_modal(end);
    } 
}

function endereco_next() {
    var end = $("#endereco_edicao").val();
    if(end<255){
       end=parseInt(end)+1;
       $("#endereco_edicao").val(end);        
       carregar_valores_modal(end); 
    }
}

function carregar_valores_modal(endereco){
     console.log('entrou na fn carregar_valores_modal');
     try {
        console.log('entrou try carregar_valores_modal');
        cel = $("#editando_"+endereco+" td")[3];    
        var valor = cel.innerText;
        cel = $("#editando_"+endereco+" td")[1];
        var bin = cel.innerText; 
       
        $("#endereco_edicao").val(endereco);
        $("#valor_dec").val(valor);
        $("#valor_bin").val(bin);
        $("#valor_hexa").val(ConvertBase.dec2hex(valor));
        setaBin(bin);
        console.log('carregou valores');
         
     } catch (error) { 
       console.log("entrou no catch valor endereco: "+endereco);
       document.getElementById("lista").innerHTML +=''+
        '<tr id="'+'editando_'+endereco+'" onclick="editarTabela('+endereco+');">'+
        '    <td class="end">'+endereco+'</td>'+
        '    <td class="bin">00000000</td>'+
        '    <td class="hex" >00</td>'+
        '    <td class="dec">000</td>'+          
        '</tr>';
     }
     
 
              
    
}