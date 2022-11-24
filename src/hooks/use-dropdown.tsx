import React, { useEffect, useState, useRef } from 'react'

export function useDropdown(ref: any, open: boolean = false) {
    const [isOpen, setIsOpen] = useState(open)
    const [styleHeight, setStyleHeight] = useState({ height: 'auto' })

    const getHeight = () => ref.current ? ref.current.scrollHeight : 'auto'
    const toggle = (state?: boolean) => setIsOpen((old) => state ?? !old)

    useEffect(() => {
        setStyleHeight({
            height: isOpen ? getHeight() : 0
        })

    }, [isOpen])

    return {
        isOpen,
        toggle,
        styleHeight
    }
}