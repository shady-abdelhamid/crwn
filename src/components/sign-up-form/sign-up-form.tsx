import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { UserContext } from "../../contexts/user.contaxt";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import { StyledSignup, H2 } from "./sign-up.styles";
import "./sign-up.styles.tsx";

type formModel = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultForm: formModel = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [form, setForm] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = form;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(defaultForm);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = (await createAuthUserWithEmailAndPassword(
        email,
        password
      )) as any;

      setCurrentUser(user);
      
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.error("user creation encountered an error:", error);
    }
  };

  return (
    <StyledSignup>
      <h1>Don't have an account</h1>

      <H2>Sign up with your email and password</H2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            id: "displayName",
            value: displayName,
            onChange: handleChange,
            required: true,
          }}
        />
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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "text",
            name: "confirmPassword",
            id: "confirmPassword",
            value: confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </StyledSignup>
  );
};

export default SignUpForm;
