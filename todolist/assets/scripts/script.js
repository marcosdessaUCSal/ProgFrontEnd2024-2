// =================================================
//      DEFINIÇÕES DE CLASSES E VARIÁVEIS GLOBAIS
// =================================================

var idCount = 0;

class Tarefa {

    constructor(txt, sel) {
        this.id = ++idCount;
        this.marcado = sel;
        this.texto = txt;
    }

}

var arrayTarefas = new Array();



// =================================================
//      INICIALIZAÇÃO DOS DADOS MOCKADOS
// =================================================

function start() {
    arrayTarefas.push(new Tarefa('Tomar banho', false));
    arrayTarefas.push(new Tarefa('Escovar os dentes', false));
    arrayTarefas.push(new Tarefa('Lavar os pratos', false));
    arrayTarefas.push(new Tarefa('Varrer a sala', false));
}




// =================================================
//      CONSTRUÇÃO DE ELEMENTOS GRÁFICOS
// =================================================

function exibeTarefas() {
    let area = document.getElementById('tarefas');
    let conteudo = '';
    let registroAtual = '';
    let txt = '';
    let selecionado = false;
    let id = 0;
    for (let t of arrayTarefas) {
        id = t.id;
        txt = t.texto;
        selecionado = t.marcado;
        registroAtual = `<div class="registro">`;
        if (!selecionado) {
            registroAtual += `<input type="checkbox" onchange="mude(${id})">`;
            registroAtual += `<div class="texto">${txt}</div>`;
        } else {
            registroAtual += `<input type="checkbox" checked onchange="mude(${id})">`;
            registroAtual += `<div class="texto-riscado">${txt}</div>`;
        }
        registroAtual += `<div><img class="icone" src="/assets/img/delete-icon.svg" onclick="remova(${id})"></div>`;
        registroAtual += `</div>`;
        conteudo += registroAtual;
    }
    area.innerHTML = conteudo;
}


// =================================================
//      ALTERAÇÕES NOS DADOS
// =================================================


function mude(id) {
    for (let t of arrayTarefas) {
        if (t.id == id) {
            t.marcado = !t.marcado;
            break;
        }
    }
    exibeTarefas();
}



function remova(id) {
    let indice = 0;
    for (let i in arrayTarefas) {
        if (arrayTarefas[i].id == id) {
            indice = i;
            break;
        }
    }
    arrayTarefas.splice(indice, 1);
    exibeTarefas();
}

function adicionarTarefa() {
    let txt = document.getElementById('entrada').value;
    arrayTarefas.push(new Tarefa(txt, false));
    document.getElementById('entrada').value = '';
    exibeTarefas();
}

function marcarTudo() {
    for (let t of arrayTarefas) {
        t.marcado = true;
    }
    exibeTarefas();
}

function desmarcarTudo() {
    for (let t of arrayTarefas) {
        t.marcado = false;
    }
    exibeTarefas();
}

function removerMarcados() {
    for (let i = 0; i < arrayTarefas.length; i++) {
        if (arrayTarefas[i].marcado) {
            delete arrayTarefas[i];
        }
    }
    arrayTarefas = arrayTarefas.filter(elemento => elemento !== null);
    exibeTarefas();
}













// =================================================
//      INICIANDO TUDO
// =================================================

start();
exibeTarefas();

