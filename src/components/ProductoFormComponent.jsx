import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { create, getById, update, deleteProducto } from '../services/productosServices';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import InputComponent from './InputComponent';
import BotonLoadComponent from "./BotonLoadComponent";

function ProductoFormComponent() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ mode: "onChange" });
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        if (id) {
          const producto = await getById(id);
          setProducto(producto.data());
          setValue("title", producto.data().title);
          setValue("price", producto.data().price);
          setValue("sku", producto.data().sku);
          setValue("description", producto.data().description);
          setValue("thumbnail", producto.data().thumbnail);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducto();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let document;
      if (id) {
        document = await update(id, data);
        toast.success("Producto actualizado con éxito");
      } else {
        document = await create(data);
        toast.success("Producto creado con éxito");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    navigate("/productos");
  };

  const handleDelete = async () => {
    setLoading(true);
    const aceptar = window.confirm("¿Estás seguro que deseas eliminar este producto?");
    if (aceptar){
      try {
        const document = await deleteProducto(id);
        toast.success("Producto eliminado con éxito");
        navigate("/productos");
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Nombre"
          placeholder="Ingrese el nombre"
          register={{ ...register("title", { required: true }) }}
          errors={errors}
          name="title"
        />
        <InputComponent
          type="number"
          label="Precio"
          placeholder="Ingrese el precio"
          register={{ ...register("price", { required: true }) }}
          errors={errors}
          name="price"
        />
        <InputComponent
          label="SKU"
          placeholder="Ingrese el SKU"
          register={{
            ...register("sku", {
              required: true,
              minLength: 8,
              maxLength: 12,
            }),
          }}
          errors={errors}
          name="sku"
        >
          {errors?.sku?.type === "minLength" && (
            <div>El SKU debe tener al menos 8 caracteres</div>
          )}
          {errors?.sku?.type === "maxLength" && (
            <div>El SKU debe tener como máximo 12 caracteres</div>
          )}
        </InputComponent>
        <InputComponent
          label="Descripción"
          placeholder="Ingrese la descripción"
          register={{ ...register("description", { required: true }) }}
          errors={errors}
          name="description"
        />
        <InputComponent
          label="Imagen"
          placeholder="Ingrese la url de la imagen"
          register={{ ...register("thumbnail", { required: true }) }}
          errors={errors}
          name="thumbnail"
        />
        <BotonLoadComponent type="submit" variant="success" loading={loading}>
          {id ? 'Guardar' : 'Aceptar'}
        </BotonLoadComponent>
      </Form>
      
      {id && (
        <div>
          <h2>Eliminar Producto</h2>
          <BotonLoadComponent 
            type="button" 
            variant="danger" 
            loading={loading}
            onClick={handleDelete}
          >
            Eliminar
        </BotonLoadComponent>
        </div>
      )}

      
      <Button variant="primary" as={Link} to="/productos">Volver a Productos</Button>
    </div>
  );
}

export default ProductoFormComponent;
