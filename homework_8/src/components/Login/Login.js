import React, { useState } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router";
import { authorize, getIsAuthorized } from "../../ducks";

const Login = (props) => {
  //создаем переменную и сеттер, ""- значение по умолчанию
  const [authToken, inputKeyHandler] = useState("");

  //берем методы из пропсов
  const { isAuthorized, authorize } = props;

  //проверка на нажатую кнопку в инпуте
  const checkIfEnter = (key) => {
    key === "Enter" && authToken
      ? authorize(authToken)
      : console.log("key: ", key);
  };

  //обработчик нажатия кнопки = Enter в инпуте
  const sendTokenButton = () => {
    if (authToken) {
      authorize(authToken);
    } else {
      console.log("sendTokenButton error");
    }
  };

  //авторизованы => на свою страницу
  if (isAuthorized) {
    return <Redirect to="/users/me" />;
  }

  return (
    <div>
      <p>LoginPage</p>
      <p>
        Получить токен нужно на своей странице github. Перейдите по{" "}
        <a
          href="https://github.com/settings/tokens"
          target="blank"
          rel="noopener noreferrer"
        >
          адресу
        </a>{" "}
        и создайте себе токен. Запишите куда нибудь токен, так как после
        создания доступ к нему будет только один раз.
      </p>

      <input
        className="login__input"
        placeholder="Your token"
        autoFocus={true}
        value={authToken}
        onKeyPress={(event) => checkIfEnter(event.key)}
        onChange={(event) => inputKeyHandler(event.target.value)}
      ></input>

      <button onClick={sendTokenButton}>Send Token</button>
    </div>
  );
};
//пхаем переменную в пропсы
const mapStateToProps = (state) => ({
  isAuthorized: getIsAuthorized(state),
});
//метод в пропсы
const mapDispatchToProps = { authorize };

//оборачиваем компонент
export default connect(mapStateToProps, mapDispatchToProps)(Login);
//можно так, раз редусер один
// export default connect(mapStateToProps, {authorize})(Login);
