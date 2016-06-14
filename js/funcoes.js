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
