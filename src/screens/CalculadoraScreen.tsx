import {View, Text} from 'react-native';
import React from 'react';

import {colors, globalStyle} from '../config/themes/app-theme';

// Files
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

export default function CalculadoraScreen() {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    eliminarUltimoCaracter,
    agregarSignoNegativo,
    divide0peration,
    multiplyOperation,
    subtractOperation,
    addOperation,
    clear,
    calculatorResult,
  } = useCalculator();
  return (
    <View style={globalStyle.calculatorContainer}>
      <View>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyle.mainResult}>
          {formula}
        </Text>
        {formula === prevNumber ? (
          // eslint-disable-next-line react/self-closing-comp
          <Text style={globalStyle.subResult}></Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyle.subResult}>
            {prevNumber === '0' ? ' ' : prevNumber}
          </Text>
        )}
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton
          onPres={clear}
          content="c"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton
          onPres={() => agregarSignoNegativo(number)}
          content="+/-"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton
          onPres={eliminarUltimoCaracter}
          content="del"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton
          onPres={divide0peration}
          content="/"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton onPres={() => buildNumber('7')} content="7" />
        <CalculatorButton onPres={() => buildNumber('8')} content="8" />
        <CalculatorButton onPres={() => buildNumber('9')} content="9" />
        <CalculatorButton
          onPres={multiplyOperation}
          content="x"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton onPres={() => buildNumber('4')} content="4" />
        <CalculatorButton onPres={() => buildNumber('5')} content="5" />
        <CalculatorButton onPres={() => buildNumber('6')} content="6" />
        <CalculatorButton
          onPres={subtractOperation}
          content="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton onPres={() => buildNumber('1')} content="1" />
        <CalculatorButton onPres={() => buildNumber('2')} content="2" />
        <CalculatorButton onPres={() => buildNumber('3')} content="3" />
        <CalculatorButton
          onPres={addOperation}
          content="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton
          onPres={() => buildNumber('0')}
          content="0"
          estilo={true}
        />
        <CalculatorButton onPres={() => buildNumber('.')} content="." />
        <CalculatorButton
          onPres={calculatorResult}
          content="="
          color={colors.orange}
        />
      </View>
    </View>
  );
}
