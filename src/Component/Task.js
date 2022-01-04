import React,{useState} from 'react'
var mytimer;
export default function Task() {
    const [count, setcount] = useState(0)

    const myincrement = ()=>{
        setcount(count+1)
    }
    const mydecrement = () =>{
        setcount(count-1)
    }
    const myreset = () =>{
        setcount(0)
    }

    const mycontinue = () =>{
     mytimer = setInterval(()=>{
            setcount(count => count+1)
        },1000)
    }

    const mystop = () =>{
        clearInterval(mytimer)
    }
    return (
        <div>
            <input type = 'text' value={count} onChange={(e)=>{setcount(e.target.value)}}/><br></br><br></br>
            <button onClick={myincrement}>Increment</button> <br></br><br></br>
            <button onClick={mydecrement}>Decrement</button><br></br><br></br>
            <button onClick={myreset}>reset</button><br></br><br></br>
            <button onClick={mycontinue}>continue</button><br></br><br></br>
            <button onClick={mystop}>stop</button>
        </div>
    )
}
