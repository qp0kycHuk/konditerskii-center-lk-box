import React, { useEffect, useState, useRef } from 'react'
import { useDropdown } from '@src/hooks/use-dropdown';

import './ContactForm.scss';

export const ContactForm = () => {
    const content = useRef(null)

    const { isOpen, toggle, styleHeight } = useDropdown(content)


    return (
        <div className="set-contact card">
            <div className="set-contact-top" onClick={() => toggle()}>
                Контактная информация
                <svg className="icon text-body-1" style={{ transform: isOpen ? 'rotateZ(90deg)' : '' }} >
                    <use xlinkHref="img/icons.svg#to-right" />
                </svg>
            </div>
            <div className="set-contact-content" ref={content} style={styleHeight}>
                <div className="set-contact-form">
                    <div className="set-contact-form__fields">
                        <div className="set-contact-form__group">
                            <div className="form-field">
                                <div className="form-input-cover">
                                    <input className="form-input form-input-large" placeholder="Имя" />
                                </div>
                            </div>
                            <div className="form-field">
                                <div className="form-input-cover">
                                    <input className="form-input form-input-large" placeholder="Телефон" />
                                </div>
                            </div>
                            <div className="form-field">
                                <div className="form-input-cover">
                                    <input className="form-input form-input-large" placeholder="E-mail" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}