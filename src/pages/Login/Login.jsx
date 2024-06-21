import { Link } from "react-router-dom";

// styles
import styles from "./Login.module.scss";

// images
import LoginImage from "../../assets/images/login.png";

// hooks
import { useRef } from "react";
import usePasswordVisibilityToggle from "../../hooks/usePasswordVisibilityToggle";

const Login = () => {
  const passwordInputRef = useRef(null);
  const {
    isPasswordVisible,
    togglePasswordVisibility,
    isPasswordFilled,
    handlePasswordChange,
  } = usePasswordVisibilityToggle();

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={LoginImage} alt="Astronauta Starcatcher" />
      </div>
      <div className={styles.form_container}>
        <h1>&lt;Acessar o Starcatcher Portfólio!&gt;</h1>

        <form>
          <label>
            Email address
            <input
              type="email"
              name="email"
              required
              placeholder="Informe o e-mail"
            />
          </label>
          <label>
            Password
            <input
              ref={passwordInputRef}
              type="password"
              name="password"
              required
              placeholder="Informe a sua senha"
              onChange={handlePasswordChange}
            />
            {isPasswordFilled && (
              <button
                className={styles.btn_show}
                onClick={(event) =>
                  togglePasswordVisibility(event, passwordInputRef)
                }
              >
                {isPasswordVisible ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            )}
          </label>
          <button className={styles.login} type="submit">
            Entrar
          </button>
        </form>
        <div className={styles.link}>
          <Link to={"/create-account"}>Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
