
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

function restauraOpcoes() {
    document.getElementById('id_inst').style.backgroundColor = '#555';
    document.getElementById('id_alunos').style.backgroundColor = '#555';
    document.getElementById('id_matricula').style.backgroundColor = '#555';
}



/* *********************************************************************

        INICIALIZAÇÃO DA PÁGINA

********************************************************************* */



