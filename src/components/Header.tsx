import "./Header.scss";
import Logo from "../assets/logo.svg";
import Search_Btn from "../assets/search-btn.svg";

function Header() {
  return (
    <header>
      <section>
        <img className="logo" src={Logo} alt="" />
        <h1>Rescue Rabbits</h1>
      </section>
      <form action="">
        <input type="text" placeholder="SÖK" />
        <a>
          <img className="search-btn" src={Search_Btn} alt="" />
        </a>
      </form>
    </header>
  );
}

export default Header;
