import { useState } from 'react'
import './App.css'
import Card from './components/cards/card'
import Cart from './components/cart/cart'
import { getData } from './constants/db'

const courses = getData()
const telegram = window.window.Telegram.WebApp

const App = () => {
  // STATE
  const [cartItems, setCartItems] = useState([])
  // ADD-FUNC
  const onAddItem = item => {
    const existItem = cartItems.find(val => val.id == item.id)
    if (existItem) {
      const newData = cartItems.map(val =>
        val.id == item.id
          ? { ...existItem, quantity: existItem.quantity + 1 }
          : val
      )
      setCartItems(newData)
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }]
      setCartItems(newData)
    }
  }
  // REMOVE-FUNC
  const onRemoveItem = item => {
    const existItem = cartItems.find(val => val.id == item.id)
    if (existItem.quantity === 1) {
      const newData = cartItems.filter(val => val.id !== existItem.id)
      setCartItems(newData)
    } else {
      const newData = cartItems.map(val =>
        val.id === existItem.id
          ? { ...existItem, quantity: existItem.quantity - 1 }
          : val
      )
      setCartItems(newData)
    }
  }
  // TELEGRAM-HTTPS ULASH
  const onCheckout = () => {
    telegram.MainButton.text = 'Sotib olish :)'
    telegram.MainButton.show()
  }

  return (
    <>
      <h1 className='heading'>ALI Practice</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className='cards__container'>
        {courses.map(course => (
          <Card
            key={course.id}
            course={course}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </>
  )
}

export default App
