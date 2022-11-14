// import { getRedirectResult } from "firebase/auth";
import { Fragment } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { StyledAuthentication } from "./authentication.styles";
import "./authentication.styles.tsx";

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
      <StyledAuthentication>
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
      </StyledAuthentication>{" "}
    </Fragment>
  );
};

export default Authentication;
