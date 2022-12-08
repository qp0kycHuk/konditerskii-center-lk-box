import { Button } from '@src/components/ui/Button'
import { useAppDispatch } from '@src/hooks/redux'
import { useCounter } from '@src/hooks/use-counter'
import { ISetItem } from '@src/models/ISetItem'
import { setSlice } from '@src/store/reducers/Set/SetSlice'
import React, { useEffect, useState, useRef, FC } from 'react'

interface IProps {
  item: ISetItem
  initialCount?: number
}

export const CandyCounter: FC<IProps> = ({ item, initialCount }) => {
  const { count, plus, minus, setCount } = useCounter(initialCount)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  useEffect(() => {
    if (count !== initialCount) {
      countChangeHandler()
    }
  }, [count])

  function countChangeHandler() {
    dispatch(setSlice.actions.updateCandy({
      ...item,
      count
    }))
  }

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCount(parseInt(event.target.value))
  }

  return (
    <div className="set-item-counter">
      <div className="set-item-counter__title">Кол-во шт.</div>
      <div className="set-item-counter__block">
        <Button className="set-item-counter__btn btn" color='text' variant='light' onClick={minus}>-</Button>
        <input type="number"
          className="set-item-counter__input"
          name='count'
          value={count as any}
          onChange={inputHandler} />
        <Button className="set-item-counter__btn btn" color='text' variant='light' onClick={plus}>+</Button>
      </div>
    </div>
  )
}
