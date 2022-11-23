import React from 'react'
import { UiColors, UiElementSizes } from './types';

interface ButtonProps {
    children?: React.ReactElement | string | number | Array<React.ReactElement | string | number>
    color?: UiColors
    variant?: 'fill' | 'light' | 'contur' | 'link' | 'white-bg'
    size?: UiElementSizes,
    icon?: Boolean,
    fab?: Boolean,
    className?: string
}

export const Button = ({
    children,
    color = 'primary',
    variant = 'fill',
    size,
    icon,
    fab,
    className,
    ...props
}: ButtonProps) => {


    const btnClassName = [
        'btn',
        color ? 'btn--' + color : '',
        variant ? 'btn--' + variant : '',
        size ? 'btn-' + size : '',
        icon ? 'btn-icon' : '',
        fab ? 'btn-fab' : '',
        className
    ].join(' ')

    return (
        <button {...props} className={btnClassName}>{children}</button>
    )
}