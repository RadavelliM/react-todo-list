import React from "react";
import PropTypes from "prop-types";

import "./Tarefas.css";

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <div className="acoes">
                        <button
                            onClick={(e) => handleEdit(e, index)}
                            className="edit"
                        >
                            Editar
                        </button>

                        <button
                            onClick={(e) => handleDelete(e, index)}
                            className="delete"
                        >
                            Apagar
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
