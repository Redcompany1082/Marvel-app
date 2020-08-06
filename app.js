const personaje = require('./api/api');
const api = require('./api/api');




const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre del personaje para obtener sus datos',

    },
    id: {
        desc: 'Busca a un personaje por el ID',

    }


})

.argv;


api.getPersonajeById(argv.id)
    .then(console.log)
    .catch(error => {
        console.log(error.message);
    });

api.getPersonaje(argv.nombre)

.then(console.log)
    .catch(error => {
        console.log(error.message);
    });









































































































/*const encodedUlr = encodeURI(argv.nombre)
console.log(encodedUlr);


axios.get(`http://gateway.marvel.com/v1/public/characters?ts=9&apikey=55048dae968ca1a30e5b40f2360ce194&hash=5f9ecd23d8e6017f486dcddb7528baad&name=${encodedUlr}`)

.then(resp => {
        console.log(JSON.stringify(resp.data.data.results[0], null, 2))
    })
    .catch(err => {
        console.log('ERROR!!!!', err);
    })*/


/*const getBreeds = () => {
    try {
        return axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
        console.error(error)
    }
}

const countBreeds = async() => {
    const breeds = getBreeds()
        .then(response => {
            if (response.data.message) {
                console.log(
                    `Got ${Object.entries(response.data.message).length} breeds`
                )
            }
        })
        .catch(error => {
            console.log(error)
        })
}

countBreeds()
















/*axios({
    url: 'https://dog.ceo/api/breeds/list/all',
    method: 'get',
    data: {
        name: 'name',
        description: 'bar',
    }
})*/

/*console.log(axios())


const axios = require('axios')*/

/*const getBreeds = async() => {
    try {
        return await axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
        console.error(error)
    }
}

const countBreeds = async() => {
    const breeds = await getBreeds()

    if (breeds.data.message) {
        console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
}

countBreeds()*/






























/*const argv = require('yargs').options({


    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
})*/