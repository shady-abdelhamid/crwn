import { Fragment } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
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
    </Fragment>
  );
};

export default SignIn;
