import Hero from '../components/Hero';
import { useContext } from 'react';
import { DataContext } from '../App';

import Estates from '../components/Estates';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import GeoLocation from '../components/GeoLocation';

const Home = () => {
	const data = useContext(DataContext);
	const testimonialsData = useLoaderData();
	
	return (
		<div>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Hero data={data}></Hero>
			<Estates data={data}></Estates>
			<Testimonials testimonialsData = {testimonialsData}></Testimonials>
			
		</div>
	);
};

export default Home;
