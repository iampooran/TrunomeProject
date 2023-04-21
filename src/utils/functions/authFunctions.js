import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {routes} from '../constents/routes';
import * as RootNavigation from '../../../RootNavigation';
import auth from '@react-native-firebase/auth';

export const HandleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signIn();
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      RootNavigation.navigate(routes.authenticated);
    }
  } catch (error) {
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

export function onAuthStateChanged(user) {
  if (user) {
  }
}

export async function signInWithPhoneNumber(getPhoneNumber, setConfirm) {
  const confirmation = await auth().signInWithPhoneNumber(
    `+91${getPhoneNumber}`,
  );
  setConfirm(confirmation);
}

export async function confirmCode(confirm, code, setErrorMessage) {
  try {
    const result = await confirm.confirm(code);
    if (result) {
      RootNavigation.navigate(routes.authenticated);
    }
  } catch (error) {
    setErrorMessage('Invalid code.');
  }
}
