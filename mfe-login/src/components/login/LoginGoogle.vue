<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
    <h1 class="text-3xl font-bold mb-6">Bienvenido a El Deportivo</h1>

    <!-- Botón de Google -->
    <div id="googleSignInDiv"></div>

    <!-- Mostrar datos del usuario -->
    <div
      v-if="user"
      class="mt-6 p-4 bg-white text-black rounded shadow w-80 text-center"
    >
      <h2 class="font-semibold text-lg mb-2">Datos del usuario:</h2>
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>

      <img
        :src="user.picture"
        alt="Foto perfil"
        class="mt-3 w-20 h-20 rounded-full mx-auto border"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const user = ref(null);

/**
 * Decodifica un JWT manualmente sin librerías externas
 */
function decodeJwt(token) {
  try {
    const payload = token.split(".")[1];
    const decoded = decodeURIComponent(
      atob(payload).split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(decoded);
  } catch (error) {
    console.error("❌ Error decodificando JWT:", error);
    return null;
  }
}

/**
 * Manejo del retorno de Google Identity Services
 */
function handleCredentialResponse(response) {
  console.log("🔵 RAW GIS Response:", response);

  if (!response || !response.credential) {
    console.error("❌ No se recibió token JWT desde GIS.");
    return;
  }

  const decoded = decodeJwt(response.credential);
  console.log("🟢 JWT Decodificado:", decoded);

  if (!decoded) {
    console.error("❌ No se pudo decodificar el JWT.");
    return;
  }

  user.value = {
    name: decoded.name,
    email: decoded.email,
    picture: decoded.picture,
  };

  alert(`Bienvenido ${decoded.name}`);
}

onMounted(() => {
  /* global google */
  if (!window.google || !google.accounts) {
    console.error(
      "❌ Google Identity Services NO cargó. Debes incluir el script en index.html"
    );
    return;
  }

  console.log("🔰 GIS detectado, inicializando...");

  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse,
    auto_select: false,
    cancel_on_tap_outside: false,
    use_fedcm_for_prompt: false 
  });

  google.accounts.id.renderButton(
    document.getElementById("googleSignInDiv"),
    {
      theme: "filled_blue",
      size: "large",
      width: "260",
    }
  );

  // → Importante: FedCM produce error en incógnito. Esto lo evita.
  try {
    google.accounts.id.prompt((notification) => {
      console.log("🔸 One Tap:", notification);
    });
  } catch (err) {
    console.warn("One Tap no disponible (probablemente incógnito)", err);
  }
});
</script>

<style scoped>
/* opcional */
</style>
