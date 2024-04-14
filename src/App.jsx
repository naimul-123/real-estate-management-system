import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const DataContext = createContext();

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		const dataloader = async () => {
			const res = await fetch('./data.json');
			const data = await res.json();
			setData(data);
		};

		dataloader();
	}, []);

	return (
		<div className='max-w-screen-2xl mx-auto px-8'>
			<DataContext.Provider value={data}>
				<Navbar></Navbar>
				<Outlet></Outlet>
				<Footer></Footer>
			</DataContext.Provider>
		</div>
	);
}

export default App;
