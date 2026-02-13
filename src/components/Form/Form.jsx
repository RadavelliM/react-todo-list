import React from "react";
import PropTypes from "prop-types";

import "./Form.css";

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                onChange={handleChange}
                type="text"
                id="tarefa"
                value={novaTarefa}
            ></input>
            <input type="submit" value="+"></input>
        </form>
    );
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
};
