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
tela.cls();
tela.defCor('darkred');

let emp1 = {
    nome: 'João',
    salario: 3500,

    impRenda: function () {
        valor = 0;
        if (this.salario >= 2000) {
            valor = this.salario * 0.15;
        }
        return valor;
    }
};

let emp2 = {
    nome: 'Márcio',
    salario: 1500,

    impRenda: function () {
        valor = 0;
        if (this.salario >= 2000) {
            valor = this.salario * 0.15;
        }
        return valor;
    }
};

let emp3 = {
    nome: 'Renato',
    salario: 9800,

    impRenda: function () {
        valor = 0;
        if (this.salario >= 2000) {
            valor = this.salario * 0.15;
        }
        return valor;
    }
};

let emp4 = {
    nome: 'Atanagildo',
    salario: 1350,

    impRenda: function () {
        valor = 0;
        if (this.salario >= 2000) {
            valor = this.salario * 0.15;
        }
        return valor;
    }
};

let emp5 = {
    nome: 'Ariobaldo',
    salario: 25000,

    impRenda: function () {
        let valor = 0;
        if (this.salario >= 2000) {
            valor = this.salario * 0.15;
        }
        return valor;
    }
};

let empregados = new Array();
empregados.push(emp1);
empregados.push(emp2);
empregados.push(emp3);
empregados.push(emp4);
empregados.push(emp5);

let altura = 1;
for (let emp of empregados) {
    tela.escreve(new Coords(50, 50 * altura), emp.nome
        + ' recebe ' + emp.salario
        + ' e paga ' + emp.impRenda());
    altura++;
}


