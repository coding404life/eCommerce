# eCommerce App

<img width="1405" height="872" alt="image" src="https://github.com/user-attachments/assets/52e658a4-541c-4641-90c9-c0c23b00ef52" />

This app was migrated from Create React App (CRA) to Vite for a faster dev experience while keeping the existing codebase and libraries intact.

## Tech Stack

- React (current project version)
- Redux + Thunk
- React Router v5
- Material‑UI v4
- Vite (dev/build)

## Getting Started

### Install

```bash
pnpm install
```

### Development (Vite)

```bash
pnpm dev
```

- Opens on `http://localhost:5173`
- Entry file: `index.html` → `/src/main.jsx`

### Production Build (Vite)

```bash
pnpm build
```

- Output directory: `dist/`

### Preview the Build

```bash
pnpm preview
```

- Serves `dist/` locally

## Notes after Migration

- If you see a blank screen, check the browser console for runtime errors first.
- Some privacy/ad‑block extensions may block Firebase Analytics in dev. Disable them for `localhost`, or guard analytics to only run in production.
- Chrome warning "Unrecognized feature: 'browsing-topics'" is harmless and can be ignored in dev.

## CORS in Dev (course-api.com)

The API `https://course-api.com/react-store-products` may block `localhost:5173` due to CORS. Use a Vite dev proxy and call the path instead of the full URL:

1. `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/react-store-products": {
        target: "https://course-api.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
```

2. Replace fetch URL in code (example):

```js
fetch("/react-store-products");
```

## Common Dev Issues

- "Blocked by client" loading Firebase scripts: ad‑block extension; disable for `localhost` or guard analytics for prod only.
- ReactDOM.findDOMNode error with React 19: some older libs (e.g., MUI v4, certain carousels) still use `findDOMNode`. Use React 18 to avoid it, or upgrade those libs if staying on React 19.

## Scripts

- `pnpm dev` – start Vite dev server
- `pnpm build` – build with Vite
- `pnpm preview` – preview production build

## Project Structure

```
├── index.html               # Vite entry HTML
├── vite.config.js           # Vite configuration
├── src/
│   ├── main.jsx            # React entry (mounts <App />)
│   ├── App/                # App shell and routing
│   ├── Pages/              # Feature pages
│   ├── shared/             # Shared components & utilities
│   ├── store/              # Redux store, reducers, actions
│   └── assets/             # Static assets
└── package.json            # Scripts and dependencies
```

## Troubleshooting

- Clear Vite cache if needed: `rm -rf node_modules/.vite`
- Restart dev server after config changes.
- Share the first console error for targeted help.
