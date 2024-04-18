import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
const GeoLocation = ({ latitude, longitude, location }) => {
	const position = [latitude, longitude];
	return (
		<div className='w-full'>
			<h2 className='text-3xl my-3 text-gray-950 font-semibold'>Location</h2>
			<MapContainer
				className='w-full min-h-96 border'
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
GeoLocation.propTypes = {
	latitude: PropTypes.string,
	longitude: PropTypes.string,
	location: PropTypes.string,
}
export default GeoLocation;