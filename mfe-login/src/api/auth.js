import { api } from "./client";

export const sendGoogleToken = (token) =>
  api.post("/auth/google", { token });
