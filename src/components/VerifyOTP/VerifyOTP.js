import {Text} from 'react-native';
import {TextInput} from 'react-native';
import React, {useState} from 'react';
import {Box} from '@react-native-material/core';
import {styles} from './style';
import {colors} from '../../utils/constents/colors';
import {placeholder} from '../../utils/constents/placeholder';
import {confirmCode} from '../../utils/functions/authFunctions';
import {buttonTitle} from '../../utils/constents/buttonTitle';
import {Button} from '@react-native-material/core';

const VerifyOTP = ({confirm}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [code, setCode] = useState('');
  return (
    <>
      <Box style={styles.phoneNumberBox}>
        <Box style={styles.phoneNumberBox2}>
          {errorMessage.length !== 0 && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
          <Text style={styles.phoneNumber}>Please Enter Your OTP</Text>
          <TextInput
            value={code}
            onChangeText={text => setCode(text)}
            placeholderTextColor={colors.placeholderColorPhoneNumber}
            placeholder={placeholder.otpPlaceHolder}
            style={styles.phoneNumberInput}
          />
        </Box>
      </Box>
      <Box style={styles.buttonBox}>
        <Box style={styles.buttonBox2}>
          <Button
            onPress={() => confirmCode(confirm, code, setErrorMessage)}
            title={buttonTitle.otpConfirm}
            style={styles.welcomeScreenButton}
          />
        </Box>
      </Box>
    </>
  );
};

export default VerifyOTP;
