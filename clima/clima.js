const axios = require('axios');

const getClima = async (lat, lon) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2194f5ac491435d37664bc917c754c48`);

    let clima = resp.data.main.temp;

    return clima;
}

module.exports = {
    getClima
}