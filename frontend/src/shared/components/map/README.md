# Map Components

This directory contains two map component options for displaying parking locations and other geographic data.

## Map (Leaflet-based)

**Location:** `@/shared/components/map`

### Use when:
- Rendering basic parking lot locations
- Need lightweight, open-source mapping solution
- OpenStreetMap tiles are sufficient
- Primary use case: `ParkingMapView`
- Budget constraints (free, no API keys required)

### Features:
- Leaflet.js based (open source)
- OpenStreetMap tiles
- Marker and popup support
- Lightweight and fast
- No API key required
- Full offline capability

### Example:
```tsx
import { Map } from "@/shared/components/map";

<Map center={[32.775, -117.071]} zoom={17}>
  {/* Map markers and overlays */}
</Map>
```

---

## GoogleMaps (Google Maps API)

**Location:** `@/shared/components/googlemaps`

### Use when:
- Need Google Maps specific features
- Advanced marker customization required (`MarkerPin`)
- Google Maps API features needed (Street View, Places, etc.)
- Primary use case: `ParkingMarker` with custom styled pins
- Google Maps branding/UX is preferred

### Features:
- Google Maps JavaScript API
- Advanced marker components (`Marker`, `MarkerPin`)
- Google Maps ecosystem integration
- Rich satellite imagery
- Street View integration potential
- Places API integration potential

### Requirements:
- `VITE_GOOGLE_MAPS_API_KEY` environment variable
- Google Cloud Console project with Maps JavaScript API enabled
- Billing account (though has free tier)

### Example:
```tsx
import { GoogleMaps, Marker, MarkerPin } from "@/shared/components/googlemaps";

<GoogleMaps center={[32.775, -117.071]} zoom={17}>
  <Marker position={[32.775, -117.071]} title="Parking Lot">
    <MarkerPin title="P" />
  </Marker>
</GoogleMaps>
```

---

## Configuration

Both components use shared configuration from `@/shared/utils/mapConfig.ts`:

- **SDSU_CENTER_COORDS**: Campus center coordinates `[32.775, -117.071]`
- **DEFAULT_MAP_CONFIG**: Default zoom (17) and center settings

### Leaflet Configuration:
```ts
import { configureLeafletIcons } from "@/shared/utils/mapConfig";

// Call once before rendering Leaflet maps
configureLeafletIcons();
```

### Google Maps Configuration:
- Set `VITE_GOOGLE_MAPS_API_KEY` in `.env` file
- See `.env.example` for template

---

## Decision Matrix

| Feature | Map (Leaflet) | GoogleMaps |
|---------|--------------|------------|
| Cost | Free | Free tier, then paid |
| Setup | No API key | API key required |
| Performance | Fast, lightweight | Heavier bundle |
| Customization | Moderate | High |
| Satellite View | No | Yes |
| Street View | No | Yes |
| Offline | Yes | No |
| Current Use | ParkingMapView | ParkingMarker |

---

## Migration Guide

### From Leaflet to Google Maps:
```tsx
// Before (Leaflet)
import { Map } from "@/shared/components/map";

<Map center={[lat, lng]} zoom={17}>
  <Marker position={[lat, lng]} />
</Map>

// After (Google Maps)
import { GoogleMaps, Marker } from "@/shared/components/googlemaps";

<GoogleMaps center={[lat, lng]} zoom={17}>
  <Marker position={[lat, lng]} />
</GoogleMaps>
```

### From Google Maps to Leaflet:
```tsx
// Before (Google Maps)
import { GoogleMaps, Marker } from "@/shared/components/googlemaps";

<GoogleMaps center={[lat, lng]} zoom={17}>
  <Marker position={[lat, lng]}>
    <MarkerPin />
  </Marker>
</GoogleMaps>

// After (Leaflet)
import { Map } from "@/shared/components/map";

<Map center={[lat, lng]} zoom={17}>
  {/* Use Leaflet marker components */}
</Map>
```

---

## Recommendation

**For this project:** Continue using both:
- **Leaflet (`Map`)** for `ParkingMapView` - provides basic, free mapping
- **Google Maps (`GoogleMaps`)** for `ParkingMarker` - provides advanced custom pins

This hybrid approach balances cost (Leaflet for main views) with features (Google Maps for enhanced UX).
