import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { create } from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function RegisterFormComponent() {
  const {register,
     handleSubmit,
      formState: { errors },
    } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try{
      console.log("data", data);
      const response = await create(data);
      navigate("/login");
      toast.success("Usuario creado con éxito");
    }catch (e){
      console.log(e);
      toast.success(e.message);
    }
    
  };
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" {...register("nombre", { required: true })}/>
          {errors?.nombre && <div>Este campo es obligatorio</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" {...register("apellido", { required: true })}/>
          {errors?.apellido && <div>Este campo es obligatorio</div>}
        </Form.Group>

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

export default RegisterFormComponent;