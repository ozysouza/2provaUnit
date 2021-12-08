import React from 'react'
import {Link} from 'react-router-dom'

const Editar = () => {

  return (
   <form action="{{ url_for('atualizar') }}" method="post">
     <input type="hidden" name="id" value="{{ jogo.id }}">
        <fieldset>
          <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" class="form-control" value="{{ jogo.nome }}">
          </div>
          <div class="form-group">
            <label for="categoria">Categoria</label>
            <input type="text" id="categoria" name="categoria" class="form-control" value="{{ jogo.categoria }}">
          </div>
          <div class="form-group">
            <label for="console">Console</label>
            <input type="text" id="console" name="console" class="form-control" value="{{ jogo.console }}">
          </div>
          <button type="submit" class="btn btn-primary btn-salvar">Salvar</button>
          <a class="btn btn-danger" href="{{ url_for('index') }}">Voltar</a>
        </fieldset>
   </form>
  );
}

export default Editar;