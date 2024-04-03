import { useEffect } from 'react'
import './component1.css'
import {createApi} from 'unsplash-js'
//ta6qntzZz7ksHLh3ZR511pQfVAXFZnHo1tUjdAFzTPQ
//wmVcPkrtZ-E694ea2XMKcvMhcyNkFXqjg_hKHIQq55w
const api = createApi({
    accessKey:"ta6qntzZz7ksHLh3ZR511pQfVAXFZnHo1tUjdAFzTPQ"})

export default function C1({info}){
    //show day ,date, location, weather icon, weather condition, temperature
    useEffect(()=>{
        if(info){//set background image shoud be based on weather condition and not random
            api.photos.getRandom({query:info.current.condition.text +" weather"}).then(result=>{
                if(result.errors){
                    console.log('error occurred: ',result.errors[0])
                }else{
                    // document.getElementById('c1').style.backgroundImage=`url(${result.response.urls.full})`
                    // //fit the image to the screen
                    // document.getElementById('c1').style.backgroundSize='cover'
                    // // reduce background brightness
                    // //document.getElementById('c1').style.backgroundOpacity='0.5'
                    // document.getElementById('c1').style.color='white'
                    //add the image as an element
                    let image=document.querySelector('#bg')
                    if(!image){let img=document.createElement('img')
                    img.id='bg'
                    img.src=result.response.urls.full
                    document.querySelector('#c1').appendChild(img)}
                    else{
                        image.src=result.response.urls.full
                    }
                }
            })
            
        }
    },[info])
   if(info) return <>
        <div id="c1">
            <div id="weather">
                <h1>{info.location.name}</h1>
                <p>{info.location.localtime}</p>
                <img src={info.current.condition.icon} alt="weather icon"/>
                <span>{info.current.condition.text}</span>
                <h2>{info.current.temp_c}°C</h2>
            </div>
        </div>
    </>
    else{
        return <div id="c1">
            <h1>no location found</h1>
        </div>
    }
}