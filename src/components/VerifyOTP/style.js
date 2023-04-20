import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constents/colors';

export const styles = StyleSheet.create({
  phoneNumberBox: {
    top: '39%',
    alignItems: 'center',
  },
  phoneNumberBox2: {
    width: '90%',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
  },
  phoneNumberInput: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: colors.phoneNumberInputBorder,
  },
  buttonBox: {
    top: '42%',
    fontWeight: 700,
  },
  welcomeScreenButton: {
    borderRadius: 8,
    fontWeight: 700,
    paddingTop: 3,
    marginBottom: 15,
    height: 45,
    backgroundColor: colors.welcomeScreenButtonBackground,
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.25)',
    width: '90%',
  },
  buttonBox2: {
    alignItems: 'center',
  },
  errorMessage: {
    color: colors.Red,
  },
});
