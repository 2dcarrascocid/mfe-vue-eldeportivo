import api from "@shared/api/httpClient.js";

export async function loginWithGoogle(idToken) {
  console.log("IDTOKEN", idToken);
  return api.get(`/login/google/${idToken}`);
}

export async function getUserProfile() {
  return api.get("/auth/profile");
}


export async function loadFacebookSDK(appId) {
  console.log("loadFacebookSDK::::::", appId);
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
