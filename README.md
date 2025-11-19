# 🚀 Micro-Frontend: <NOMBRE_DEL_PROYECTO>

Este micro-frontend forma parte del ecosistema modular de la plataforma **Fair Play Chile**.  
Está desarrollado con **Vue 3**, **Vite**, **Pinia**, **Supabase**, y soporta **autenticación con Google**.  
Su objetivo es proveer una unidad funcional independiente, desacoplada y desplegable por separado.

---

## 📦 Tecnologías principales

- **Vue 3 + Composition API**
- **Vite** (bundle & dev server)
- **Pinia** (gestión de estado)
- **Supabase**
  - Autenticación (email y Google)
  - Base de datos Postgres
  - RPC & Policies
- **Micro-Frontends**
  - Cargado dinámico por módulo
  - Comunicación vía events
- **TailwindCSS** (opcional)
- **TypeScript** (si aplica)

---

## 📁 Estructura del proyecto
├── src
│ ├── components/ # Componentes reutilizables
│ ├── views/ # Vistas principales
│ ├── stores/ # Pinia stores
│ ├── services/ # Conexión a Supabase, API wrappers
│ ├── router/ # Rutas del módulo
│ ├── assets/ # Imágenes / estilos
│ └── main.js # Configuración inicial del micro-frontend
│
├── public/ # Assets estáticos
├── index.html # Entrada del micro-frontend
├── vite.config.js # Configuración Vite (build independiente)
└── package.json
## 🔐 Autenticación Google

El micro-frontend incluye login mediante Google usando:

- Google Identity Services
- Decodificación del JWT con `jwt-decode` sin export default
- Validación en backend usando Supabase o servidor propio (dependiendo del proyecto)

### Ejemplo del login:

