import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue in Leaflet + Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export function HomeMap() {
  const sdsuCenter: [number, number] = [32.775, -117.071]; // SDSU coordinates

  const parkingLots = [
    { name: 'Parking Structure 1', coords: [32.7762, -117.0715] },
    { name: 'Parking Structure 2', coords: [32.7745, -117.0702] },
    { name: 'Parking 12', coords: [32.7768, -117.0728] },
  ];

  return (
    <div className='Home-Map'>
      <MapContainer
        center={sdsuCenter}
        zoom={17}
        style={{ height: "300px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {parkingLots.map((lot, index) => (
          <Marker key={index} position={lot.coords as [number, number]}>
            <Popup>{lot.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
