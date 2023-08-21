import {useIncrement} from "./useIncrement";

export function Counter2() {
    const {count, increase2} = useIncrement(0);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increase2}>Add 2</button>
        </>
    )
}