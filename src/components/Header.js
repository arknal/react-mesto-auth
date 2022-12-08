import headerLogo from "../images/header__logo.svg";
import ProtectedMenu from "./ProtectedMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "redux/selectors";

function Header(props) {
  const currentUser = useSelector(userSelector);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <ProtectedMenu
        email={props.email}
        burger
        isActive={isBurgerMenuOpen}
        onClose={setIsBurgerMenuOpen}
      />
      <header className="header">
        <img src={headerLogo} alt="Логотип" className="header__logo" onClick={() => console.log(currentUser)} />
        <ProtectedMenu email={props.email} />
        {currentUser._id && (
          <div
            className={`header__burger${
              isBurgerMenuOpen ? " header__burger_active" : ""
            }`}
            onClick={(e) => {
              setIsBurgerMenuOpen(!isBurgerMenuOpen);
            }}
          />
        )}
      </header>
    </>
  );
}

export default Header;
