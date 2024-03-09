'use strict';

const livro = {
    titulo: 'Imperatriz Orquídea',
    autor: 'Anchee Min',
    paginas: 431,

    descricao: function() {
        console.log(`O livro ${this.titulo} foi escrito pelo(a) autor(a) ${this.autor} tendo ${this.paginas} páginas.`)
    }
};

livro.descricao();