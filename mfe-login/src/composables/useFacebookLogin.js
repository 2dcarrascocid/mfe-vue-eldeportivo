import { computed } from 'vue';
import axios from 'axios';


export function useFacebookLogin() {
  const appId = import.meta.env.VITE_FACEBOOK_APP_ID;
  const redirectUri = import.meta.env.VITE_FACEBOOK_REDIRECT_URI;
  const facebookAuthBase = 'https://www.facebook.com/v12.0/dialog/oauth';

  // scopes mínimos para obtener email y perfil público
  const scope = 'public_profile,email';

  const authUrl = computed(() => {
    const params = new URLSearchParams({
      client_id: appId,
      redirect_uri: redirectUri,
      response_type: 'token', // por ahora 'token' para flujo implícito en front
      scope,
      display: 'popup', // opcional
    });

    return `${facebookAuthBase}?${params.toString()}`;
  });

  const loginWithFacebook = () => {
    // Simple: redirigir toda la ventana
    window.location.href = authUrl.value;

    // Si quisieras popup, puedes usar window.open, etc.
  };

  return {
    authUrl,
    loginWithFacebook,
  };
}

export function useFacebookDecoder() {

    const getFacebookProfile = async (accessToken) => {
        console.log("accessToken_:::",accessToken)
      try {
        // pedir datos al Graph API
        const url = `https://graph.facebook.com/me`;
        const params = {
          fields: 'id,name,email,picture',
          access_token: accessToken,
        };
  
        const response = await axios.get(url, { params });
        console.log("response",response)
  
        return {
          ok: true,
          data: response.data
        };
  
      } catch (error) {
        console.error('Error al obtener perfil de Facebook:', error);
        return {
          ok: false,
          error
        };
      }
    };
  
    return {
      getFacebookProfile,
    };
  }