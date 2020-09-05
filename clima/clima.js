const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=80397eb43e4358aa610bb16169d8b0fd`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}