class Weather {
    constructor(city) {
        this.city = city;
        this.key = '4d0ddb13bcb90ccb4c38a0987921e4ce';
    }

    // data from API
    async weatherData() {
        const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=" + this.city + "&appid=" + this.key);
        const data = await resp.json();
        return data;
    }

    // change city
    changeCityName(name){
        this.city = name;
    }
}
