var temp=document.getElementById('temp');
var tempi=document.getElementById('tempi');
var mitemp=document.getElementById('mitemp');
var mxtemp=document.getElementById('mxtemp');
var body_img=document.getElementById('body_img');


 var cityName=document.getElementById('city');
 var mhumid=document.getElementById('mhumid');
 var humidity=document.getElementById('humidity');
 var widegree=document.getElementById('widegree');
 var flike=document.getElementById('flike');


 var windspeed=document.getElementById('windspeed');
 var mwind=document.getElementById('mwind');
 var atime=document.getElementById('atime');
 var btime=document.getElementById('btime');
 var searchinput=document.getElementById('searchinput');
 var searchbox=document.getElementById('searchbox');
 
 var descr=document.getElementById('descr');

async function checkWeather(city) {
        let Upi_key='996fa948e2f0ba52bec817b456b201c3'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        let data= await repsponse.json();

  
    windspeed.innerHTML=data.wind.speed+'km/h';  
    temp.innerHTML=Math.floor(data.main.temp );
    tempi.innerHTML=Math.floor(data.main.temp) + "°C";
    mitemp.innerHTML=Math.floor(data.main.temp_min) + "°C";
    mxtemp.innerHTML=Math.floor(data.main.temp_max) + "°C";
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    widegree.innerHTML = Math.floor(data.wind.deg) + "°";
    flike.innerHTML = Math.floor(data.main.feels_like) + "°C";
    mhumid.innerHTML = Math.floor(data.main.humidity);
    mwind.innerHTML = Math.floor(data.wind.speed);
    atime.innerHTML = data.sys.sunrise;
    btime.innerHTML = data.sys.sunset;
    descr.innerHTML = data.weather[0].main;

    if (data.weather[0].main=="Clouds") {
        body_img.src='image/clouds.png'
    }
     else if (data.weather[0].main=='Clear') {
        body_img.src='image/clear.png'
    }
    else if (data.weather[0].main=='Rain') {
        body_img.src='image/rain.png'
    }
    else if (data.weather[0].main=='Drizzle') {
        body_img.src='image/drizzle.png'
    }
    else if (data.weather[0].main=='Mist') {
        body_img.src='image/mist.png'
    }
    else if (data.weather[0].main=='Haze') {
        body_img.src='image/haze.png'
    }
    else if (data.weather[0].main=='Humidity') {
        body_img.src='image/humidity.png'
    }
    else if (data.weather[0].main=='Snow') {
        body_img.src='image/snow.png'
    }
    else if (data.weather[0].main=='Wind') {
        body_img.src='image/wind.png'
    }
   
    console.log(data)



   

     }
     
   

     searchbox.addEventListener('click',()=>
      {
         let cityIn = searchinput.value;
         checkWeather(cityIn);
         
   })


    