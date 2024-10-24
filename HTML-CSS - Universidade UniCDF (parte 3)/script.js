
// ============ HANDLERS DE COMPONENTES ===========================

function pagInstitucional() {
    restauraOpcoes();

    const minhaSection = document.getElementById('minha-section');

    document.getElementById('id_inst').style.backgroundColor = 'black';

    fetch('/institucional.html')
        .then(response => response.text())
        .then(dados => {
            minhaSection.innerHTML = dados;
            // document.getElementById('canvas-section').style.visibility = 'hidden';
        })
        .catch(
            e => {
                console.log('Ocorreu este erro aqui: ' + e);
            }
        );
}

function pagAlunos() {
    restauraOpcoes();

    const minhaSection = document.getElementById('minha-section');

    document.getElementById('id_alunos').style.backgroundColor = 'black';

    fetch('alunos.html')
        .then(response => response.text())
        .then(dados => {
            minhaSection.innerHTML = dados;
            document.getElementById('slot-alunos').innerHTML = getCardsAlunos();
        })
        .catch(
            e => {
                console.log('Ocorreu este erro aqui: ' + e);
            }
        );
}

function getAlunoCardTemplate() {
    fetch('assets/templates/alunoCardTemplate.html')
        .then(response => response.text())
        .then(dados => {
            templateCard = dados;
        })
}


function restauraOpcoes() {
    document.getElementById('id_inst').style.backgroundColor = '#555';
    document.getElementById('id_alunos').style.backgroundColor = '#555';
    document.getElementById('id_matricula').style.backgroundColor = '#555';
}

// ========= MANIPULAÇÃO DA LISTA DOS ALUNOS ==============

function getCardsAlunos() {
    let conteudoAlunos = '';
    for (let i = 0; i < 10; i++) {
        conteudoAlunos += templateCard;
    }
    return conteudoAlunos;
}


/* *********************************************************************

        INICIALIZAÇÃO DA PÁGINA

********************************************************************* */


// componente default
pagInstitucional();


// Criando o template do card dos alunos
var templateCard;
getAlunoCardTemplate();


