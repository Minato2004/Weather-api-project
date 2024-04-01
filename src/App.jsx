import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import C1 from './component1.jsx'
import C2 from './component2.jsx'

function App() {
  const [weather,setWeather]=useState()
  const requestUrl="https://api.weatherapi.com/v1/current.json?key=3c0ecefc8a754e71a90130103242301&q="
  async function fetcher(city){
    let response= await fetch(requestUrl+city)
    response=await response.json()
    return response
  
  }
  useEffect(()=>{
    fetcher("London").then((data)=>{
      setWeather(data)
    })
  },[])
  function changeCity(city){
    fetcher(city).then((data)=>{
      setWeather(data)
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
