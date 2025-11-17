import { useAuthStore } from "../stores/auth.store";

export function useAuth() {
  const auth = useAuthStore();
  return {
    auth,
    isLoggedIn: auth.isAuthenticated,
    user: auth.user,
  };
}
