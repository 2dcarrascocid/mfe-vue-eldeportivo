<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../stores/login.store';
import { useRouter } from 'vue-router';
const ambiente = import.meta.env.VITE_APP_AMBIENTE;
const authStore = useAuthStore();
const { user, provider, accessToken } = storeToRefs(authStore);
import { useFacebookDecoder } from '../../composables/useFacebookLogin';

const { getFacebookProfile } = useFacebookDecoder();
const router = useRouter();


const fbUser = ref(null);




// Si no hay usuario o el provider no es Facebook, redirigir al login
onMounted(async () => {
  try {
    fbUser.value = await getFacebookProfile(authStore.accessToken);
    console.log("fbUser:::::", fbUser)
  if (!user.value || provider.value !== 'facebook') {
    router.replace('/'); 
  }
    
  } catch (error) {
    
  }

});

const logout = () => {
  authStore.clearSession();
  router.replace('/login');
};
</script>

<template>
  {{ fbUser }}
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="bg-white shadow-lg rounded-xl p-8 max-w-md w-full border">

      <!-- Título -->
      <h1 class="text-2xl font-bold mb-4 text-center text-blue-700">
        Perfil de Facebook
      </h1>

      <div v-if="user">
        
        <!-- Datos básicos -->
        <div class="space-y-2">
          <p>
            <span class="font-semibold text-gray-700">Nombre:</span>
            {{ user.nombre }}
          </p>

          <p v-if="user.email">
            <span class="font-semibold text-gray-700">Email:</span>
            {{ user.email }}
          </p>

          <p>
            <span class="font-semibold text-gray-700">Provider:</span>
            {{ provider }}
          </p>
        </div>

        <!-- Access Token (solo dev) -->
        <div v-if="ambiente === 'dev'" class="mt-4 p-3 bg-gray-50 rounded border text-xs">
          <p class="font-semibold mb-1">Access Token (DEV):</p>
          <p class="break-all text-gray-600">{{ accessToken }}</p>
        </div>

        <!-- Logout -->
        <button
          class="mt-6 w-full bg-red-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-red-700 transition"
          @click="logout"
        >
          Cerrar Sesión
        </button>

      </div>

      <div v-else class="text-center text-gray-600">
        <p>No hay datos del usuario.</p>
      </div>

    </div>
  </div>
</template>
