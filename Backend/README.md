# Backend (Spring Boot)

## Overview
REST API for SDSU Parking Locator with feature-based architecture for improved scalability and maintainability.

## Architecture

### Feature-Based Organization
The backend follows a domain-driven design with features organized by business capability:

```
src/main/java/edu/sdsu/parking_backend/
├── features/
│   ├── parking/              # Parking lot management
│   │   ├── controller/       # ParkingLotController
│   │   ├── service/          # ParkingLotService, MapService
│   │   ├── repository/       # ParkingLotRepository, ReportRepository
│   │   └── model/            # ParkingLot, Report entities
│   ├── analytics/            # Usage analytics
│   │   ├── controller/       # AnalyticsController
│   │   ├── service/          # AnalyticsService
│   │   ├── repository/       # AnalyticsRepository
│   │   └── model/            # Analytics entity
│   ├── user/                 # User management
│   │   ├── service/          # UserService
│   │   ├── repository/       # UserRepository
│   │   └── model/            # User, Student, Admin, Staff
│   └── admin/                # Admin operations
│       └── controller/       # AdminController
└── shared/                   # Cross-cutting concerns
    ├── config/               # SecurityConfig, SeedConfig
    ├── exception/            # Custom exceptions
    ├── constants/            # Application constants
    └── util/                 # Utility classes
```

## Prerequisites
- Java 17+
- Maven (wrapper included)

## Getting Started

### Run (Development)
```bash
cd backend
./mvnw spring-boot:run
```
API available at `http://localhost:8080`

### Build (JAR)
```bash
./mvnw clean package
```
Output: `backend/target/*.jar`

### Test
```bash
./mvnw test
```

## API Endpoints

### Parking Lots
- `GET /api/lots` - Get all parking lots
- `GET /api/lots/{id}` - Get specific lot by ID
- `PUT /api/lots/{id}/occupied` - Update occupied spaces

### Analytics
- `GET /api/analytics/generate` - Generate usage statistics
- `GET /api/analytics/export/{id}` - Export report as CSV

### Admin
- `POST /api/admin/analytics` - Generate analytics report

## Configuration

### Application Properties
Located at `src/main/resources/application.properties`

### Environment Variables
Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

### Profiles
Set active profile:
```bash
export SPRING_PROFILES_ACTIVE=dev
```

## Database
- **Development**: H2 in-memory database
- **Console**: Available at `/h2-console` when enabled

## Development Notes
- ✅ Feature modules are self-contained
- ✅ Shared code lives in `shared/` package
- ✅ Do not commit `target/` directory
- ✅ Do not commit secrets or `.env` files
- ✅ Use `.env.example` for configuration templates
- ✅ Create feature branch per task, PR to main

## Architecture Benefits
- **Scalability**: Easy to add new features without affecting existing ones
- **Maintainability**: Related code is grouped together
- **Team Collaboration**: Different developers can work on different features
- **Testing**: Features can be tested in isolation
