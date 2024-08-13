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
                // ISSO É SÓ DEMONSTRAÇÃO: REMOVER SE NÃO FOR USAR
                desenhaTela();
            }, 1000 / fps
        );
    } else {
        if (typeof interval === 'undefined') return;
        clearInterval(interval);
        console.log('cancelando');
    }

}

// ISTO AQUI É APENAS DEMONSTRAÇÃO - REMOVER QUANDO FOR DESENVOLVER ALGO
function desenhaTela() {
    tela.cls();
    tela.defCor('blue');
    tela.defEspessura(4);
    tela.escreve(new Coords(300, 50), 'Faça experiências aqui!');
    tela.escreve(new Coords(400, 500), 'Tempo: ' + t);
    t++;
    // desenhando o cubo
    dt = Math.PI/2;
    v1 = new Coords(200 * Math.cos(-0.05 * t) + 500, 60 * Math.sin(-0.05 * t) + 200);
    v2 = new Coords(200 * Math.cos(-0.05 * t + dt) + 500, 60 * Math.sin(-0.05 * t + dt) + 200);
    v3 = new Coords(200 * Math.cos(-0.05 * t + 2*dt) + 500, 60 * Math.sin(-0.05 * t + 2*dt) + 200);
    v4 = new Coords(200 * Math.cos(-0.05 * t + 3*dt) + 500, 60 * Math.sin(-0.05 * t + 3*dt) + 200);
    w1 = new Coords(200 * Math.cos(-0.05 * t) + 500, 60 * Math.sin(-0.05 * t) + 400);
    w2 = new Coords(200 * Math.cos(-0.05 * t + dt) + 500, 60 * Math.sin(-0.05 * t + dt) + 400);
    w3 = new Coords(200 * Math.cos(-0.05 * t + 2*dt) + 500, 60 * Math.sin(-0.05 * t + 2*dt) + 400);
    w4 = new Coords(200 * Math.cos(-0.05 * t + 3*dt) + 500, 60 * Math.sin(-0.05 * t + 3*dt) + 400);
    tela.defCor('darkred');
    tela.desenhaLinha(v1, v2);
    tela.desenhaLinha(v2, v3);
    tela.desenhaLinha(v3, v4);
    tela.desenhaLinha(v4, v1);
    tela.desenhaLinha(w1, w2);
    tela.desenhaLinha(w2, w3);
    tela.desenhaLinha(w3, w4);
    tela.desenhaLinha(w4, w1);
    tela.desenhaLinha(v1, w1);
    tela.desenhaLinha(v2, w2);
    tela.desenhaLinha(v3, w3);
    tela.desenhaLinha(v4, w4);

}





// ============  ARENA DE TESTES ======================
tela = new Tela();
tela.cls();
let t = 0;

iniciaTemporizador(30, true);
