import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { create, getById, update, deleteProducto } from '../services/productosServices';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import InputComponent from './InputComponent';

function ProductoFormComponent() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        if (id) {
          const producto = await getById(id);
          setProducto(producto.data());
          setValue("title", producto.data().title);
          setValue("price", producto.data().price);
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
    try {
      let document;
      if (id) {
        document = await update(id, data);
        toast.success("Producto actualizado con éxito");
      } else {
        document = await create(data);
        toast.success("Producto creado con éxito");
      }
      console.log(document);
    } catch (e) {
      console.log(e);
    }
    navigate("/productos");
  };

  const handleDelete = async () => {
    const aceptar = window.confirm("¿Estás seguro que deseas eliminar este producto?");
    if (aceptar){
      try {
        const document = await deleteProducto(id);
        toast.success("Producto eliminado con éxito");
        navigate("/productos");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Nombre"
          placeholder="Ingrese el nombre"
          register={{ ...register("title", { required: true }) }}
          name="title"
        />
        <InputComponent
          type="number"
          label="Precio"
          placeholder="Ingrese el precio"
          register={{ ...register("price", { required: true }) }}
          name="price"
        />
        <InputComponent
          label="Descripción"
          placeholder="Ingrese la descripción"
          register={{ ...register("description", { required: true }) }}
          name="description"
        />
        <InputComponent
          label="Imagen"
          placeholder="Ingrese la url de la imagen"
          register={{ ...register("thumbnail", { required: true }) }}
          name="thumbnail"
        />
        <Button variant="success" type="submit">
          {id ? 'Guardar' : 'Aceptar'}
        </Button>
      </Form>
      
      {id && (
        <div>
          <h2>Eliminar Producto</h2>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>

        </div>
      )}

      
      <Button variant="primary" as={Link} to="/productos">Volver a Productos</Button>
    </div>
  );
}

export default ProductoFormComponent;
