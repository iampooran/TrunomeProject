import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {WelcomeScreen} from '../../assets/images';
import {Text} from '@react-native-material/core';
import {Box} from '@react-native-material/core';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {onAuthStateChanged} from '../../utils/functions/authFunctions';
import VerifyOTP from '../../components/VerifyOTP/VerifyOTP';
import LoginBox from '../../components/LoginBox/LoginBox';
import {text} from '../../utils/constents/text';

const LoginScreen = () => {
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({});
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <View style={styles.homeContainer}>
      <Image source={WelcomeScreen} style={styles.vectorImage} />
      <Box style={styles.welcomeBox}>
        <Text style={styles.welcomeText}>{text.WelcomeText}</Text>
        <Text style={styles.loginText}>{text.WelcomeMessage}</Text>
      </Box>
      {confirm === null && <LoginBox setConfirm={setConfirm} />}
      {confirm !== null && <VerifyOTP confirm={confirm} />}
    </View>
  );
};

export default LoginScreen;
