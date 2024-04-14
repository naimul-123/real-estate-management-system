import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <p>Page not found! go to <Link to="/"></Link></p>
        </div>
    );
};

export default ErrorPage;