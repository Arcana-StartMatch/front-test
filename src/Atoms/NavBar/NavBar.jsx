import LoginEl from "../LoginEl/LoginEl";
import "./navbar.css";
export default function NavBar() {
  return (
    <div className="nav_bar">
      <div className="nav_bar_els">
        <div className="nav_bar_el">Acceuil</div>
        <div className="nav_bar_el">Films</div>
        <div className="nav_bar_el">Cat 2</div>
      </div>
      <LoginEl></LoginEl>
    </div>
  );
}
