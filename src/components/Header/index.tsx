import { useState } from 'react';
import useWindowDimensions from '../../hooks';
import BlockScreen from '../BlockScreen';

const Header: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }

  const handleMissClick = () => {
    setChecked(false);
  }

  const scrollPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="nav">
      <h3 className="nav__logo" onClick={scrollPage}>Ruslan Kamenskiy</h3>
      <ul
        className="nav__list"
        style={{ transform: `translateX(${checked || width > 992 ? '1.25%' : '100%'})` }}
        onClick={handleMissClick}
      >
        <li><a className="nav__link" href="/#home">Home</a></li>
        <li><a className="nav__link" href="/#about">About</a></li>
        <li><a className="nav__link" href="/#portfolio">Projects</a></li>
        <li><a className="nav__link" href="/#contact">Contact</a></li>
      </ul>
      <label className="nav__burger">
        <input
          type="checkbox"
          role="button"
          checked={checked}
          aria-label="display the menu"
          className="nav__burger-checkbox"
          onChange={handleChange}
        />
        <span className="nav__burger-span" />
        <span className="nav__burger-span" />
        <span className="nav__burger-span" />
      </label>
      <BlockScreen blocked={checked} unblock={handleMissClick} />
    </header>
  );
}

export default Header;
