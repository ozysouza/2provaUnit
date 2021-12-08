import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  return (
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jogoteca</title>
    <link rel="stylesheet" href="{{ url_for('css', filename='custom.css') }}">
  </head>
  <body>
    <div class="container">
        {% with messages = get_flashed_messages() %}
            {% if messages %}
                <ul id="messages" class="list-unstyled">
                {% for message in messages %}
                    <li class="alert alert-success">{{ message }}</li>
                {% endfor %}
                </ul>
            {% endif %}
        {% endwith %}

        <h1>Faça seu login</h1>
        <form method="POST" action="{{ url_for('autenticar') }}">
            <input type="hidden" name="proxima" value="{{ proxima or url_for('index') }}">
            <p><label>Nome de usuário:</label> <input class="form-control" type="text" name="usuario" required></p>
            <p><label>Senha:</label> <input class="form-control" type="password" name="senha" required></p>
            <p><button class="btn btn-primary" type="submit">Entrar</button></p>
        </form>
    </div>
  </body>
  );
}

export default Login;