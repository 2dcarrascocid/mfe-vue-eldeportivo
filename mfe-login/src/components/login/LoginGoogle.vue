<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
    <h1 class="text-3xl font-bold mb-6">Bienvenido a El Deportivo</h1>

    <div id="googleSignInDiv"></div>

    <!-- Mensajes de estado -->
    <p v-if="loginLocal.loading" class="mt-4">Iniciando sesión...</p>
    <p v-if="loginLocal.error" class="mt-4 text-red-300">{{ loginLocal.error }}</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// IMPORTAMOS EL COMPOSABLE Y EL STORE LOCAL
import { useLogin } from "@/composables/useLogin";
import { useLoginStore } from "@/stores/login.store";

const router = useRouter();

// Acceso al composable de login (incluye store global + API)
const { login } = useLogin();

// Store local del login (loading / error)
const loginLocal = useLoginStore();


// Decode JWT SOLO para leer datos del Google Token antes del backend
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


// ====================================================
// CALLBACK PRINCIPAL QUE GOOGLE DISPARA AL LOGIN
// ====================================================
async function handleCredentialResponse(response) {
  const idToken = response?.credential;

  if (!idToken) {
    loginLocal.setError("No se recibió token JWT desde Google");
    return;
  }

  loginLocal.startLoading();

  // Información preliminar del token Google (antes de backend)
  const decoded = decodeJwt(idToken);
  console.log("TOKEN GOOGLE DECODED:", decoded);

  // LOGIN REAL → SE VA AL BACKEND
  const ok = await login(idToken);

  if (!ok) {
    // El composable ya asignó error
    return;
  }

  // LOGIN ÉXITO → REDIRECCIÓN INTERNA DEL MFE-LOGIN
  router.push("/login/profile");
}


// ====================================================
// Inicializar Google Identity Services
// ====================================================
onMounted(() => {
  const interval = setInterval(() => {
    if (window.google && google.accounts?.id) {
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

      google.accounts.id.prompt();
    }
  }, 100);
});
</script>

<style scoped>
</style>
