import './component2.css'

export default function C2({info,changeCity}){
    //show precipitation, humidity, wind speed, wind direction, pressure and search bar
    //console.log(info)
    const input=document.getElementById('city')
    if(input){input.addEventListener('keyup',(event)=>{
        if(event.key==='Enter'){
            changeCity(input.value)
        }
    })}
    if(info){
        return <>
            <div id="c2">
                <div id="weatherDetails">
                    <p>Precipitation: {info.current.precip_mm}mm</p>
                    <p>Humidity: {info.current.humidity}%</p>
                    <p>Wind Speed: {info.current.wind_kph}km/h</p>
                    <p>Wind Direction: {info.current.wind_dir}</p>
                    <p>Pressure: {info.current.pressure_mb}mb</p>
                </div>
                <div id="search">
                    <input type="text" id="city" placeholder="Enter city name" />
                    <button onClick={()=>changeCity(document.getElementById('city').value)}>Search</button>
                    
                </div>
            </div>
            </>
    }
    else{
        //search bar
        return <>
            <div id="c2">
                <div id="search">
                    <input type="text" id="city" placeholder="Enter city name" />
                    <button onClick={()=>changeCity(document.getElementById('city').value)}>Search</button>
                    
                </div>
            </div>
        </>
    }
}