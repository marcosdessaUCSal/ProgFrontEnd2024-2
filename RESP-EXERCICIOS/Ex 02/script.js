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

// coeficientes da equação
const a = 1;    // possibilidade de a = 0 descartada!
const b = -5;
const c = 6;

let resposta = '';
let x1 = 0;
let x2 = 0;

// encontrando soluções
let delta = b * b - 4 * a * c;
if (delta < 0) {
    resposta = 'Não há nenhumna solução real';
} else if (delta == 0) {
    x1 = -b / (2 * a);
    resposta = 'Raízes reais e iguais: ' + x1;
} else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resposta = 'Raízes: ' + x1 + ' e ' + x2;
}

tela.cls();

tela.defCor('darkblue');
tela.escreve(new Coords(50, 50), 'Equação: a x² + b x + c = 0');
tela.escreve(new Coords(50, 100), 'a = ' + a);
tela.escreve(new Coords(50, 150), 'b = ' + b);
tela.escreve(new Coords(50, 200), 'c = ' + c);
tela.escreve(new Coords(50, 250), resposta);


