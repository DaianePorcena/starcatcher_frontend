// styles
import styles from "./Register.module.scss";

// images
import RegisterImage from "../../assets/images/register.png";

// hooks
import { useRef } from "react";
import usePasswordVisibilityToggle from "../../hooks/usePasswordVisibilityToggle";
import useTypeWriterEffect from "../../hooks/useTypeWriterEffect";

const Register = () => {
  const passwordInputRef = useRef(null);
  const titleRef = useTypeWriterEffect("<Cadastre-se!>", 100);
  const {
    isPasswordVisible,
    togglePasswordVisibility,
    isPasswordFilled,
    handlePasswordChange,
  } = usePasswordVisibilityToggle();

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={RegisterImage} alt="Astronauta Starcatcher" />
      </div>
      <div className={styles.form_container}>
        <h1 ref={titleRef}></h1>

        <form>
          <fieldset className={styles.fieldset_name}>
            <label>
              Nome
              <input
                type="text"
                name="name"
                required
                placeholder="Informe o nome"
              />
            </label>
            <label>
              Sobrenome
              <input
                type="email"
                name="email"
                required
                placeholder="Informe o sobrenome"
              />
            </label>
          </fieldset>
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
          <button className={styles.register} type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
