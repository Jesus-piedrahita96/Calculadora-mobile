import {StyleSheet} from 'react-native';

export const colors = {
  darkGrey: '#2d2d2d',
  lightGrey: '#9b9b9b',
  orange: '#ff9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};

export const globalStyle = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainResult: {
    marginBottom: 10,
    color: colors.textPrimary,
    fontSize: 50,
    fontWeight: '400',
    textAlign: 'right',
  },
  subResult: {
    marginBottom: 30,
    color: colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
    fontWeight: '300',
  },
  row: {
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 5,
    height: 75,
    width: 75,
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white',
  },
});
