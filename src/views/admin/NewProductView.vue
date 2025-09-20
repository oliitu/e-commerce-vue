<script setup>
import Link from '@/components/Link.vue';
</script>

<template>
  <div class="mt-40">
    <Link 
    to="products"
    >Volver
    </Link> 
    <h1 class="text-4xl font-black my-10 text-center">Nuevo Producto</h1>
    <FormKit 
    type="form" 
    submit-label="Agregar producto">
      <FormKit class="bg-white"
      type="text" 
      label="Nombre" 
      name="name" 
      placeholder="Nombre del producto" 
      validation="required" 
      :validation-messages="{required: 'Poné el nombre del producto q es obligatorio'}"/>
      <FormKit 
      type="file" 
      label="Imagen Producto" 
      name="image" 
      validation="required" 
      :validation-messages="{required: 'Poné la imagen del producto q es obligatoria'}"
      accept=".jpg" 
      multiple="true"/>
      <FormKit 
      type="select" 
      label="Categoria" 
      name="category" 
      validation="required" 
      :validation-messages="{required: 'Seleccioná la categoria q es obligatoria'}"/>
      <FormKit 
      type="numbre" 
      label="Precio" 
      name="price" 
      placeholder="Precio del producto" 
      validation="required" 
      :validation-messages="{required: 'Poné el precio q es obligatorio'}"
      min="1"/>
    </FormKit>
  </div>
</template>
