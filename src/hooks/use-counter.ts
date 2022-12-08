import { useState } from "react";



export function useCounter(initial = 0) {
    const [count, setValue] = useState<number>(initial)

    const plus = () => setValue((prev) => +prev + 1)
    const minus = () => setValue((prev) => prev - 1)

    function setCount(value: any) {
        if (isNaN(parseInt(value))) {
            setValue(0)
        } else {
            setValue(parseInt(value))
        }
    }
    return { count, plus, minus, setCount }
}