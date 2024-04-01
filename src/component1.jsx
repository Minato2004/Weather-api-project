import './component1.css'
export default function C1({info}){
    //show day ,date, location, weather icon, weather condition, temperature
   if(info) return <>
            <div id="c1">
                
                    
                            <div id="weather">
                                <img src={info.current.condition.icon} alt="weather icon" />
                                <p>{info.current.condition.text}</p>
                                <p>{info.current.temp_c}°C</p>
                            </div>
                        
                

            </div>
    </>
    else{
        return <div id="c1">
            <h1>loading...</h1>
        </div>
    }
}