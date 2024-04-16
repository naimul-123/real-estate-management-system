import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GeoLocation = ({latitude, longitude, location}) => {
    const position = [latitude, longitude];
    return (
        <div>
          <h2 className='text-2xl text-center'>Location</h2>
				<MapContainer
					className='w-full min-h-screen border'
					center={position}
					zoom={13}
					scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={position}>
						<Popup>
							{location}
						</Popup>
					</Marker>
				</MapContainer>  
        </div>
    );
};

export default GeoLocation;