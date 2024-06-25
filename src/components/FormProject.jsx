/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FormProject = ({ onClose }) => {
  return (
    <div className="container_form">
      <div>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Adicionar Projeto</h2>
        <form>
          <label>
            <input type="text" name="title" placeholder="Título" required />
          </label>
          <label>
            <input type="text" name="link" placeholder="Link" required />
          </label>
          <label>
            <input type="file" name="image" placeholder="imagem" required />
          </label>
          <label>
            <textarea
              name="description"
              rows={4}
              placeholder="Escreva uma descrição do projeto..."
            ></textarea>
          </label>
        </form>
        <div className="buttons">
          <Link>Visualizar publicação</Link>
          <button type="submit" className="save">
            Salvar
          </button>
          <button className="cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormProject;
