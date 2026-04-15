# CVJBuitron

CV personal de Jair Buitron — construido con React, Vite y Tailwind CSS. Soporta inglés y español.

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior (recomendado v22)
- npm v8 o superior

> Si usas **nvm**, ejecuta `nvm use 22.22.0` antes de cualquier comando.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Producción

```bash
npm run build
```

El resultado queda en la carpeta `dist/`. Para previsualizar el build antes de desplegar:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── components/       # Header, Sidebar, About, Experience, Education, Footer
├── locales/
│   ├── en.json       # Textos en inglés
│   └── es.json       # Textos en español
├── data/
│   └── cvData.js     # Datos estáticos: URLs, logos, niveles de habilidad
├── i18n.js           # Configuración de i18next
├── App.jsx
└── main.jsx
public/
└── images/           # Logos de empresas y foto de perfil
```

## Tecnologías

| Herramienta | Uso |
|---|---|
| React 18 | UI |
| Vite 5 | Bundler y dev server |
| Tailwind CSS 3 | Estilos |
| i18next / react-i18next | Internacionalización (ES/EN) |
| lucide-react | Iconos |
