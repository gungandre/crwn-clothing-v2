import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";
const FormInput = ({ label, ...inputOption }) => {
  return (
    <Group>
      <Input {...inputOption} />
      {/* code label menandakan jika label ada maka render elemen label */}
      {label && (
        <FormInputLabel shrink={inputOption.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
