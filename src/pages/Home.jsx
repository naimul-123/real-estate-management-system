

import Hero from '../components/Hero';
import { useContext } from 'react';
import { DataContext } from '../App';

import Estates from '../components/Estates';

const Home = () => {
    const data = useContext(DataContext);
   console.log(data);
    return (
        <div>
           
            <Hero data = {data}></Hero>
            <Estates data = {data}></Estates>
            

        </div>
    );
};

export default Home;