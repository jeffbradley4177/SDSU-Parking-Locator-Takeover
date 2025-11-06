# Frontend (React + TypeScript + Vite)

## Overview
Interactive web UI for SDSU Parking Locator with real-time parking availability and campus map visualization.

## Tech Stack
- **Framework:** React 19.1.1
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.1.7
- **Styling:** TailwindCSS 4.1.14
- **Routing:** React Router 7.9.4
- **Maps:** Leaflet 1.9.4
- **HTTP Client:** Axios 1.7.9

## Project Structure

```
src/
├── api/              # API service layer (placeholder)
├── components/       # Reusable UI components
│   ├── Message.tsx
│   ├── Navigation.tsx
│   ├── ParkingLotList.tsx
│   ├── ParkingMap.tsx
│   └── ReportForm.tsx
├── pages/           # Page components
│   ├── About.tsx
│   ├── Home.tsx
│   ├── Map.tsx
│   └── Profile.tsx
├── hooks/           # Custom React hooks (placeholder)
├── types/           # TypeScript types (placeholder)
├── utils/           # Utility functions (placeholder)
├── constants/       # Constants (placeholder)
├── contexts/        # React contexts (placeholder)
├── assets/          # Static assets (images, data)
├── App.tsx          # Main app component
└── main.tsx         # App entry point
```

## Prerequisites
- Node.js 18+
- npm or yarn

## Running the Application

### Development Mode
```bash
cd frontend
npm install
npm run dev
```
UI available at: `http://localhost:5173`

### Build for Production
```bash
npm run build
# Output: dist/
```

### Preview Production Build
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file (see `.env.example`):

```env
VITE_API_URL=http://localhost:8080/api
VITE_MAP_CENTER_LAT=32.7749
VITE_MAP_CENTER_LNG=-117.0726
VITE_MAP_ZOOM=16
```

## Key Features

### Components
- **Navigation** - App navigation bar
- **ParkingMap** - Interactive Leaflet map showing parking lots
- **ParkingLotList** - List view of parking availability
- **ReportForm** - User reporting interface
- **Message** - Reusable message/alert component

### Pages
- **Home** - Landing page with overview
- **Map** - Full parking map view
- **About** - Project information
- **Profile** - User profile (planned)

## Development Notes

### Adding New Components
Place reusable components in `src/components/` and page-specific components in `src/pages/`.

### API Integration
API service functions should be added to `src/api/` (currently placeholder).

### TypeScript Types
Define shared types in `src/types/` (currently placeholder).

### Custom Hooks
Add React hooks to `src/hooks/` (currently placeholder).

## Docker Support

Build and run with Docker:
```bash
docker build -t parking-frontend .
docker run -p 80:80 parking-frontend
```

Or use docker-compose from project root:
```bash
docker-compose up frontend
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `nginx.conf` - Production server config (Docker)
