import {View, Text} from 'react-native';
import React from 'react';

import {colors, globalStyle} from '../config/themes/app-theme';

// Files
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

export default function CalculadoraScreen() {
  const {
    number,
    buildNumber,
    setNumber,
    eliminarUltimoCaracter,
    agregarSignoNegativo,
  } = useCalculator();
  return (
    <View style={globalStyle.calculatorContainer}>
      <View>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyle.mainResult}>
          {number}
        </Text>
        <Text style={globalStyle.subResult}>5000</Text>
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton
          onPres={() => setNumber('0')}
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
          onPres={() => eliminarUltimoCaracter(number)}
          content="del"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton
          onPres={() => console.log('/')}
          content="/"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton onPres={() => buildNumber('7')} content="7" />
        <CalculatorButton onPres={() => buildNumber('8')} content="8" />
        <CalculatorButton onPres={() => buildNumber('9')} content="9" />
        <CalculatorButton
          onPres={() => console.log('x')}
          content="x"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton onPres={() => buildNumber('4')} content="4" />
        <CalculatorButton onPres={() => buildNumber('5')} content="5" />
        <CalculatorButton onPres={() => buildNumber('6')} content="6" />
        <CalculatorButton
          onPres={() => console.log('-')}
          content="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton onPres={() => buildNumber('1')} content="1" />
        <CalculatorButton onPres={() => buildNumber('2')} content="2" />
        <CalculatorButton onPres={() => buildNumber('3')} content="3" />
        <CalculatorButton
          onPres={() => console.log('+')}
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
          onPres={() => console.log('=')}
          content="="
          color={colors.orange}
        />
      </View>
    </View>
  );
}
