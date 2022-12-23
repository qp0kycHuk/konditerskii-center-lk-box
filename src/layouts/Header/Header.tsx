import React, { useEffect, useState } from 'react'
import { Button } from '@src/components/ui/Button';

import './Header.scss';

interface IHeaderProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLElement>, HTMLElement> { }

export const Header = ({ children }: IHeaderProps) => {
    return (
        <header className="header">
            <div className="header-left flex flex-align-center">
                <div className="header-logo mr-5">
                    <img src="img/logo.jpg" alt="" />
                </div>
                <div className="text--bold text--uppercase">КОНСТРУКТОР НАБОРОВ</div>
            </div>

            {children}

            <div className="flex flex-align-center pr-5">
                <div className="image image--box image--round mr-3" style={{ width: 55 }}>
                    <img src="img/test.jpg" alt="" />
                </div>
                <div className="text--demibold">Студия К.И.Т.</div>
                <Button icon size='large' className="ml-5">
                    <img src="img/icons/exit.svg" alt="" className="icon text-h6" />
                </Button>

            </div>
        </header>
    )
}