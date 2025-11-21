function Botao({ titulo, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: '5px',
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer'
      }}
    >
      {titulo}
    </button>
  );
}

export default Botao;
