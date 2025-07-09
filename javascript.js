
//The top contains the API necessities needed to be fetched from the website.
const apiKey = config.API_KEY
const apiUrl = config.API_URL
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    //open weather map.org this is the site for the api
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //if the city is not available we display the error message hidden in .error class and the weatheer container hides everything on the city
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
    }else{
 var data = await response.json();
  //rewriting the datas in the hard coded html to the data given in the api call,very simple
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    //checks for weather and matches them with the specified images
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }
    //if the city exists we show the info and the error is not shown.
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none"
    }
   
}
searchBtn.addEventListener("click", ()=>{
    //get the value from the search box which is linked to a string to call the api
    checkWeather(searchBox.value)
})
