# Bike Networks Spain

Aplicación desarrollada en React + TypeScript para visualizar redes de bicicletas públicas en España, utilizando la API pública de [CityBikes](https://api.citybik.es/v2/). Permite ver un listado de redes disponibles, seleccionar una red y consultar sus estaciones con indicadores de disponibilidad y acceso directo a su ubicación en Google Maps.

---

## Funcionalidades

- Listado de redes de bicicletas públicas en España.
- Visualización de estaciones por red seleccionada.
- Indicador de disponibilidad de bicicletas (bajo, medio, alto).
- Enlace a la localización de cada estación en Google Maps.
- Soporte multi-idioma (ES/EN).

---

## Tecnologías utilizadas

- **React** – Librería principal para construcción de la UI.
- **TypeScript** – Tipado estático que mejora la mantenibilidad y escalabilidad del código.
- **Vite** – Bundler ultrarrápido ideal para proyectos modernos en React.
- **Tailwind CSS** – Utilidades para el estilo rápido y responsive.
- **TanStack Query** – Manejo de peticiones HTTP, caché y estados de carga.
- **i18next** + **react-i18next** – Traducciones gestionadas en archivos JSON.

---

## Estructura del proyecto

```bash
├── package-lock.json
├── package.json
├── public
│   └── locales
│       ├── en
│       │   └── translation.json
│       └── es
│           └── translation.json
├── src
│   ├── containers
│   │   ├── networkContainer.tsx
│   │   └── stationsContainer.tsx
│   ├── hooks
│   │   ├── useNetworks.ts
│   │   └── useStations.ts
│   ├── i18n.ts
│   ├── index.css
│   ├── main.tsx
│   ├── models
│   │   ├── network.ts
│   │   └── station.ts
│   ├── presenters
│   │   ├── languageSwitcher.tsx
│   │   ├── layout.tsx
│   │   ├── networkList.tsx
│   │   └── stationList.tsx
│   ├── services
│   │   └── citybike.service.ts
│   ├── utils
│   │   └── dayjsConfig.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Cómo iniciar el proyecto

- Clona el repositorio

```bash
git clone https://github.com/aruvaro88/city-bike-app.git
cd city-bike-app
```

- Instala las dependencias

```bash
npm install
```

- Ejecuta la aplicacion

```bash
npm run dev
```

La app estara disponible en: http://localhost:5173

## Notas técnicas

- Se sigue el patrón **Container-Presenter**:

  - Los `containers` gestionan datos, lógica de negocio y efectos.
  - Los `presenters` son componentes puros de presentación.

- Se aprovecha el caché y los estados (`loading`, `error`) automáticos de **TanStack Query**.

- Navegación sencilla con `react-router-dom`, utilizando las siguientes rutas:

  - `/` → Listado de redes.
  - `/stations/:networkId` → Listado de estaciones de una red específica.

- Cada estación incluye un **enlace directo a Google Maps**.

- El nivel de disponibilidad de bicicletas se clasifica en:
  - **Bajo**: 0–4 bicicletas.
  - **Medio**: 5–10 bicicletas.
  - **Alto**: 11+ bicicletas.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
