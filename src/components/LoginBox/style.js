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
  loginLogo: {
    marginLeft: 1,
    width: 32,
    height: 20,
  },
  signInText: {
    fontWeight: 500,
    color: colors.signInText,
    fontSize: 14,
  },
  singInTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 14,
    marginBottom: 20,
  },
  HRLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.HRLine,
    marginLeft: 10,
    marginRight: 10,
  },
});
