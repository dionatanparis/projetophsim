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
        console.log('entrou try carregar_valores_modal');
        cel = $("#editando_" + endereco + " td")[3];
        var valor = cel.innerText;
        cel = $("#editando_" + endereco + " td")[1];
        var bin = cel.innerText;

        $("#endereco_edicao").val(endereco);
        $("#valor_dec").val(valor);
        $("#valor_bin").val(bin);
        $("#valor_hexa").val(ConvertBase.dec2hex(valor));
        setaBin(bin);
        console.log('carregou valores');

    } catch (error) {
        console.log("entrou no catch valor endereco: " + endereco);
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

}

function simulacao() {
    // LCA linhas de controle ativas.

    var LCA = new Array();
    var operacao = new Array();
    
    var simulacao = [{ "rtl": "REM <- PC", "lca": ["REMw", "PCr"], "op": atualiza_rem },
        { "rtl": "RDM <- MEM[REM]", "lca": ["MEMr"], "op": atualiza_rdm },
        { "rtl": "PC <- PC + 1", "lca": ["PC+"], "op": incrementa_pc },
        { "rtl": "PC <- PC + 1", "lca": ["PC+"], "op": busca_instrucao }
    ]

    for(var i in simulacao){
        simulacao[i].op();
    }

}

function ler_mem() {
    return "end mem";
}
function lixo() { alert('3') }

function atualiza_rem(){
    console.log("atualiza rem valor:" +pc);
    $("#rem_dec").textContent = pc;
    rem = pc;
    console.log("rem - "+pc);
}

function atualiza_rdm(){
    console.log("atualiza rdm deve ser zero rdm =" +rdm );

    rdm = mem_ram[rem].val;
   $("#rdm_dec tspan").textContent = ConvertBase.hex2dec(rdm);
    console.log("rdm - "+rdm);
}

function incrementa_pc(){
    console.log("incrementa pc");
    pc = pc + 1;
    $("#pc_dec").textContent= pc.toString();
}

function busca_instrucao(){
    console.log("busca_instrucao");
}



/* exemplo função 
var simulacao=[{"rtl": "REM <- PC", "lca": ["REMw", "PCr"], "op" : function() { alert('0') }},
{"rtl": "RDM <- MEM[REM]", "lca": ["MEMr"], "op" : function() { alert('1') }},
{"rtl": "PC <- PC + 1", "lca": ["PC+"], "op" : lixo }
]

function lixo(){alert('3')}
*/

//$("#pc_end").textContent = "023";