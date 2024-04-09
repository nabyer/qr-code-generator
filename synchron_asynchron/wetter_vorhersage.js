function fetchWeather(city) {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const weatherData = {
                "Berlin": 20,
                "Paris": 22,
                "Madrid": 26,
                "London": 18
            };

        if (weatherData[city]) {
            resolve(`Die akutelle Temperatur in ${city} ist ${weatherData[city]} Grad.`)
        } else {
            reject('Daten für diese Stadt fehlen.')
        }

        }, 2000);
    });

}

async function showWeather(city) {
    try{
        const message = await fetchWeather(city);
        console.log(message);
    } catch {
        console.error(error);
    }
    
}

showWeather("Berlin");
showWeather("Paris");
showWeather("New York");