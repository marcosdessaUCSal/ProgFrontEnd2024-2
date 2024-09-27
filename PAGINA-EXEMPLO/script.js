var Cor = {
    AZUL: 1,
    VERMELHO: 2
}

var arrayEsq = new Array();
var arrayDir = new Array();
var count = 0;

class Elemento {
    constructor(cor, numero) {
        this.cor = cor;
        this.numero = numero;
    }
}

function addEsquerdo() {
    if (arrayEsq.length < 10) {
        let elemento = new Elemento(Cor.AZUL, ++count);
        arrayEsq.push(elemento);
        let htmlMostrado = criaListaHtmlObjetos(arrayEsq);
        document.getElementById('esquerda').innerHTML = htmlMostrado;
        document.getElementById('msg').innerText = '';
    } else {
        document.getElementById('msg').innerText = 'SLOT ESQUERDO CHEGOU AO LIMITE';
    }
}

function addDireito() {
    if (arrayDir.length < 10) {
        let elemento = new Elemento(Cor.VERMELHO, ++count);
        arrayDir.push(elemento);
        let htmlMostrado = criaListaHtmlObjetos(arrayDir);
        document.getElementById('direita').innerHTML = htmlMostrado;
        document.getElementById('msg').innerText = '';
    } else {
        document.getElementById('msg').innerText = 'SLOT DIREITO CHEGOU AO LIMITE';
    }
}

function criaListaHtmlObjetos(array) {
    let html = '';
    for (let elemento of array) {
        if (elemento.cor == Cor.AZUL) {
            html += '<div class="el-esq">';
            html += elemento.numero + ' AZUL';
            html += '</div>';
        } else {
            html += '<div class="el-dir">';
            html += elemento.numero + ' VERMELHO';
            html += '</div>';
        }
    }
    return html;

}