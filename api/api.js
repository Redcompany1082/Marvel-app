const axios = require('axios')



const getPersonajeById = async(id) => {

    const ibv = id

    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=9&apikey=55048dae968ca1a30e5b40f2360ce194&hash=5f9ecd23d8e6017f486dcddb7528baad`)

    if (res.data.data.results === undefined) {
        throw new Error(`no hay resuldatos para el ID${id}`)
    }
    const data2 = res.data.data.results;
    return data2
}





const getPersonaje = async(nombr) => {

    const encodedUlr = encodeURI(nombr)


    const resp = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=9&apikey=55048dae968ca1a30e5b40f2360ce194&hash=5f9ecd23d8e6017f486dcddb7528baad&nameStartsWith=${encodedUlr}`)


    if (resp.data.data.results === undefined) {
        throw new Error(`No hay resultados para ${nombr}`);
    }

    const data = resp.data.data.results;
    const id = data.id;
    const nombre = data.name;
    const descripcion = data.description;

    return data

    /*{
        id,
        nombre,
        descripcion
    }*/

}

module.exports = {
    getPersonaje,
    getPersonajeById
}