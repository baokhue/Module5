import {useState} from "react";

export function useIncrement() {
    const [count, setCount] = useState(0);
    const increase1 = () => {
        setCount(count + 1);
    }

    const increase2 = () => {
        setCount(count + 2);
    }

    return {count, increase1, increase2};
}