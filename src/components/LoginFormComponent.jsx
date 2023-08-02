import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { login } from '../services/authServices';
import { errorMessages } from "../utils/errorMessages";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import InputComponent from './InputComponent';

function LoginFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await login(data);
      toast.success("Bienvenido...");
      navigate("/");
    } catch (e) {
      toast.error(errorMessages[e.code] || "Ha ocurrido un error, intentelo nuevamente.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        type="email"
        label="Email"
        placeholder="Ingrese su email"
        register={{ ...register("email", { required: true }) }}
        errors={errors}
        name="email"
      />
      <InputComponent
        type="password"
        label="Contraseña"
        placeholder="Ingrese su password"
        register={{
          ...register("password", {
            required: true,
            minLength: 6,
            maxLength: 12,
          }),
        }}
        errors={errors}
        name="password"
      >
        <Form.Text className="text-muted">
          {errors?.password?.type === "minLength" && (
            <div>Debe introducir al menos 6 caracteres</div>
          )}
          {errors?.password?.type === "maxLength" && (
            <div>Debe introducir como máximo 12 caracteres</div>
          )}
        </Form.Text>
      </InputComponent>
      <Button type="submit" variant="success">
        Aceptar
      </Button>
    </Form>
  );
}

export default LoginFormComponent;
