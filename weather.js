class Weather{
    constructor(city) {
        this.city = city;
        this.key = '77b9c09f4440335ae3418f0aa5fff2d8';
    }

    //data from api
    async weatherData(){
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key);
        const data = await resp.json();
        return data;
    }

    //change city
    changeCityName(name){
        this.city = name;
    }
}
