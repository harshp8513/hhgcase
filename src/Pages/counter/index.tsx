import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
    const [counter, setCounter] = useState(0);

    const onIncrement = () => {
        setCounter(counter + 1)
    }

    const onReset = () => {
        setCounter(0)
    }
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-3" style={{ textAlign: "center" }}>
                    <h1>Counter</h1>
                    <h2>{counter}</h2>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-3 d-flex justify-content-between">
                    <Button onClick={onIncrement}>
                        Increment
                    </Button>

                    <Button variant="danger" onClick={onReset}>
                        Reset
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Counter
