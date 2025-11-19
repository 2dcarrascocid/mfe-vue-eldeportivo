import { sendGoogleToken } from "../api/auth";

export async function loginWithGoogle(token) {
  const response = await sendGoogleToken(token);
  return response.data;
}

export function loadFacebookSDK(appId) {
  return new Promise(resolve => {
    if (window.FB) return resolve(window.FB);

    window.fbAsyncInit = function () {
      FB.init({
        appId,
        cookie: true,
        xfbml: false,
        version: "v20.0"
      });
      resolve(FB);
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    document.body.appendChild(script);
  });
}

