import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import C1 from './component1.jsx'
import C2 from './component2.jsx'

function App() {
  const [weather,setWeather]=useState()
  const requestUrl="https://api.weatherapi.com/v1/current.json?key=3c0ecefc8a754e71a90130103242301&q="
  document.addEventListener("keydown",(e)=>{
    if(e.key.length==1){
      const input=document.getElementById('city');
      if(input) input.focus()  
    }
  })
  async function fetcher(city){
    try{let response= await fetch(requestUrl+city)
      if(response.hasOwnProperty("error")){
        throw new Error(response.error.message)
      }
    response=await response.json()
    if(response.hasOwnProperty("error")){
      throw new Error(response.error.message)
    }
    return response}
    catch(err){
      console.log(err)
    }
  
  }
  useEffect(()=>{
    fetcher("London").then((data)=>{
      setWeather(data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  function changeCity(city){
    fetcher(city).then((data)=>{
      setWeather(data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
   <div id="app">
     <C1 info={weather}></C1>
     <C2 info={weather} changeCity={changeCity} ></C2>
   </div>
  )
}

export default App
