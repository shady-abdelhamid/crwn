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
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

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
    <div className="sign-in">
      <h1>Already have an account</h1>

      <h2>Sign in with your email and password</h2>
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
        <div className="sign-in__buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
