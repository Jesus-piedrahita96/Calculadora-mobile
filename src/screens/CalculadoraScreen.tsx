import {View, Text} from 'react-native';
import React from 'react';
import {colors, globalStyle} from '../config/themes/app-theme';
import CalculatorButton from '../components/CalculatorButton';

export default function CalculadoraScreen() {
  return (
    <View style={globalStyle.calculatorContainer}>
      <View>
        <Text style={globalStyle.mainResult}>15000</Text>
        <Text style={globalStyle.subResult}>5000</Text>
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton
          content="c"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton
          content="+/-"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton
          content="del"
          color={colors.lightGrey}
          textColor={true}
        />
        <CalculatorButton content="/" color={colors.orange} />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton content="7" />
        <CalculatorButton content="8" />
        <CalculatorButton content="9" />
        <CalculatorButton content="x" color={colors.orange} />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton content="4" />
        <CalculatorButton content="5" />
        <CalculatorButton content="6" />
        <CalculatorButton content="-" color={colors.orange} />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton content="1" />
        <CalculatorButton content="2" />
        <CalculatorButton content="3" />
        <CalculatorButton content="+" color={colors.orange} />
      </View>
      <View style={globalStyle.row}>
        <CalculatorButton content="0" estilo={true} />
        <CalculatorButton content="." />
        <CalculatorButton content="=" color={colors.orange} />
      </View>
    </View>
  );
}
