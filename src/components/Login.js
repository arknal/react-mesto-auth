import { useState } from "react";
import { Link } from "react-router-dom";
import { userApi } from "./../utils/UserApi";

function Login({ infoTooltipState, onPrompt, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    userApi
      .login({
        password,
        email,
      })
      .then((res) => {
        localStorage.setItem("token", res.token);
        setIsLoading(false);
        onPrompt({
          isOpen: true,
          status: true,
          text: "Вы успешно авторизовались!",
        });
        props.onLogin(email)
        setTimeout(() => {
          onPrompt({
            isOpen: false,
            status: true,
            text: "Вы успешно авторизовались!",
          });
          props.onAuth(true);
        }, 1000);
      })
      .catch((e) => {
        setIsLoading(false);
        let errorMsg;
        switch (e) {
          case 400:
            errorMsg = "Введены некорректные данные";
            break;
          case 401:
            errorMsg = "Пользователь с таким email не найден";
            break;
          default:
            errorMsg = "Что-то пошло не так! Попробуйте ещё раз.";
        }
        onPrompt({
          isOpen: true,
          status: false,
          text: errorMsg,
        });
        setTimeout(
          () =>
            onPrompt({
              isOpen: false,
              status: false,
              text: errorMsg,
            }),
          1000
        );
      });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <form className="form" noValidate onSubmit={handleSubmit}>
        <h2 className="form__title form__title_theme_dark form__title_text-align_center">
          Вход
        </h2>
        <div className="form__field">
          <input
            required
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            className="form__input form__input_theme_dark"
            placeholder="Email"
          />
          <span className="form__error email-error"></span>
        </div>
        <div className="form__field">
          <input
            required
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            className="form__input form__input_theme_dark"
            placeholder="Пароль"
          />
          <span className="form__error password-error"></span>
        </div>
        <button
          className="form__submit-btn form__submit-btn_theme_dark login__btn"
          type="submit"
        >
          {isLoading ? "Вход..." : "Войти"}
        </button>
        <Link to="/sign-up" className="login__link">
          Нет аккаунта? Зарегистрироваться
        </Link>
      </form>
    </div>
  );
}

export default Login;
