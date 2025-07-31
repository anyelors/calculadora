import { useState } from 'react';

const teclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function Calculadora() {
  const [textoInput, setTextoInput] = useState('');
  const [inputUno, setInputUno] = useState('');
  const [signo, setSigno] = useState('');
  const [resultado, setResultado] = useState('');

  const manejarClick = (tecla) => {
    setTextoInput(prev => prev + tecla);
  };

  const borrarUltima = () => {
    setTextoInput(prev => prev.slice(0, -1));
  };

  const getNumero = (opr) => {
    setInputUno(textoInput);
    setSigno(opr);
    setTextoInput('');
  };

  const getResultado = () => {
    let result = 0;
    const vNum1 = parseFloat(inputUno);
    const vNum2 = parseFloat(textoInput);

    console.log(signo);
    console.log(vNum1);
    console.log(vNum2);

    if (isNaN(vNum1) || isNaN(vNum2)) {
      setResultado("Por favor, ingrese un número.");
      setTextoInput('');
      setInputUno('');
      setSigno('');
      return;
    }

    if (vNum2 === 0 && signo === 'division') {
      setResultado("No se puede dividir entre cero.");
      setTextoInput('');
      setInputUno('');
      setSigno('');
      return;
    }

    switch (signo) {
      case 'suma':
        result = vNum1 + vNum2;
        break;
      case 'resta':
        result = vNum1 - vNum2;
        break;
      case 'multiplicacion':
        result = vNum1 * vNum2;
        break;
      case 'division':
        result = vNum1 / vNum2;
        break;
      default:
        result = 0;
    }

    setResultado(result);
    setTextoInput('');
    setInputUno('');
    setSigno('');
  };

  return (
    <div className="tecladoContainer">
      <h2>Calculadora</h2>

      <input
        type="text"
        value={textoInput}
        disabled
        className="textoDisplay"
        placeholder="0"
      />

      <div className="teclas">
        {teclas.map((tecla) => (
          <button
            key={tecla}
            className="tecla"
            onClick={() => manejarClick(tecla)}
          >
            {tecla}
          </button>
        ))}
        <button
          className="tecla"
          onClick={() => getNumero('suma')}
        >
          ➕
        </button>
        <button
          className="tecla"
          onClick={() => getNumero('resta')}
        >
          ➖
        </button>
        <button
          className="tecla"
          onClick={() => getNumero('multiplicacion')}
        >
          ✖️
        </button>
        <button
          className="tecla"
          onClick={() => getNumero('division')}
        >
          ➗
        </button>
        <button
          className="tecla"
          onClick={borrarUltima}
        >
          🔙
        </button>
        <button
          className="tecla"
          onClick={getResultado}
        >
          🟰
        </button>
      </div>

      {resultado && (
        <div className="display">
          <strong>Resultado: {resultado}</strong>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
