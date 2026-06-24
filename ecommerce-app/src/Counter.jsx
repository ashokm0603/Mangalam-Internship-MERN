import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);

    //function for increment state value
    const handleIncrement=()=>{
        
        if(num<10){
            setNum(num+1)
            
        }else{
            setNum(0)
        }
    }
    //function for reset State Value
    const handleReset=()=>{
        setNum(0)
    }
    //function for decrement State Value
    const handleDecrement=()=>{
        setNum(num-1)
    }

    return (
        <div>
            <h1>
                Counter App
            </h1>

            <h3>Number : {num}</h3>
            <div>
                <button onClick={handleIncrement}>
                    Increment ++
                </button>

                <button onClick={handleReset}>
                    Reset
                </button>

                <button onClick={handleDecrement}>
                    Decrement --
                </button>
            </div>
        </div>
    )
}

export default Counter;