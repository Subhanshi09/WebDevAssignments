const inputt =document.querySelector('input'); 
const city = document.getElementById('city'); 
const dat = document.getElementById('date'); 
const temp = document.getElementById('temp'); 
const minmax = document.getElementById('min-max'); 
const weather = document.getElementById('weather'); 
 
 
 
 
function getInfo(searchText){ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=0c2b637b4adad8e32397d27d81188ed0`) 
        .then((res)=>{ 
            return res.json(); 
         
        }) 
        .then((data)=>{ 
             
            console.log(data); 
         
        let txt=data.weather[0].description; 
        weather.innerHTML=txt; 
        if(data.weather[0].description== 'broken clouds') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1569241095162-e3b9a583b9d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JleSUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')"; 
             
        } else if(data.weather[0].description == 'haze') { 
             
            document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/865/362/391/bare-trees-during-nighttime.jpg')"; 
             
        }     else if(data.weather[0].description== 'rain') { 
             
            document.body.style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/806/643/716/city-men-new-york-city-rain-wallpaper-preview.jpg')"; 
             
        } else if(data.weather[0].description == 'Snow') { 
             
            document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/419154.jpg')"; 
             
        } else if(data.weather[0].description == 'Thunderstorm') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')"; 
             
        }  
         
                else { 
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/175910.jpg')"; 
                     
                }  
         
        txt=data.name+", "+data.sys.country; 
        city.innerHTML=txt; 
         
        txt=parseInt(data.main.temp-273); 
        temp.innerHTML=txt+"&deg;C"; 
 
        txt=parseInt(data.main.temp_min-273); 
        let txt2=parseInt(data.main.temp_max-273); 
        minmax.innerHTML=txt+"&deg;C(min) / "+txt2+"&deg;C(max)"; 
         
        let today = new Date(); 
        dat.innerHTML=today; 
 
 
         
 
        }) 
        .catch((err)=>{ 
            console.log(err); 
        }) 
} 
 
 
 
inputt.addEventListener("keypress",(e)=>{ 
    if(e.which===13){ 
        const searchText = inputt.value; 
 
        getInfo(searchText); 
 
        inputt.value=""; 
    } 
 
     
})