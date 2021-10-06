import { useState } from 'react';
import * as C from './App.styles';

import { Item } from './types/Item';

import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar pão na Padaria',
      done: false
    },
    {
      id: 2,
      name: 'Esquentar o Café',
      done: false
    },
  ]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova Tarefa */}

        {/* Lista de Tarefas */}

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;