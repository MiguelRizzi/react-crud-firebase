import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Form } from "react-bootstrap";
import { create } from '../services/authServices';
import { errorMessages } from "../utils/errorMessages";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import InputComponent from './InputComponent';
import BotonLoadComponent from "./BotonLoadComponent";

function RegisterFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await create(data);
      navigate("/login");
      toast.success("Usuario creado con éxito");
    } catch (e) {
      toast.error(errorMessages[e.code] || "Ha ocurrido un error, intentelo nuevamente.");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        type="text"
        label="Nombre"
        placeholder="Ingrese su nombre"
        register={{ ...register("nombre", { required: true }) }}
        errors={errors}
        name="nombre"
      />
      <InputComponent
        type="text"
        label="Apellido"
        placeholder="Ingrese su apellido"
        register={{ ...register("apellido") }}
        errors={errors}
        name="apellido"
      />
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
      <BotonLoadComponent type="submit" variant="success" loading={loading}>
        Aceptar
      </BotonLoadComponent>
    </Form>
  );
}

export default RegisterFormComponent;
