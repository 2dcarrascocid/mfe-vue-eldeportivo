<template>
  <div class="h-screen flex flex-col items-center justify-center bg-green-600 text-white">
    <h1 class="text-3xl font-bold">Bienvenido {{ user.name }}</h1>
    <p class="mt-4">Email: {{ user.email }}</p>

    <img :src="user.picture" class="w-24 h-24 rounded-full mt-6 shadow-xl" />

    <button
      class="mt-10 px-6 py-3 bg-red-500 rounded-xl"
      @click="logout"
    >
      Cerrar sesión
    </button>
  </div>
</template>

<script setup>
import { userStore } from '../../stores/user';
import { storeToRefs } from 'pinia';

const store = userStore();
const { user } = storeToRefs(store);

const logout = () => {
  store.$reset();
  window.location.href = "/";
};
</script>
