import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

// componente, estado, propriedade

function App() {

  

  const [devs, setDevs] = useState([]);

  

  useEffect(() => {
    async function loadDevs() {
      const resp = await api.get('/devs');

      setDevs(resp.data);
    }

    loadDevs();
  }, []);

  async function submit(data) {
    const resp = await api.post('/devs', data);
    
    // nao pode usar push
    setDevs([...devs, resp.data]);
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={submit}/>
      </aside>

      <main>
        <ul>          
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div> 
  );
}

export default App;

// devs.map(dev => ( 'quando se usa (), como se fosse um return dentro do copor, declara o retorno da funcao, com {} é o corpo'