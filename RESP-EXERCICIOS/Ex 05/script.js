// DEFININDO CLASSES ============================================================================
class Coords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return 'x = ' + this.x + ', y = ' + this.y;
    }
}

// TELA ===================================================================
class Tela {
    constructor() {
        // relativo ao Canvas
        window.canvas = document.getElementById('canvas');
        window.ctx = canvas.getContext('2d');

        // valores default
        window.COR_FUNDO = 'thistle';
        this.corDefault = 'black';
    }

    // BÁSICO: define a cor atual
    defCor(cor) {
        this.corDefault = cor;
    }
    // BÁSICO: espessura do traço
    defEspessura(esp) {
        ctx.lineWidth = esp;
    }
    // BÁSICO: limpa a tela
    cls() {
        let w = canvas.width;
        let h = canvas.height;
        this.defCor(COR_FUNDO);
        this.pintaRetangulo(new Coords(0, 0), w, h);
    }

    // desenha uma linha entre pontos
    desenhaLinha(coords1, coords2) {
        ctx.strokeStyle = this.corDefault;
        ctx.fillStyle = this.corDefault;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(coords1.x, coords1.y);
        ctx.lineTo(coords2.x, coords2.y);
        ctx.stroke();
    }

    // desenha uma linha tracejada entre pontos
    desenhaLinhaPontilhada(coords1, coords2) {
        ctx.strokeStyle = this.corDefault;
        ctx.fillStyle = this.corDefault;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(coords1.x, coords1.y);
        ctx.lineTo(coords2.x, coords2.y);
        ctx.stroke();
    }

    // desenha um retângulo cheio
    pintaRetangulo(coords, w, h) {
        ctx.strokeStyle = this.corDefault;
        ctx.fillStyle = this.corDefault;
        ctx.fillRect(coords.x, coords.y, w, h);
    }

    // desenha um círculo aberto
    desenhaCirculo(centro, raio) {
        ctx.strokeStyle = this.corDefault;
        ctx.fillStyle = this.corDefault;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(centro.x, centro.y, raio, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // pinta um círculo
    pintaCirculo(centro, raio) {
        ctx.strokeStyle = this.corDefault;
        ctx.fillStyle = this.corDefault;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(centro.x, centro.y, raio, 0, 2 * Math.PI);
        ctx.fill();
    }

    // escreve um texto
    escreve(coords, txt) {
        ctx.strokeStyle = this.corDefault;
        ctx.fillStyle = this.corDefault;
        ctx.font = "italic 30px Times New Roman";
        ctx.fillText(txt, coords.x, coords.y);
    }

}

// CONTROLE DO TEMPO =====================================================
let iniciaTemporizador = function (fps, onoff) {
    if (onoff) {
        interval = setInterval(
            () => {
                // IMPLEMENTAR SE NECESSÁRIO
            }, 1000 / fps
        );
    } else {
        if (typeof interval === 'undefined') return;
        clearInterval(interval);
        console.log('cancelando');
    }

}



// ============  ARENA DE TESTES ======================

tela = new Tela();

// lados do triângulo
let lados = [3, 4, 5];

// reordenando em ordem decrescente
lados.sort(
    (x, y) => {
    return y - x;
});

// teorema de Pitágoras se verifica?
let maiorAoQuadrado = Math.pow(lados[0], 2);
let demaisAoQuadrado = Math.pow(lados[1], 2) + Math.pow(lados[2], 2);
let resposta = '';
if (maiorAoQuadrado == demaisAoQuadrado) {
    resposta = 'É um triângulo retângulo';
} else {
    resposta = 'Não é um triângulo retângulo';
}

// exibindo resposta
tela.cls();
tela.defCor('darkblue');
tela.escreve(new Coords(50, 50), 'Lados: ' + lados[0] + ', ' + lados[1] + ', ' + lados[2]);
tela.escreve(new Coords(50, 100), resposta);





