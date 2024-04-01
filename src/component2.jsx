import './component2.css'

export default function C2({info,changeCity}){
    console.log(info)
    return <>
            <div id="c2">
                <input type="text"  />
                <button onClick={
                    ()=>{
                        const x=document.querySelector("input");
                        changeCity(x.value)
                    }
                }>change location</button>
            </div>
    </>
}