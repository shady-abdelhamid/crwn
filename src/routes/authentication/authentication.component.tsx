// import { getRedirectResult } from "firebase/auth";
import { Fragment } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

// import {
//   auth,
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  // useEffect(() => {
  //   const redirectAuth = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   redirectAuth();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = createUserDocumentFromAuth(user);
  // };

  return (
    <Fragment>
      <div>
        <h1>Sign in page</h1>
      </div>
      {/* <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <div className="authentication">
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
      </div>
    </Fragment>
  );
};

export default Authentication;
