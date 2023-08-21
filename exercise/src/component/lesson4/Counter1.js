import {useIncrement} from "./hooks/useIncrement";

export function Counter1() {
    const {count, increase1} = useIncrement(0);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increase1}>Add 1</button>
        </>
    )

}