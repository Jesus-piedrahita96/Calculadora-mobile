import {useEffect, useRef, useState} from 'react';

enum Operators {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export default function useCalculator() {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operators>();

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormula = formula.split(' ').at(0);
      setFormula(`${firstFormula} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    const subResult = subCalculation();
    setPrevNumber(`${subResult}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

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
        return setNumber(number + value);
      }
    }
    setNumber(number + value);
  };

  //eliminar ultimo caracter de la cadena de texto pero si no hay numeros retorna un cero como resultado final
  function eliminarUltimoCaracter() {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1); // 88
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1)); //
    }

    setNumber('0');
  }

  //agregar signo negativo a la cadena de texto y si ya existe un signo negativo lo elimina
  function agregarSignoNegativo(cadena: string) {
    // eslint-disable-next-line curly
    if (cadena.includes('-')) return setNumber(cadena.replace('-', ''));
    setNumber('-' + cadena);
  }

  const setLastNumber = () => {
    calculatorResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divide0peration = () => {
    setLastNumber();
    lastOperator.current = Operators.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.add;
  };

  //Limpiar resultados
  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('');
    lastOperator.current = undefined;
  };

  const calculatorResult = () => {
    const result = subCalculation();
    console.log(result);
    console.log('antes', formula);
    setFormula(`${result}`);
    console.log('despues', formula);
    console.log(number);

    lastOperator.current = undefined;
    setPrevNumber('0');
  };

  const subCalculation = (): number => {
    const [firstValue, operator, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    // eslint-disable-next-line curly
    if (isNaN(num2)) return num1;

    switch (operator) {
      case Operators.add:
        return num1 + num2;
      case Operators.subtract:
        return num1 - num2;
      case Operators.multiply:
        return num1 * num2;
      case Operators.divide:
        return num1 / num2;
      default:
        throw new Error('No se encontro el operador');
    }
  };

  return {
    //properties
    formula,
    number,
    prevNumber,

    //method
    buildNumber,
    eliminarUltimoCaracter,
    agregarSignoNegativo,
    divide0peration,
    multiplyOperation,
    subtractOperation,
    addOperation,
    clear,
    calculatorResult,
  };
}
