export const createArrayPagination = (characters) => {

    let numCharactersPage = 6/* Math.round(characters.length / 6) */ //6
    let arrayP = []
    for (let index = 0; index < characters.length; index += 6) {
        arrayP.push(characters.slice(index, numCharactersPage))
        numCharactersPage += 6
    }
    return arrayP;

}