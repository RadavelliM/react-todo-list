import React, { Component } from "react";
import "./Main.css";

import Form from "./Form/Form";
import Tarefas from "./Tarefas/Tarefas";

export default class Main extends Component {
    constructor(props) {
        //propriedades
        super(props);
        this.state = {
            novaTarefa: "",
            tarefas: [],
            editando: -1, // verificar se esta editando ou nao
        };
    }

    componentDidMount() {
        const tarefasLS = JSON.parse(localStorage.getItem("tarefasLS"));

        if (!tarefasLS) return;

        this.setState({
            tarefas: tarefasLS,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem("tarefasLS", JSON.stringify(tarefas));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, editando } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.includes(novaTarefa)) return;

        const novasTarefa = [...tarefas]; // copia do array para alterar o estado (state)

        if (editando === -1) {
            // se nao estiver em estado de editar, vai criar tarefas
            this.setState({
                tarefas: [...novasTarefa, novaTarefa],
                novaTarefa: "",
            });
        } else {
            // se estiver (!== -1) vai editar
            novasTarefa[editando] = novaTarefa; // acessa o indice, e substitui ele pelo estado que foi alterado em em handleEdit
            this.setState({
                tarefas: [...novasTarefa],
                editando: -1,
                novaTarefa: "",
            });
        }
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    };

    handleEdit = (e, index) => {
        // index é pego como parametro da funcao na chamada

        const { tarefas } = this.state;

        this.setState({
            editando: index, // a flag de editando é o index da tarefa
            novaTarefa: tarefas[index], //define a tarefa atual atraves do indice do array
        });
    };

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefa = [...tarefas];

        novasTarefa.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefa],
        });
    };

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1 id="titulo">Lista de Tarefas</h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas
                    tarefas={tarefas}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}
