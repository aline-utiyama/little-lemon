import logo from '../assets/images/Logo.svg';
import navIcon from '../assets/images/icon_hamburger_menu.svg'
const Header = () => {
  return(
    <header className='header'>
      <div className='nav'>
        <img src={logo} alt='Logo'></img>
        <img src={navIcon} alt="Nav Icon"></img>
      </div>
    </header>
  )
}

export default Header;