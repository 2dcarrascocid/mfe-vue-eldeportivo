# 🔐 MFE Login – Micro Frontend de Autenticación con Google

Este micro-frontend implementa el flujo completo de **inicio de sesión con Google Identity Services (GIS)** utilizando **Vue 3, Vite, Pinia y TailwindCSS**.

Forma parte del ecosistema de micro-frontends de **Fair Play Chile** y está diseñado para integrarse con otros MFE como usuarios, dashboard, administración, etc.

---

## 🚀 Características principales

- 🔑 Login con **Google Identity Services (GIS)**
- 🏗 Arquitectura optimizada para **Micro-Frontends**
- 🗂 Estructura modular: API, Services, Store, Router, Views, Components
- 🧠 Manejo de sesión usando **Pinia**
- 🎨 Estilos con **TailwindCSS**
- ⚡ Vue 3 + Vite (rápido y moderno)
- 🧩 Fácil integración con Module Federation (opcional)

---

## 📁 Estructura del proyecto

mfe-login/
│
├── src/
│ ├── api/
│ │ ├── auth.js
│ │ └── client.js
│ │
│ ├── components/
│ │ └── GoogleLoginButton.vue
│ │
│ ├── router/
│ │ └── index.js
│ │
│ ├── services/
│ │ └── authService.js
│ │
│ ├── stores/
│ │ └── authStore.js
│ │
│ ├── views/
│ │ ├── LoginView.vue
│ │ └── HomeView.vue
│ │
│ ├── App.vue
│ └── main.js
│
├── public/
│ └── favicon.ico
│
├── index.html
├── package.json
└── vite.config.js

## 🛠 Instalación

Clonar el proyecto:

git clone https://github.com/2dcarrascocid/mfe-vue-eldeportivo.git
cd mfe-login