import { Link } from "react-router-dom";
import "./MainLayout.css";
function MainLayout() {
  return (
    <div>
      <h2>Welcome to the home page</h2>
      <nav>
        <ul className="aa">
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/registration">REGISTRATION</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainLayout;
