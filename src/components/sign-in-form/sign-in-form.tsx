import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { UserContext } from "../../contexts/user.contaxt";
import {
  signInWithGooglePopup,
  signIn,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import FormInput from "../form-input/form-input";
import { H2, StyledButtons, StyledSignin } from "./sign-in.styles";
import "./sign-in.styles.tsx";

type formModel = {
  email: string;
  password: string;
};

const defaultForm: formModel = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [form, setForm] = useState(defaultForm);
  const { email, password } = form;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(defaultForm);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      const { user } = (await signIn(email, password)) as any;
      setCurrentUser(user);
      resetForm();
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
        case "auth/user-not-found":
          alert("Incorrect credentials");
          break;

        default:
          alert("Something went wrong");
          break;
      }
    }
  };

  return (
    <StyledSignin>
      <h1>Already have an account</h1>

      <H2>Sign in with your email and password</H2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "text",
            name: "email",
            id: "email",
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "text",
            name: "password",
            id: "password",
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
        <StyledButtons>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In with google
          </Button>
        </StyledButtons>
      </form>
    </StyledSignin>
  );
};

export default SignInForm;
