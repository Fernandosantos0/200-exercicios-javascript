function arrayFilter(frutas, palavrasProibidas) {
    const arr = frutas.filter(fruta => {
        return !palavrasProibidas.includes(fruta);
    });

    return arr;
}

const frutas = new Array('Maçã', 'Perâ', 'Melância', 'Manga', 'Goiaba', 'Banana', 'Uva', 'Abacaxi');
const palavrasProibidas = ['Maçã', 'Uva', 'Banana'];

console.log(arrayFilter(frutas, palavrasProibidas));