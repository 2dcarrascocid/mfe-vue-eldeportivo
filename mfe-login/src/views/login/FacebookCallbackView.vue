<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../../stores/login.store';
import { useFacebookDecoder } from '../../composables/useFacebookLogin';

const { getFacebookProfile } = useFacebookDecoder();
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const error = ref(null);

onMounted(async () => {
  try {
      // Facebook manda el token en el hash de la URL:
      // #access_token=...&expires_in=...
      const hash = window.location.hash; // e.g. "#access_token=XXX&expires_in=YYY"
      
      if (!hash) {
          error.value = 'No se recibió el token de Facebook.';
          return;
        }
        
        const params = new URLSearchParams(hash.replace(/^#/, ''));
        const accessToken = params.get('access_token');

    if (!accessToken) {
      error.value = 'No se encontró access_token en la respuesta de Facebook.';
      return;
    }

    const user =  await getFacebookProfile(accessToken);
    console.log("user::::", user.data)
    // Aquí normalmente llamarías a tu backend para validar el token
    // y obtener los datos del usuario.
    // Por ahora, simulamos un usuario:
    const fakeUser = {
      id: 'facebook-user-123',
      nombre: 'Usuario Facebook Demo',
      email: 'demo@facebook.com', // solo demo
    };

    authStore.setUserFromFacebook({
      user: fakeUser,
      accessToken,
    });

    // Limpia el hash de la URL
    window.history.replaceState(null, '', window.location.pathname + window.location.search);

    // Redirige a donde quieras después del login (ej: home del Shell o dashboard)
    router.push({ name: 'ProfileLoginFacebook' }); // o la ruta de tu app principal
  } catch (e) {
    console.error(e);
    error.value = 'Error al procesar el login de Facebook.';
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full text-center">
      <p v-if="!error">Procesando login con Facebook...</p>
      <p v-else class="text-red-600 font-semibold">{{ error }}</p>
    </div>
  </div>
</template>
