import './Header.scss';
import Logo from '../assets/logo.svg';
import Search_Btn from '../assets/search-btn.svg';

function Header() {
    return (
        <header>
            <img className='logo' src={ Logo } alt="" />
            <h1>Rescue Rabbits</h1>
            <input type="text" placeholder='SÖK' />
            <img className='search-btn' src={ Search_Btn } alt="" />
        </header>
    );
}

export default Header;