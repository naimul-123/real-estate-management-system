import { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpdateProfile from './pages/UpdateProfile';

export const DataContext = createContext();

function App() {

	const data = useLoaderData();
	

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
