import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
  },
  vectorImage: {
    position: 'absolute',
    width: '100%',
  },
  welcomeText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 39,
  },
  loginText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  welcomeBox: {
    top: '10%',
    left: '10%',
  },
  phoneNumberBox: {
    // width: '85%',
    // left: '5%',
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
    borderColor: '#1CA7B1',
  },
  buttonBox: {
    // width: '90%',
    top: '42%',
    fontWeight: 700,
  },
  welcomeScreenButton: {
    borderRadius: 8,
    // padding: 48,
    fontWeight: 700,
    paddingTop: 3,
    marginBottom: 15,
    height: 45,
    backgroundColor: '#1CA7B1',
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
    color: '#9D9D9D',
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
    backgroundColor: '#9D9D9D',
    marginLeft: 10,
    marginRight: 10,
  },
});
