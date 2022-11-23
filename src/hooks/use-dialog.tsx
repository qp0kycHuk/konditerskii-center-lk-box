import { useState } from 'react'

export function useDialog(initial) {
    const [opened, setOpened] = useState(initial)

    const show = () => setOpened(true)
    const close = () => setOpened(false)

    return [opened, show, close]
}