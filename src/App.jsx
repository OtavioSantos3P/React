import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Contador React</h1>

      <h2
  style={{
    color:
      contador > 0 ? 'green' :
      contador < 0 ? 'red' : 'black'
  }}
>
  {contador}
</h2>

<Botao titulo="+" onClick={() => setContador(contador + 1)} />
<Botao titulo="−" onClick={() => setContador(contador - 1)} />
<Botao titulo="Zerar" onClick={() => setContador(0)} />
  
    </div>
  );
}

export default App;
