import {View, Image, TextInput} from 'react-native';
import React, {useEffect} from 'react';
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

const LoginScreen = ({navigation}) => {
  const handleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
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

  useEffect(() => {
    GoogleSignin.configure({});
  }, []);
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
            placeholderTextColor={colors.placeholderColorPhoneNumber}
            placeholder={placeholder.phoneNumberInput}
            style={styles.phoneNumberInput}
          />
        </Box>
      </Box>
      <Box style={styles.buttonBox}>
        <Box style={styles.buttonBox2}>
          <Button
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
