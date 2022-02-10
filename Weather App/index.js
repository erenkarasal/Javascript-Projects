
let weather ={
    "apiKey":"6278dccc75f81a82f4b34c26c714e66a",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        ).then((res)=>res.json())
        .then((data)=>this.displayWeather(data));    
    },
    displayWeather:function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Wheather in "+name;
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp+"C";
        document.querySelector(".humidity").innerHTML=humidity+"%";
        document.querySelector(".wind").innerHTML="Wind speed " +speed+"km/h";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";

    },
    search:function(){
        this.fetchWeather(document.querySelector(".weatherInput").value);
    }
};

document.querySelector(".search").addEventListener("click",function(){
    weather.search();
})


