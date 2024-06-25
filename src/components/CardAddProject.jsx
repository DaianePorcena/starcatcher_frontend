import { useState } from "react";
// Importe o componente FormProject
import FormProject from "./FormProject";

const CardAddProject = () => {
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
    <div className="card_add_project">
      <button onClick={handleClick}>
        <i className="fa-sharp fa-solid fa-images"></i>
        <p>Adicione seu primeiro projeto</p>
      </button>
      {/* Renderiza o FormProject condicionalmente */}
      {showForm && <FormProject onClose={handleClose} visible={showForm} />}
    </div>
  );
};

export default CardAddProject;
