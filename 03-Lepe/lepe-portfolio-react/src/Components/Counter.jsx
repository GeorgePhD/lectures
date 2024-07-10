import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const addition = () => {
        setCounter(counter + 1)
    }
    const subtraction = () => {
        if(counter > 0)
        setCounter(counter - 1)
    }
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
        </div>
    )
}

export default Counter