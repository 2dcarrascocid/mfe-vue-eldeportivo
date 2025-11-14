import { sendGoogleToken } from "../api/auth";

export async function loginWithGoogle(token) {
  const response = await sendGoogleToken(token);
  return response.data;
}
