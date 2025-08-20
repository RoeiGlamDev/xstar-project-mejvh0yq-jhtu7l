import React from 'react';
import './loading.css'; // Importing CSS for loading styles

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loader"></div> {/* Loader animation */}
            <h2 className="loading-text">Loading CleanSSR...</h2> {/* Loading text */}
        </div>
    );
};

export default Loading;