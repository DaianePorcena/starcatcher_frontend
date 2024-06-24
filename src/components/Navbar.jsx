import { NavLink } from "react-router-dom";

import LogoImg from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="logo" to="/">
        <img src={LogoImg} alt="Logo starcatcher" />
        Starcatcher
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Meus projetos</NavLink>
        </li>
        <li>
          <NavLink to="/discover">Descobrir</NavLink>
        </li>
        <li>
          <button>Sair</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
