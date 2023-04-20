import {View, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {WelcomeScreen, facebookLogo, googleLogo} from '../assets/images';
import {Text} from '@react-native-material/core';
import {Box} from '@react-native-material/core';
import {Button} from '@react-native-material/core';
import {buttonTitle} from '../utils/constents/buttonTitle';
import {placeholder} from '../utils/constents/placeholder';
import {colors} from '../utils/constents/colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {routes} from '../utils/constents/routes';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const handleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        navigation.navigate(routes.authenticated);
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  function onAuthStateChanged(user: any) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    GoogleSignin.configure({});
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber: any) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+91 7340557701')}
      />
    );
  }
  return (
    <View style={styles.homeContainer}>
      <Image source={WelcomeScreen} style={styles.vectorImage} />
      <Box style={styles.welcomeBox}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.loginText}>Login with your Phone Number</Text>
      </Box>
      <Box style={styles.phoneNumberBox}>
        <Box style={styles.phoneNumberBox2}>
          <Text style={styles.phoneNumber}>Phone Number</Text>
          <TextInput
            value={code}
            onChangeText={text => setCode(text)}
            placeholderTextColor={colors.placeholderColorPhoneNumber}
            placeholder={placeholder.phoneNumberInput}
            style={styles.phoneNumberInput}
          />
        </Box>
      </Box>
      <Box style={styles.buttonBox}>
        <Box style={styles.buttonBox2}>
          <Button
            onPress={() => confirmCode()}
            title={buttonTitle.sendOTP}
            style={styles.welcomeScreenButton}
          />
          <Box style={styles.singInTextBox}>
            <View style={styles.HRLine} />
            <Text style={styles.signInText}>Or Sign in with</Text>
            <View style={styles.HRLine} />
          </Box>
          <Button
            title={buttonTitle.googleLogin}
            style={styles.welcomeScreenButton}
            leading={<Image source={googleLogo} style={styles.loginLogo} />}
            onPress={handleLogin}
          />
          <Button
            title={buttonTitle.facebookLogin}
            style={styles.welcomeScreenButton}
            leading={<Image source={facebookLogo} style={styles.loginLogo} />}
          />
        </Box>
      </Box>
    </View>
  );
};

export default LoginScreen;
