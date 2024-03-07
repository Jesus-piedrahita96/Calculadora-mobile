import {useState} from 'react';

export default function useCalculator() {
  const [number, setNumber] = useState('0');

  const buildNumber = (value: string) => {
    // evitar propagacion del punto como dato de entrada solo se acepta un putno para numeros decimales
    // eslint-disable-next-line curly
    if (number.includes('.') && value === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (value === '.') {
        return setNumber(number + value);
      }

      //evaluar si es otro cero y no hay un punto
      if (value === '0' && number.includes('.')) {
        return setNumber(number + value);
      }

      //evaluar si es diferente de cero, no hay punto y es el primer numero
      if (value !== '0' && !number.includes('.')) {
        return setNumber(value);
      }

      //evitar la propagacion de 00000
      if (value === '0' && !number.includes('.')) {
        return setNumber(number);
      }
    }
    setNumber(number + value);
  };

  //eliminar ultimo caracter de la cadena de texto pero si no hay numeros retorna un cero como resultado final
  function eliminarUltimoCaracter(cadena: string) {
    const eliminado = cadena.slice(0, -1);
    if (eliminado === '' || eliminado === '-') {
      return setNumber('0');
    }
    return setNumber(eliminado);
  }

  //agregar signo negativo a la cadena de texto y si ya existe un signo negativo lo elimina
  function agregarSignoNegativo(cadena: string) {
    // eslint-disable-next-line curly
    if (cadena.includes('-')) return setNumber(cadena.replace('-', ''));
    setNumber('-' + cadena);
  }

  return {
    //properties
    number,

    //method
    buildNumber,
    setNumber,
    eliminarUltimoCaracter,
    agregarSignoNegativo,
  };
}
