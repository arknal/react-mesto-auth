import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/selectors";
import { authService } from "services/authService";

function Menu(props) {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return props.burger ? (
    <nav
      className={`header__burger-menu${
        props.isActive ? " header__burger-menu_active" : ""
      }`}
    >
      <p className="menu__profile">{user.email}</p>
      <button type="button" className="menu__logout" onClick={() => authService.logout(dispatch)}>
        Выйти
      </button>
    </nav>
  ) : (
    <nav className={"menu"}>
      <p className="menu__profile">{user.email}</p>
      <button type="button" className="menu__logout" onClick={() => authService.logout(dispatch)}>
        Выйти
      </button>
    </nav>
  );
}

export default Menu;
