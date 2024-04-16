import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoansHero from '../components/LoansHero';
import Finance from '../components/Finance';

const HomeLoans = () => {
    return (
		<div>
			<Helmet>
				<title>Home loans</title>
			</Helmet>
            <LoansHero></LoansHero>
            <Finance></Finance>
			
		</div>
    );
};

export default HomeLoans;