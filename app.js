const pais = require('./pais/pais');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    pais: {
        alias: 'c',
        desc: 'Codigo de pais para obtener su latitud y longitud',
        demand: true
    }
}).argv;

const getInfo = async (codigoPais) => {

    try {
        const coordenadas = await pais.getPaisLatLon(codigoPais);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return(`La temperatura de ${coordenadas.pais} es de ${temp}.`);
    } catch (error) {
        return `No se pudo determinar la temperatura de ${codigoPais}`;
    }

}

getInfo(argv.pais)
    .then(console.log)
    .catch(console.log);