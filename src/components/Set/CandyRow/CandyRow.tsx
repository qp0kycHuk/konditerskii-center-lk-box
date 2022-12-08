import { Button } from '@src/components/ui/Button';
import { UiColors } from '@src/components/ui/types';
import { useDropdown } from '@src/hooks/use-dropdown';
import React, { FC, FormEventHandler, useRef } from 'react'

import './SetItem.scss';

export interface ISetItemRowProps {
    color?: UiColors
    showCross?: boolean
    showPlus?: boolean
    showCheck?: boolean
    onCrossClick?: (arg: any) => any
    onPlusClick?: (arg: any) => any
    onCheckClick?: (arg: any) => any
    bordered?: boolean
}

interface IProps extends ISetItemRowProps {
    onSubmit?: FormEventHandler<HTMLFormElement>,
    buttonSlot?: any
    contentSlot?: any

}

export const CandyRow: FC<IProps> = ({
    color = 'primary',
    showCross = false,
    showPlus = false,
    showCheck = false,
    onCrossClick,
    onPlusClick,
    onCheckClick,
    bordered = false,
    onSubmit,
    buttonSlot,
    contentSlot,
}) => {
    const formRef = useRef(null)
    const content = useRef(null)
    const { isOpen, toggle, styleHeight } = useDropdown(content)


    function onActionButtonClick(handler: (arg: any) => any) {
        return () => {
            if (formRef.current) {
                const formData = new FormData(formRef.current as HTMLFormElement)
                return handler(Object.fromEntries(formData))
            }
        }
    }

    return (<>
        <form ref={formRef} onSubmit={onSubmit} className={`set-item card ${bordered ? 'card--bordered' : ''} mb-4`}>
            <div className="set-item-preview">
                <div className="set-item__left">
                    {showCross ? (
                        <Button icon color={color} className='mb-2'
                            {...(onCrossClick ? { onClick: onActionButtonClick(onCrossClick) } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#cross" /></svg>
                        </Button>
                    ) : null}
                    {showPlus ? (
                        <Button icon color={color} className='mb-2'
                            {...(onPlusClick ? { onClick: onActionButtonClick(onPlusClick) } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#plus" /></svg>
                        </Button>
                    ) : null}
                    {showCheck ? (
                        <Button icon color={color} className='mb-2'
                            {...(onCheckClick ? { onClick: onActionButtonClick(onCheckClick) } : {})}>
                            <svg className="icon"><use xlinkHref="img/icons.svg#gal-ochka" /></svg>
                        </Button>
                    ) : null}
                </div>

                {buttonSlot}

                <Button className="set-item-toggle" variant='light' fab onClick={() => toggle()}>
                    <svg className="icon" style={{ transform: isOpen ? 'rotateZ(-90deg)' : '' }}><use xlinkHref="img/icons.svg#to-right" /></svg>
                </Button>
            </div>
            <div className="set-item-content-cover" ref={content} style={styleHeight}>
                <div className="set-item-content">
                    {contentSlot}
                </div>
            </div>
        </form>
    </>)
}

export const CandyRowPlaceholder: FC = () => {
    return (
        <div className='set-item set-item-placeholder card mb-4'>
            <div className="set-item-preview">
                <div className="set-item-img bg-l1"></div>
                <div className="set-item-name text-body-0 text--bold">
                    <div className='pb-6 bg-l1 flex'>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                        <div className="pl-10"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}