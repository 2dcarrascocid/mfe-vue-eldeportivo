import { useAuthStore } from "@shared/stores/auth.store.js";
import { useLoginStore } from "../stores/login.store";
import { loginWithGoogle, getUserProfile } from "../api/login.api.js";

export function useLogin() {

  const auth = useAuthStore();
  const loginLocal = useLoginStore();

  async function login(idToken) {
    try {
      loginLocal.startLoading();

      const { data } = await loginWithGoogle(idToken);

      // Transformación antes de guardar
      const user = {
        id: data.user.id,
        email: data.user.email,
        nombre: data.user.firstName,
        apellido: data.user.lastName,
        avatar: data.user.picture,
      };

      auth.setSession({ user, token: data.token });
      loginLocal.stopLoading();

      return true;
    } catch (error) {
      loginLocal.setError("Error al iniciar sesión");
      return false;
    }
  }

  async function loadProfile() {
    try {
      const { data } = await getUserProfile();
      auth.user = data;
    } catch {
      auth.logout();
    }
  }

  return {
    login,
    loadProfile,
    auth,
    loginLocal,
  };
}
