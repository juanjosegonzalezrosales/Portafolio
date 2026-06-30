# KINETIC_SYNTAX — One Page Portfolio de Alex Rivera

Un portafolio profesional de alto rendimiento y diseño minimalista diseñado para desarrolladores de software, ingenieros de sistemas y reclutadores técnicos. Este proyecto ha sido construido como una aplicación de una sola página (SPA) moderna utilizando **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4** y animaciones con **Motion**.

---

## 🎨 Concepto y Diseño

El portafolio se basa en el sistema de diseño **KINETIC_SYNTAX**, un concepto inspirado en editores de código e IDEs modernos (como la filosofía Geist y JetBrains Mono).

- **Paleta de Colores "Deep Space"**: Fondo principal oscuro de bajo brillo (`#051424`) que contrasta con acentos vibrantes de **Índigo Eléctrico (`#6366f1`)** y un texto de alto contraste con tonos claros de azul-gris (`#d4e4fa`).
- **Tipografía híbrida**: Se utiliza **Geist** para las cabeceras principales y la interfaz de usuario general, asegurando legibilidad contemporánea, y **JetBrains Mono** para todos los elementos técnicos, badges y detalles de código, para consolidar el contexto de ingeniería de software.
- **Bento Grid**: Un diseño asimétrico para la sección "Sobre Mí" y "Proyectos Destacados", distribuyendo el peso visual de manera inteligente.

---

## 🛠️ Arquitectura de Software y Estructura

El proyecto está diseñado siguiendo las mejores prácticas de modularidad, tipado estricto y separación de responsabilidades:

```text
/
├── .env.example            # Plantilla de variables de entorno
├── .gitignore              # Archivos y carpetas ignorados por Git
├── index.html              # Punto de entrada HTML
├── metadata.json           # Configuración del applet y metadatos de IA Studio
├── package.json            # Dependencias y scripts del proyecto
├── tsconfig.json           # Configuración del compilador TypeScript
├── vite.config.ts          # Configuración del empaquetador Vite
├── src/
│   ├── main.tsx            # Inicialización de la aplicación React
│   ├── App.tsx             # Layout principal y control de estados globales
│   ├── index.css           # Estilos globales y declaración de variables de tema Tailwind v4
│   ├── types.ts            # Definiciones e interfaces de tipado estricto de TypeScript
│   ├── data.ts             # Datos estáticos estructurados (biografía, proyectos, habilidades, etc.)
│   └── components/         # Componentes encapsulados y reutilizables
│       ├── Header.tsx      # Barra de navegación glassmorphic adaptativa y menú móvil
│       ├── Hero.tsx        # Sección de bienvenida interactiva y botones de acción
│       ├── About.tsx       # Perfil profesional estructurado en un Bento Grid
│       ├── Skills.tsx      # Panel interactivo de habilidades técnicas con búsqueda en tiempo real
│       ├── Projects.tsx    # Asymmetric Grid de proyectos, filtros por categoría y modal detallado
│       ├── ExperienceEducation.tsx # Línea de tiempo interactiva de carrera y estudios
│       ├── Contact.tsx     # Formulario de contacto validado con simulador de inbox local
│       └── ResumeModal.tsx # Modal con CV interactivo preparado para impresión/guardado PDF limpio
```

---

## 🚀 Instrucciones para Ejecutar Localmente

### Requisitos Previos

- **Node.js** (v18 o superior recomendado)
- **npm** o **pnpm**

### Instalación de dependencias

Clona este repositorio o descomprime el archivo de código, navega al directorio del proyecto y ejecuta:

```bash
npm install
```

### Ejecutar en modo desarrollo

Inicia el servidor local con recarga rápida (HMR):

```bash
npm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000) (o el puerto configurado por el puerto de entorno).

### Compilación para producción

Para generar los archivos estáticos listos para su distribución:

```bash
npm run build
```

---

## 📦 Despliegue en GitHub Pages

Dado que esta aplicación es una SPA estática, es sumamente sencilla de desplegar en **GitHub Pages**. Ofrecemos dos enfoques estándar recomendados para entornos de producción.

### Enfoque A: Despliegue Automático mediante GitHub Actions (Recomendado)

Este método automatiza todo el proceso. Cada vez que subas cambios a la rama principal (`main`), GitHub compilará y desplegará la web.

1. Crea un archivo en la ruta `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   permissions:
     contents: write

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout Repository
           uses: actions/checkout@v4

         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install Dependencies
           run: npm ci

         - name: Build Application
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```
2. Asegúrate de configurar la base path en `vite.config.ts` si tu repositorio no es una página de usuario (por ejemplo, si el repositorio se llama `mi-portafolio`, añade `base: '/mi-portafolio/'` a tu configuración de Vite).
3. En la pestaña **Settings** > **Pages** de tu repositorio de GitHub, selecciona desplegar desde la rama `gh-pages`.

### Enfoque B: Despliegue Manual con el módulo `gh-pages`

Si prefieres desplegar directamente desde tu terminal local:

1. Instala el paquete de desarrollo:
   ```bash
   npm install -D gh-pages
   ```
2. Añade los siguientes scripts a tu `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   ```

---

## 🌳 Flujo de Trabajo Git (Git Flow) y Buenas Prácticas

Para mantener el proyecto organizado como un desarrollador senior, se utiliza la metodología **Git Flow** junto con **Conventional Commits**:

### Estructura de Ramas

- **`main`**: Contiene únicamente el código estable de producción. Cualquier despliegue a GitHub Pages se realiza desde esta rama.
- **`develop`**: Rama de integración donde se consolidan todas las nuevas características completadas antes de pasar a producción.
- **`feature/nombre-feature`**: Ramas temporales creadas a partir de `develop` para trabajar en tareas específicas (ej. `feature/add-projects-section`). Una vez completadas y validadas, se integran mediante un Pull Request (PR) de vuelta a `develop`.
- **`hotfix/nombre-bug`**: Ramas de emergencia creadas directamente desde `main` para resolver bugs críticos de producción.

### Formato de Commits (Conventional Commits)

Los commits deben ser autodescriptivos e indicar la naturaleza del cambio:

- `feat:` Nuevas funcionalidades (ej. `feat: add real-time search to skills panel`).
- `fix:` Resolución de errores o bugs (ej. `fix: improve mobile layout for bento grid cards`).
- `style:` Cambios estéticos, de diseño o formateo sin alterar la lógica de negocio (ej. `style: update color palette variables to deep space specifications`).
- `refactor:` Mejoras en la estructura o legibilidad del código sin añadir características (ej. `refactor: extract timeline logic to dedicated component`).
- `docs:` Cambios o añadidos en la documentación (ej. `docs: update README with detailed deployment steps`).

---

## 🚀 Recomendaciones para Futuras Mejoras

1. **Integración de API de Correo Real**: Sustituir el sistema de inbox simulado en local por un endpoint de backend real utilizando una API serverless (como Next.js API routes o Cloud Functions) conectada a servicios como SendGrid, Resend o EmailJS.
2. **Sistema de Blog Técnico**: Implementar un lector de archivos Markdown dinámico para añadir una sección de artículos técnicos, reforzando la marca profesional de Alex Rivera.
3. **Métricas de Rendimiento (Analytics Custom)**: Integrar telemetría de rendimiento ligera (como el reporte de Core Web Vitals a un dashboard de monitoreo en la nube).
