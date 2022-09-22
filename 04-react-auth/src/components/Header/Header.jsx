import './Header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo'>Logo</a>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <a href='/' className='header__item-link header__item-link--is-active'>Home</a>
        </li>
        <li className='header__list-item'>
          <a href='/login' className='header__item-link'>Login</a>
        </li>
        <li className='header__list-item'>
          <a href='/signup' className='header__item-link'>signup</a>
        </li>
        <li className='header__list-item'>
          <a href='/secret' className='header__item-link'>Secret</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
