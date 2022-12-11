import { useState } from "react";



export function useCounter(initial: number = 0, min: number = 0, max: number) {
    const [count, setValue] = useState<number>(initial)
    
    if (min > max) {

    }

    const plus = () => setValue((prev) => Math.min(prev + 1, max))
    const minus = () => setValue((prev) => Math.max(prev - 1, min))

    function setCount(value: any) {
        if (isNaN(parseInt(value))) {
            setValue(min)
        } else {
            setValue(Math.min(Math.max(parseInt(value), min), max))
        }
    }
    return { count, plus, minus, setCount }
}