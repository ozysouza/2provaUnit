import React from 'react'
import {Link} from 'react-router-dom'

const Lista = () => {

  return (
    <div className="App">
     <a class="btn btn-primary" href="{{ url_for('novo') }}">Novo Jogo</a>
            <table class="table table-striped table-responsive table-bordered">
                <thead class="thead-default">
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Console</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ jogo.nome }}</td>
                        <td>{{ jogo.categoria }}</td>
                        <td>{{ jogo.console }}</td>
                        <td>
                            <a href="{{ url_for('editar', id=jogo.id) }}">Editar</a>
                            <a href="{{ url_for('deletar', id=jogo.id) }}">Deletar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
  );
}

export default Lista;