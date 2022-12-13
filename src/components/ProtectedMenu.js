import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userSelector } from "redux/selectors";
import Menu from "./Menu";

function ProtectedMenu(props) {
  const currentUser = useSelector(userSelector);
  const location = useLocation();

  const config = {};

  if (!currentUser._id) {
    switch (location.pathname) {
      case "/sign-in":
        config.link = "/sign-up";
        config.text = "Регистрация";
        break;
      default:
        config.link = "/sign-in";
        config.text = "Войти";
        break;
    }
  }

  return !currentUser._id && !props.burger ? (
    <Link to={config.link} className="menu__item">
      {config.text}
    </Link>
  ) : (
    <Menu {...props} />
  );
}

export default ProtectedMenu;
