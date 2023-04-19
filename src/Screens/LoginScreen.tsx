import {View, Image, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import {WelcomeScreen, facebookLogo, googleLogo} from '../assets/images';
import {Text} from '@react-native-material/core';
import {Box} from '@react-native-material/core';
import {Button} from '@react-native-material/core';

const LoginScreen = () => {
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
            placeholderTextColor="#9D9D9D"
            placeholder="Please enter your phone number"
            style={styles.phoneNumberInput}
          />
        </Box>
      </Box>
      <Box style={styles.buttonBox}>
        <Box style={styles.buttonBox2}>
          <Button title="Send OTP" style={styles.welcomeScreenButton} />
          <Box style={styles.singInTextBox}>
            <View style={styles.HRLine} />
            <Text style={styles.signInText}>Or Sign in with</Text>
            <View style={styles.HRLine} />
          </Box>
          <Button
            title="Sign in with Google"
            style={styles.welcomeScreenButton}
            leading={<Image source={googleLogo} style={styles.loginLogo} />}
          />
          <Button
            title="Sign in with Facebook"
            style={styles.welcomeScreenButton}
            leading={<Image source={facebookLogo} style={styles.loginLogo} />}
          />
        </Box>
      </Box>
    </View>
  );
};

export default LoginScreen;
