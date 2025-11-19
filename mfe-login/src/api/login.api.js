import api from "@shared/api/httpClient.js";

export async function loginWithGoogle(idToken) {
  console.log("IDTOKEN", idToken);
  return api.get(`/login/google/${idToken}`);
}

export async function getUserProfile() {
  return api.get("/auth/profile");
}
