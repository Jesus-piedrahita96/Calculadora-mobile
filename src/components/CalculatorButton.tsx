import {Text, Pressable} from 'react-native';
import React from 'react';
import {colors, globalStyle} from '../config/themes/app-theme';

export interface Props {
  content: string;
  color?: string;
  estilo?: boolean;
  textColor?: boolean;
  onPres: () => void;
}

export default function CalculatorButton({
  content,
  color = colors.darkGrey,
  estilo = false,
  textColor = false,
  onPres,
}: Props) {
  return (
    <Pressable
      onPress={() => onPres()}
      style={({pressed}) => ({
        ...globalStyle.button,
        backgroundColor: color,
        width: estilo ? 150 : 75,
        alignItems: estilo ? 'flex-start' : 'center',
        padding: estilo ? 7 : 0,
        opacity: pressed ? 0.5 : 1,
      })}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...globalStyle.buttonText,
          color: textColor ? 'black' : 'white',
        }}>
        {content}
      </Text>
    </Pressable>
  );
}
