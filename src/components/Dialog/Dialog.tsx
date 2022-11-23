import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import './Dialog.scss';

export function Dialog({ isOpen, options, children, onClose }) {
    const $content = useRef()

    useEffect(() => {
        if (isOpen) {
            show()
        } else {
            close()
        }

        return () => document.body.style.overflow = ''
    }, [isOpen])


    function show() {
        document.body.style.overflow = 'hidden'
    }

    function close() {
        document.body.style.overflow = ''
        onClose()
    }


    return (ReactDOM.createPortal(
        <div className={'dialog ' + (isOpen ? 'active' : '')}>
            <div className="dialog-shadow" onClick={close}></div>
            <div className="dialog-content" ref={$content}>
                {isOpen && children}
            </div>
        </div>,
        document.body)
    )
}

