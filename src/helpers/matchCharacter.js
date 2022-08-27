export const matchCaracter = (busqueda, personajes) => {

    let coincidencias = [];
    personajes.forEach(p => {
        if (busqueda.toLowerCase() === p.name.toLowerCase() || p.name.toLowerCase().includes(busqueda.toLowerCase())) {
            coincidencias.push(p);
        }
    });

    return coincidencias;

}