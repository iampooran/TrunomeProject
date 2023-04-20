import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constents/colors';

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
    color: colors.white,
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 39,
  },
  loginText: {
    color: colors.white,
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  welcomeBox: {
    top: '10%',
    left: '10%',
  },
});
