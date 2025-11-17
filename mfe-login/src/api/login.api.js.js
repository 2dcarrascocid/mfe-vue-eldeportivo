import api from "@shared/api/httpClient.js";

export async function loginWithGoogle(idToken) {
  return api.post("/auth/google", { idToken });
}

export async function getUserProfile() {
  return api.get("/auth/profile");
}
