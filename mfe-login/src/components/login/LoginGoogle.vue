<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
    <h1 class="text-3xl font-bold mb-6">Bienvenido a El Deportivo</h1>

    <!-- Contenedor para el botón GSI -->
    <div id="googleSignInDiv"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "../../stores/user";

// Decodificar JWT sin librerías
function decodeJwt(token) {
  try {
    const payload = token.split(".")[1];
    const decoded = decodeURIComponent(
      atob(payload).split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(decoded);
  } catch (err) {
    console.error("Error decodificando JWT:", err);
    return null;
  }
}

// Callback que GSI ejecuta al login
function handleCredentialResponse(response) {
console.log("RESPOONSE:::::::",response)

  if (!response || !response.credential) {
    console.error("No se recibió token JWT");
    return;
  }

  const decoded = decodeJwt(response.credential);

  if (!decoded) {
    console.error("No se pudo decodificar JWT");
    return;
  }

  userStore.setUser({
    name: decoded.name,
    email: decoded.email,
    picture: decoded.picture,
  });

  alert(`Bienvenido ${decoded.name}`);

  // Redirigir a profile
  router.push("/profile");
}

const router = useRouter();

onMounted(() => {
  const interval = setInterval(() => {
    if (window.google && google.accounts && google.accounts.id) {
      clearInterval(interval);

      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: false,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "filled_blue", size: "large" }
      );

      // Solo prompt si quieres One Tap
      google.accounts.id.prompt(); 
    }
  }, 100);
});


</script>

<style scoped>
/* Opcional */
</style>
