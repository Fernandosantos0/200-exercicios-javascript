'use strict';

const obj = {}; // Criando um objeto vazio

/* Criando uma propriedade numérica */
obj.idade = 23;

/* Criando uma propriedade string */
obj.nome = 'Fernando';

/* Criando uma propriedade booleana */
obj.casado = false;

console.log(obj); /* Mostrando o resultado */

/* Segunda forma */
const obj2 = new Object(); // Criando um objeto vazio

/* Criando uma propriedade numérica */
obj2['idade'] = 45;

/* Criando uma propriedade string */
obj2['nome'] = 'Carlos';

/* Criando uma propriedade booleana */
obj2['casado'] = true;

console.log(obj2); /* Mostrando o resultado */