# SDSU Parking Locator

A small class project to show SDSU parking lot availability.

## Project Structure

```
SDSU-Parking-Locator-Takeover/
├── backend/                   # Spring Boot API (Feature-based architecture)
│   └── src/main/java/edu/sdsu/parking_backend/
│       ├── features/         # Domain features
│       │   ├── parking/      # Parking lot management
│       │   │   ├── controller/    # REST endpoints
│       │   │   ├── service/       # Business logic
│       │   │   ├── repository/    # Data access
│       │   │   └── model/         # Entities (ParkingLot, Report)
│       │   ├── analytics/    # Usage analytics
│       │   │   ├── controller/
│       │   │   ├── service/
│       │   │   ├── repository/
│       │   │   └── model/         # Analytics entity
│       │   ├── user/         # User management
│       │   │   ├── service/
│       │   │   ├── repository/
│       │   │   └── model/         # User, Student, Admin, Staff
│       │   └── admin/        # Admin operations
│       │       └── controller/
│       └── shared/           # Cross-cutting concerns
│           ├── config/       # Security, data seeding
│           ├── exception/    # Custom exceptions
│           ├── constants/    # Application constants
│           └── util/         # Utility classes
│
└── frontend/                 # React UI (Feature-based architecture)
    └── src/
        ├── features/         # Domain features
        │   ├── parking/      # Parking visualization
        │   │   └── components/     # ParkingMap, ParkingLotList
        │   ├── navigation/   # App navigation
        │   │   └── components/     # Navigation
        │   └── reporting/    # User reporting
        │       └── components/     # ReportForm
        ├── shared/           # Shared resources
        │   ├── api/          # API client & endpoints
        │   ├── components/   # Reusable components
        │   ├── assets/       # Images, data files
        │   ├── hooks/        # Custom React hooks
        │   ├── types/        # TypeScript types
        │   ├── utils/        # Utility functions
        │   ├── constants/    # Constants
        │   └── contexts/     # React contexts
        ├── pages/            # Route components
        ├── stories/          # Storybook stories
        └── .storybook/       # Storybook configuration
```

## Quick Start

### Prerequisites
- **Backend:** Java 17+, Maven
- **Frontend:** Node.js 18+, npm

### Backend
```bash
cd backend
./mvnw spring-boot:run
# API available at http://localhost:8080
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# UI available at http://localhost:5173

# Optional: Run Storybook for component development
npm run storybook
# Storybook available at http://localhost:6006
```

## Getting Started (Cloning files to your computer)

### Option 1: GitHub Desktop
- From this screen, click on the "code" section on the top left
- Click on the green "code" button, then "open with GitHub Desktop"
- Install GitHub Desktop and launch it
- Try step 2 again
- Choose a place to save the folder, then click Clone. 

  
### Option 2: Command Line (Git installed)
```bash
git clone https://github.com/jeffbradley4177/SDSU-Parking-Locator-Takeover.git
cd SDSU-Parking-Locator-Takeover
```

## Updating Project (After First Clone)

### GitHub Desktop
- Open GitHub Desktop
- Click **Fetch origin** (top bar)
- If new commits exist, click **Pull origin**

### Command Line
```bash
git pull
```

## Features
- Real-time parking availability view
- Interactive campus map
- Parking lot status reporting
- Analytics dashboard (admin)

## Tech Stack
- **Backend:** Spring Boot 3.5.6, Java 17, H2 Database, Spring Security
- **Frontend:** React 19, TypeScript, Vite, Leaflet, React Router, Storybook
- **DevOps:** Docker, Docker Compose

## Documentation
- See `backend/README.md` for backend setup and API details
- See `frontend/README.md` for frontend setup and component structure
