<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-3xl font-bold mb-6">Perfil del Usuario</h1>
  
      <div v-if="user" class="p-4 bg-white rounded shadow w-80 text-center">
        <img :src="user.picture" class="w-20 h-20 rounded-full mx-auto mb-2" />
        <h2 class="font-semibold">{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <button @click="logout" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Cerrar sesión</button>
      </div>
  
      <div v-else>
        <p>No hay usuario logueado</p>
      </div>
    </div>
  </template>
  
  <script setup>
import { userStore } from "../../stores/user";
  import { useRouter } from "vue-router";
  
  const user = userStore;
  const router = useRouter();
  
  function logout() {
    userStore.clearUser();
    router.push("/");
  }
  </script>
  