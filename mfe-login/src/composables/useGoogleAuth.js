import { useLogin } from "./useLogin";

export function useGoogleAuth() {
  const { login } = useLogin();

  async function handleGoogleResponse(googleResponse) {
    const idToken = googleResponse.credential;
    return login(idToken);
  }

  return { handleGoogleResponse };
}
