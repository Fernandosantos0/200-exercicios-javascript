'user strict';

function calcularMedia(...notas) {
    const divisor = notas.length;

    const soma = notas.reduce((ac, nota) => {
        ac += Number(nota);
        return ac;
    }, 0);

    const media = soma / divisor;

    if(media >= 7) {
        console.log('O aluno foi APROVADO com a média ' + media);
    } else {
        console.log('O aluno foi REPROVADO com a média ' + media);
    }

}

calcularMedia(8, 6);
calcularMedia(4, 1);
calcularMedia(5, 8);
calcularMedia(9, 8);