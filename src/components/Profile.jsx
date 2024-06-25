import { useState } from "react";
// Importe o componente FormProject
import FormProject from "./FormProject";

const Profile = () => {
  // Estado para controlar a visibilidade do FormProject
  const [showForm, setShowForm] = useState(false);

  // Função chamada quando o botão é clicado
  const handleClick = () => {
    setShowForm(true); // Altera o estado para mostrar o FormProject
  };

  const handleClose = () => {
    setShowForm(false); // Altera o estado para esconder o FormProject
  };

  return (
    <div className="profile">
      <div>
        {" "}
        <h2>Nome de usuário</h2>
        <button onClick={handleClick}>Adicionar Projeto</button>
      </div>
      {/* Renderiza o FormProject condicionalmente */}
      {showForm && <FormProject onClose={handleClose} visible={showForm} />}
    </div>
  );
};

export default Profile;
