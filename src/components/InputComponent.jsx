import { Form } from "react-bootstrap";

function InputComponent({
  label,
  type = "text",
  name,
  register,
  placeholder,
  errors,
  children,
}) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="input"
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errors && errors[name]?.type === "required" && (
        <Form.Text className="text-muted">El campo es obligatorio</Form.Text>
      )}
      {children && children}
    </Form.Group>
  );
}

export default InputComponent;
