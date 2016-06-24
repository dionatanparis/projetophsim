function endereco_prev() {
    var end = $("#endereco_edicao").val();
    Salvar_valores();
    if (end > 0) {
        end = parseInt(end) - 1;
        $("#endereco_edicao").val(end);
        carregar_valores_modal(end);
    }
}

function endereco_next() {
    var end = $("#endereco_edicao").val();
    Salvar_valores();
    if (end < 255) {
        end = parseInt(end) + 1;
        $("#endereco_edicao").val(end);
        carregar_valores_modal(end);
    }
}

function carregar_valores_modal(endereco) {
    console.log('entrou na fn carregar_valores_modal');
    try {
        cel = $("#editando_" + endereco + " td")[3];
        var valor = cel.innerText;
        cel = $("#editando_" + endereco + " td")[1];
        var bin = cel.innerText;

        $("#endereco_edicao").val(endereco);
        $("#valor_dec").val(valor);
        $("#valor_bin").val(bin);
        $("#valor_hexa").val(ConvertBase.dec2hex(valor));
        setaBin(bin);
 

    } catch (error) {
 
        document.getElementById("lista").innerHTML += '' +
            '<tr id="' + 'editando_' + endereco + '" onclick="editarTabela(' + endereco + ');">' +
            '    <td class="end">' + endereco + '</td>' +
            '    <td class="bin">00000000</td>' +
            '    <td class="hex" >00</td>' +
            '    <td class="dec">000</td>' +
            '</tr>';
    }
}

function Salvar_valores() {
    var valor = binario();
    var bin = ConvertBase.dec2bin(valor);
    var hexa = ConvertBase.dec2hex(valor);
    // var vlr = '#editando_'+endereco;    
    endereco = $("#endereco_edicao").val();
    end_insert = parseInt(endereco) + 1;
    var tlinha = $("#editando_" + endereco + " td");
    col = tlinha[1];
    col.innerHTML = bin;
    col = tlinha[2];
    col.innerHTML = hexa;
    col = tlinha[3];
    col.innerHTML = valor;
    
    mem_ram.push({end:endereco, val:hexa, str:1 });
}

function simulacao() {
    // LCA linhas de controle ativas.

    var LCA = new Array();
    var operacao = new Array();
    
    var simulacao = [{ "rtl": "REM <- PC", "lca": ["tag_remw", "tag_pcr"], "op": atualiza_rem },
        { "rtl": "RDM <- MEM[REM]", "lca": ["tag_memr"], "op": atualiza_rdm },
        { "rtl": "PC <- PC + 1", "lca": ["tag_pcplus"], "op": incrementa_pc },
        { "rtl": "RI <- RDM7..4", "lca": ["tag_rdmr","tag_riw"], "op": busca_instrucao }
    ]

    for(var i in simulacao){
        simulacao[i].op();  

    }

}

function atualiza_rem(){
    scope.getElementById("rem_dec").textContent = pc;
    rem = pc;
    scope.getElementById("rem_bin").textContent = ConvertBase.dec2bin(pc);
}

function atualiza_rdm(){
    rdm = mem_ram[rem].val;
    scope.getElementById("rdm_dec").textContent = ConvertBase.hex2dec(rdm);
    scope.getElementById("rdm_bin").textContent = ConvertBase.hex2bin(rdm);
}

function incrementa_pc(){
    pc = pc + 1;
    scope.getElementById('pc_dec').textContent = pc.toString();
    scope.getElementById('pc_bin').textContent = ConvertBase.dec2bin(pc);   
}

function busca_instrucao(){
    scope.getElementById("ri_dec").textContent = ConvertBase.hex2dec(rdm);
    ri = ConvertBase.hex2bin(rdm).substr(0,4); 
    scope.getElementById("ri_bin").textContent = ri;
    if(ri ==="0000" || ri ==="0111" || ri ==="1111" ){
             console.log("não tem operando");
    }
    else{
        buscar_operando();
        
    };
    
}

function buscar_operando(){
 atualiza_rem();
 atualiza_rdm();
 incrementa_pc();

}

/* exemplo função 
var simulacao=[{"rtl": "REM <- PC", "lca": ["REMw", "PCr"], "op" : function() { alert('0') }},
{"rtl": "RDM <- MEM[REM]", "lca": ["MEMr"], "op" : function() { alert('1') }},
{"rtl": "PC <- PC + 1", "lca": ["PC+"], "op" : lixo }
]

function lixo(){alert('3')}
*/
//setTimeout(function(){ simulacao[i].op();},time);

//$("#pc_end").textContent = "023";
//riw.style.fill = 'Red'; troca cor 
//Pega elemento pc.getElementsByClassName("pc_dec")[0].textContent  

//tx =  scope.getElementById("tag_pcw");
//tx.style.fill="red";
