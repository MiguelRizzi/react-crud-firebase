import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { login } from '../services/authServices';
import { loginMessage } from "../utils/errorMessages";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

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
      toast.error(loginMessage[e.code] || "Ha ocurrido un error, intentelo nuevamente.");
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" {...register("email", { required: true })}/>
        {errors?.email && <div>Este campo es obligatorio</div>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password" 
          {...register("password", {required: true, minLength: 8, maxLength: 16,})}
        />
        {errors?.password?.type === "required" && (
          <div>Este campo es obligatorio</div>
        )}
        {errors?.password?.type === "minLength" && (
          <div>Debe introducir al menos 8 caracteres</div>
        )}
        {errors?.password?.type === "maxLength" && (
          <div>Debe introducir como maximo 16 caracteres</div>
        )}
      </Form.Group>
      <Button type="submit" variant="success">
        Aceptar
      </Button>
    </Form>
  );
    
}

export default LoginFormComponent;