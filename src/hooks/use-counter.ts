import { useState } from "react";



export function useCounter(initial = 0) {
    const [count, setCount] = useState(initial)

    const plus = () => setCount((prev) => prev + 1)
    const minus = () => setCount((prev) => prev - 1)

    return [count, plus, minus]
}