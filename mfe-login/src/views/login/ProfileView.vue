<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    
    <div v-if="!auth.isAuthenticated" class="text-center mt-20">
      <h2 class="text-2xl font-bold mb-4">No estás autenticado</h2>
      <p class="mb-4">Inicia sesión para ver tu perfil.</p>
      <button
        @click="goToLogin"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Ir a Login
      </button>
    </div>

    <div
      v-else
      class="bg-white shadow-md rounded-lg p-6 mt-10 w-full max-w-md flex flex-col items-center"
    >
      <img
        :src="auth.user.avatar || defaultAvatar"
        class="w-28 h-28 rounded-full shadow mb-4"
        alt="avatar"
      />

      <h2 class="text-xl font-bold">{{ auth.fullName }}</h2>
      <p class="text-gray-600 mb-4">{{ auth.user.email }}</p>

      <div class="w-full">
        <div class="border-t py-3">
          <strong>ID Usuario:</strong> {{ auth.user.id }}
        </div>
        <div class="border-t py-3">
          <strong>Nombre:</strong> {{ auth.user.nombre }}
        </div>
        <div class="border-t py-3">
          <strong>Apellido:</strong> {{ auth.user.apellido }}
        </div>
      </div>

      <button
        @click="logout"
        class="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "@shared/composables/useAuth";  
// import defaultAvatar from "@/assets/default-avatar.png"; // opcional si tienes uno

const router = useRouter();

// Accedemos al store global de auth
const { auth } = useAuth();

function goToLogin() {
  router.push("/");
}

function logout() {
  auth.logout();
  router.push("/");
}
</script>

<style scoped>
</style>
