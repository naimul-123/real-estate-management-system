import Hero from '../components/Hero';
import { useContext } from 'react';
import { DataContext } from '../App';
import Estates from '../components/Estates';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

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
			<Team />
			<Testimonials testimonialsData={testimonialsData}></Testimonials>

		</div>
	);
};

export default Home;
