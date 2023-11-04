const Header: React.FC = () => {
  const scrollPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="nav">
      <nav className="wrapper">
        <a href="#!" className="nav__logo" onClick={scrollPage}>Ruslan Kamenskiy</a>
        <button
          className="nav__toggle"
        >
          <i className="bi bi-list"></i>
        </button>
        <ul className="nav__list">
          <li><a className="nav__link" href="/#home">Home</a></li>
          <li><a className="nav__link" href="/#about">About</a></li>
          <li><a className="nav__link" href="/#portfolio">Projects</a></li>
          <li><a className="nav__link" href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
