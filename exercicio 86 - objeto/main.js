'use strict';

const livro = {
    /* Propriedades */
    titulo: 'Imperatriz Orquídea',
    autor: 'Anchee Min',
    paginas: 438,

    /* Método */
    exibirLivro() {
        console.log(`${this.titulo} escrito por ${this.autor} e com ${this.paginas} páginas.`);
    }
}