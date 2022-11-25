import React, { RefAttributes } from 'react'
import { UiColors, UiElementSizes } from './types';

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
    type = 'button',
    size,
    icon,
    fab,
    className,
    ...props
}: IButtonProps) => {


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
        <button {...props} className={btnClassName} type={type}>{children}</button>
    )
}