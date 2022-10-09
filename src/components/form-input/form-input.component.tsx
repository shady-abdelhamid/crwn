import "./form-input.styles.scss";

export type FormInputProps = {
  label: string;
  inputOptions: {
    type: "text" | "email" | "password";
    name: string;
    id: string;
    value: string | number;
    onChange: any;
    required?: boolean;
    disabled?: boolean;
  };
};

const FormInput = ({ label, inputOptions }: FormInputProps) => (
  <div className="form-input__group">
    <input className="form-input" {...inputOptions} />
    <label
      className={`form-input__label ${
        inputOptions.value && "form-input__label--shrink"
      }`}
      htmlFor={inputOptions.id}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
