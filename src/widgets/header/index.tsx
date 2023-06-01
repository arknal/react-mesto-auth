import ProtectedMenu from "components/ProtectedMenu.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "redux/selectors";
import "./index.scss";

function Header() {
  const currentUser = useSelector(userSelector);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <ProtectedMenu
        burger
        isActive={isBurgerMenuOpen}
        onClose={setIsBurgerMenuOpen}
      />
      <header className="header">
        <img src="./header__logo.svg" alt="Логотип" className="header__logo" />
        <ProtectedMenu />
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
