import { useAuthStore } from "@shared/stores/auth.store.js";
import { loginWithGoogle } from "../api/login.api";

export function useLogin() {
  const auth = useAuthStore();

  async function login(idToken) {
    const { data } = await loginWithGoogle(idToken);
    auth.setAuthData(data);
  }

  return { login };
}
