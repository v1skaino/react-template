# Arquitetura React: Presentational and Containers

A arquitetura "Presentational and Containers" é uma abordagem para organizar componentes em aplicações React. Ela promove a separação de responsabilidades, tornando o código mais modular, reutilizável e fácil de manter.

## Conceitos

### Componentes Presentational

- **Responsabilidade**: Focar exclusivamente na renderização da interface do usuário (UI).
- **Função**: Exibir dados recebidos via `props` e emitir eventos para os componentes pais.
- **Características**:
  - Não têm lógica de negócio.
  - Não acessam diretamente o estado global ou serviços externos.
- **Exemplo**:

  ```jsx
  import React from 'react';

  const TodoList = ({ todos, onTodoClick }) => (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} onClick={() => onTodoClick(index)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );

  export default TodoList;
  ```

### Componentes Containers

- **Responsabilidade**: Gerenciar o estado e a lógica de negócio.
- **Função**: Fornecer dados e callbacks para os componentes Presentational.
- **Características**:

  - Conectam-se a fontes de dados externas (ex.: Redux, API, Context API).

- **Exemplo**:

  ```jsx
  import React, { useState } from 'react';
  import TodoList from './TodoList';

  const TodoApp = () => {
    const [todos, setTodos] = useState([{ text: 'Learn React' }, { text: 'Build a project' }]);

    const handleTodoClick = (index) => {
      console.log(`Todo ${index} clicked!`);
    };

    return <TodoList todos={todos} onTodoClick={handleTodoClick} />;
  };

  export default TodoApp;
  ```

## Benefícios

- **Separação de responsabilidades**: Facilita a manutenção e os testes, pois a lógica de negócio e a UI são claramente separadas.
- **Reutilização**: Componentes Presentational podem ser reutilizados em diferentes partes da aplicação.
- **Testabilidade**: Componentes Presentational são mais fáceis de testar, já que dependem apenas das `props`.
- **Colaboração**: Designers podem trabalhar nos componentes Presentational enquanto desenvolvedores focam na lógica de negócio.

## Fluxo Geral

1. **Container Component** gerencia o estado e a lógica de negócio.
2. Ele passa os dados e callbacks necessários para os **Presentational Components** via `props`.
3. **Presentational Components** exibem a interface com base nas `props` e notificam o **Container Component** sobre eventos (ex.: cliques, formulários).
