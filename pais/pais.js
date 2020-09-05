const axios = require('axios');

const getPaisLatLon = async (codigo) => {

    const encodeUrl = encodeURI(codigo);
    
    const instance = axios.create({
        baseURL: `https://location-api.p.rapidapi.com/api/countries?countryCode=${encodeUrl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': 'e8deb4c5b9msh9334f0760d2f681p16fab2jsnb01297f3394b'}
    });
    
    const resp = await instance.get();

    const data = resp.data;
    const pais = data.name;
    const lat = data.latitude;
    const lon = data.longitude;

    return {
        pais,
        lat,
        lon
    }
}

module.exports = {
    getPaisLatLon
}