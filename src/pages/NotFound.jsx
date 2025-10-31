import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <>
        <div className="flex flex-col align-items-center justify-center h-screen text-center">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-xl text-bg-danger mb-6">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="text-bg-info text-primary px-4 py-2 rounded-2"
          >
            Go Home
          </Link>
        </div>
      </>
    );
}

export default NotFound;
