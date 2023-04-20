import {View, Image, TextInput} from 'react-native';
import {Text} from '@react-native-material/core';
import React, {useState} from 'react';
import {styles} from './style';
import {Box} from '@react-native-material/core';
import {Button} from '@react-native-material/core';
import {colors} from '../../utils/constents/colors';
import {placeholder} from '../../utils/constents/placeholder';
import {
  HandleLogin,
  signInWithPhoneNumber,
} from '../../utils/functions/authFunctions';
import {buttonTitle} from '../../utils/constents/buttonTitle';
import {facebookLogo, googleLogo} from '../../assets/images';

const LoginBox = ({setConfirm}) => {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <>
      <Box style={styles.phoneNumberBox}>
        <Box style={styles.phoneNumberBox2}>
          <Text style={styles.phoneNumber}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            placeholderTextColor={colors.placeholderColorPhoneNumber}
            placeholder={placeholder.phoneNumberInput}
            style={styles.phoneNumberInput}
          />
        </Box>
      </Box>
      <Box style={styles.buttonBox}>
        <Box style={styles.buttonBox2}>
          <Button
            onPress={() => signInWithPhoneNumber(phoneNumber, setConfirm)}
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
            onPress={HandleLogin}
          />
          <Button
            title={buttonTitle.facebookLogin}
            style={styles.welcomeScreenButton}
            leading={<Image source={facebookLogo} style={styles.loginLogo} />}
          />
        </Box>
      </Box>
    </>
  );
};

export default LoginBox;
