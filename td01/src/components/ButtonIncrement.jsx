import { useState } from "react";

function ButtonIncrement({onIncrement}) {
    const [state, setCount] = useState(0);

    return (
        <div>
            <h1>
                <p> The count is {state}</p>
                <button onClick={() => {
                    const newCount = state + 1;
                    setCount(newCount);
                }}>Increment</button> 
            </h1>
        </div>
    );
}

export default ButtonIncrement;