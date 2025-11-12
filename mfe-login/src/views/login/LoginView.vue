<!-- src/views/login/LoginView.vue -->
<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm text-center">
        <h1 class="text-2xl font-bold mb-6">Bienvenido a El Deportivo</h1>
  
        <div class="flex flex-col gap-4">
          <LoginGoogle />
          <LoginFacebook />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import LoginGoogle from '@/components/login/LoginGoogle.vue'
  import LoginFacebook from '@/components/login/LoginFacebook.vue'
  </script>
  