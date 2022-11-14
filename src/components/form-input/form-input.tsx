import { Input, StyledGroup, StyledLabel } from "./form-input.styles";
import "./form-input.styles.tsx";

export type FormInputProps = {
  label: string;
  inputOptions: {
    type: "text" | "email" | "password";
    name: string;
    id: string;
    value: string;
    onChange: any;
    required?: boolean;
    disabled?: boolean;
  };
};

const FormInput = ({ label, inputOptions }: FormInputProps) => (
  <StyledGroup>
    <Input {...inputOptions} />
    <StyledLabel shrink={!!inputOptions.value.length} htmlFor={inputOptions.id}>
      {label}
    </StyledLabel>
  </StyledGroup>
);

export default FormInput;
