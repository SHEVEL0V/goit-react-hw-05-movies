import { NavLink } from 'react-router-dom';
import s from './header.module.css';

export default function Header() {
  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to="movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
