<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
    <h1 class="text-3xl font-bold mb-6">Bienvenido a El Deportivo</h1>

    <!-- Botón de Google -->
    <div id="googleSignInDiv"></div>

    <!-- Mostrar datos del usuario -->
    <div v-if="user" class="mt-6 p-4 bg-white text-black rounded shadow">
      <h2 class="font-semibold text-lg mb-2">Datos del usuario:</h2>
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <img :src="user.picture" alt="Foto perfil" class="mt-2 w-16 h-16 rounded-full">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

// Función para decodificar JWT sin librerías externas
function decodeJwt(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (err) {
    console.error('Error decodificando JWT:', err);
    return null;
  }
}

onMounted(() => {
  /* global google */
  if (!window.google) {
    console.error('Google Identity Services no está cargado. Asegúrate de incluir el script en index.html');
    return;
  }

  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById('googleSignInDiv'),
    { theme: 'outline', size: 'large' }
  );

  // Opcional: One Tap
  google.accounts.id.prompt();
});

function handleCredentialResponse(response) {
  console.log('✅ Login exitoso, credential:', response);

  const decoded = decodeJwt(response.credential);
  if (!decoded) return;

  console.log('Decoded JWT:', decoded);

  user.value = {
    name: decoded.name,
    email: decoded.email,
    picture: decoded.picture,
  };

  alert(`Bienvenido ${decoded.name}`);
}
</script>
