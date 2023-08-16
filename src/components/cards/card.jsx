import { useState } from 'react'
import Button from '../button/Button.jsx'
import './card.css'

const Card = props => {
  const { course, onAddItem, onRemoveItem } = props
  // STATE
  const [count, setcount] = useState(0)
  // ADD COUNT
  const handleIncrement = () => {
    setcount(prev => prev + 1)
    onAddItem(course)
  }
  // REMOV COUNT
  const handleDecrement = () => {
    setcount(prev => prev - 1)
    onRemoveItem(course)
  }

  return (
    <div className='card'>
      <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>
        {count}
      </span>
      <div className='image__container'>
        <img
          src={course.Image}
          alt={course.title}
          width={'100%'}
          height={'320px'}
        />
      </div>
      <div className='card__body'>
        <h2 className='card__title'>{course.title}</h2>
        <div className='card__price'>
          {course.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
        </div>
      </div>
      <div className='hr'></div>

      <div className='btn__container'>
        <Button title={'+'} type={'add'} onClick={handleIncrement} />
        {count !== 0 && (
          <Button title={'-'} type={'remove'} onClick={handleDecrement} />
        )}
      </div>
    </div>
  )
}

export default Card
