import { getRedirectResult } from "firebase/auth";
import { Fragment, useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const redirectAuth = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    };
    redirectAuth();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <Fragment>
      <div>
        <h1>Sign in page</h1>
      </div>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </Fragment>
  );
};

export default SignIn;
