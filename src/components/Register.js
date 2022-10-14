import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { userApi } from './../utils/UserApi';

function Register({onPrompt, ...props}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    userApi
    .register({
      email,
      password,
    })
    .then((res) => {
      setIsLoading(false);
      onPrompt({
        isOpen: true,
        status: true,
        text: "Вы успешно зарегистрировались!",
      });
      setTimeout(() => {
        history.push("/sign-in");
      }, 1000);
    })
    .catch((e) => {
      setIsLoading(false);
      onPrompt({
        isOpen: true,
        status: false,
        text: e === 400 ? "Некорректно заполнено одно из полей " : "Что-то пошло не так! Попробуйте ещё раз.",
      });
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
          Регистрация
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
         {isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
        <Link to="/sign-in" className="login__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
