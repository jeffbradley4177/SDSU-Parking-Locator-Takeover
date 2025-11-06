# Frontend (React + TypeScript + Vite)

## Overview
Interactive web UI for SDSU Parking Locator with real-time parking availability, campus map visualization, and feature-based architecture.

## Tech Stack
- **Framework:** React 19.1.1
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.1.7
- **Styling:** TailwindCSS 4.1.14
- **Routing:** React Router 7.9.4
- **Maps:** Leaflet 1.9.4
- **HTTP Client:** Axios 1.7.9
- **Component Development:** Storybook 10.0.5
- **Testing:** Vitest + Playwright

## Architecture

### Feature-Based Organization
The frontend follows a modular architecture with clear separation of concerns:

```
src/
├── features/               # Domain features (business logic)
│   ├── parking/           # Parking visualization
│   │   └── components/    # ParkingMap, ParkingLotList
│   ├── navigation/        # App navigation
│   │   └── components/    # Navigation
│   └── reporting/         # User reporting
│       └── components/    # ReportForm
│
├── shared/                # Shared resources
│   ├── api/              # API client & endpoint definitions
│   ├── components/       # Reusable UI components (Message)
│   ├── assets/           # Images, data files
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript interfaces/types
│   ├── utils/            # Utility functions
│   ├── constants/        # Application constants
│   └── contexts/         # React Context providers
│
├── pages/                # Route-level components
│   ├── Home.tsx
│   ├── Map.tsx
│   ├── About.tsx
│   └── Profile.tsx
│
├── stories/              # Storybook component examples
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

### Component Layers

**Layer 1: Shared Components** (`shared/components/`)
- Reusable, generic UI components
- No business logic
- Example: Message, LoadingSpinner

**Layer 2: Feature Components** (`features/*/components/`)
- Domain-specific components
- May contain business logic
- Example: ParkingMap, ReportForm

**Layer 3: Pages** (`pages/`)
- Route components
- Compose feature components
- Example: Home, Map, About

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
- `npm run storybook` - Run Storybook component explorer
- `npm run build-storybook` - Build static Storybook
- `npx vitest --project=storybook` - Run component tests

## Environment Variables

Create a `.env` file (see `.env.example`):

```env
VITE_API_URL=http://localhost:8080/api
VITE_MAP_CENTER_LAT=32.7749
VITE_MAP_CENTER_LNG=-117.0726
VITE_MAP_ZOOM=16
```

## Key Features

### Feature Modules
- **Parking** (`features/parking/`) - Interactive Leaflet map and lot list view
- **Navigation** (`features/navigation/`) - App navigation bar
- **Reporting** (`features/reporting/`) - User reporting interface

### Pages
- **Home** - Landing page with overview
- **Map** - Full parking map view
- **About** - Project information
- **Profile** - User profile (planned)

## Development Guidelines

### Adding New Features
1. Create feature folder: `src/features/[feature-name]/`
2. Add subfolders as needed: `components/`, `hooks/`, `types/`, `api/`
3. Keep feature code self-contained
4. Import shared utilities from `src/shared/`

### Adding Shared Components
Place reusable, generic components in `src/shared/components/`

### API Integration
- Add API client in `src/shared/api/client.ts`
- Define feature-specific endpoints in `src/features/[feature]/api/`

### TypeScript Types
- Shared types → `src/shared/types/`
- Feature-specific types → `src/features/[feature]/types/`

### Custom Hooks
- Shared hooks → `src/shared/hooks/`
- Feature-specific hooks → `src/features/[feature]/hooks/`

### Import Rules
✅ Features can import from `shared/`
✅ Pages can import from `features/` and `shared/`
❌ `shared/` should NOT import from `features/`
❌ Features should NOT import from other features

## Storybook

Storybook is configured for component development and testing.

### Running Storybook
```bash
npm run storybook
```
Storybook available at: `http://localhost:6006`

### Creating Stories
Create `.stories.ts` files alongside your components:

```typescript
// src/components/MyComponent.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    // component props
  },
};
```

### Installed Addons
- **a11y** - Accessibility testing
- **vitest** - Component testing integration
- **docs** - Auto-generated documentation
- **interactions** - User interaction testing

### Component Testing
Run component tests with Vitest:
```bash
npx vitest --project=storybook
```

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

## Architecture Benefits
- ✅ **Scalability**: Easy to add new features without affecting existing code
- ✅ **Maintainability**: Related code is grouped together
- ✅ **Reusability**: Shared components and utilities are centralized
- ✅ **Team Collaboration**: Different developers can work on different features
- ✅ **Testing**: Features can be tested in isolation
- ✅ **Code Organization**: Clear boundaries between features and shared code

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `nginx.conf` - Production server config (Docker)
- `.storybook/main.ts` - Storybook configuration
- `.storybook/preview.ts` - Storybook preview settings
- `.storybook/vitest.setup.ts` - Vitest integration setup
