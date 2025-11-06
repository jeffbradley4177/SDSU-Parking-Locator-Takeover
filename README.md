# SDSU Parking Locator

A small class project to show SDSU parking lot availability.

## Project Structure

```
SDSU-Parking-Locator-Takeover/
├── backend/                   # Spring Boot API
│   ├── src/main/java/edu/sdsu/parking_backend/
│   │   ├── config/           # Configuration classes
│   │   ├── controller/       # REST controllers
│   │   ├── model/            # Entity classes
│   │   ├── repository/       # Data access layer
│   │   ├── service/          # Business logic
│   │   ├── dto/             # Data transfer objects (placeholder)
│   │   ├── exception/       # Custom exceptions (placeholder)
│   │   ├── constants/       # Application constants (placeholder)
│   │   └── util/            # Utility classes (placeholder)
│   ├── pom.xml
│   ├── Dockerfile
│   └── README.md
└── frontend/                 # React UI
    ├── src/
    │   ├── api/             # API service layer (placeholder)
    │   ├── components/      # Reusable UI components
    │   ├── pages/           # Page components
    │   ├── hooks/           # Custom React hooks (placeholder)
    │   ├── types/           # TypeScript types (placeholder)
    │   ├── utils/           # Utility functions (placeholder)
    │   ├── constants/       # Constants (placeholder)
    │   └── contexts/        # React contexts (placeholder)
    ├── package.json
    ├── Dockerfile
    ├── nginx.conf
    └── README.md
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
- **Frontend:** React 19, TypeScript, Vite, Leaflet, React Router

## Documentation
- See `backend/README.md` for backend setup and API details
- See `frontend/README.md` for frontend setup and component structure
