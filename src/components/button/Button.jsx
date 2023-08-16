import './Button.css'

const Button = props => {
  const { type, title, onClick, disable } = props
  return (
    <div
      className={`btn ${
        (type === 'add' && 'add') ||
        (type === 'remove' && 'remove') ||
        (type === 'checkout' && 'checkout')
      } ${disable === true && 'disable'}`}
      onClick={onClick}
      disabled={disable}
    >
      {title}
    </div>
  )
}

export default Button
