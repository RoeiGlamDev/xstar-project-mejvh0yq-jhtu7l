import React from 'react';
import './StatsSection.css'; // Import CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <h2>100+</h2>
                    <p>Satisfied Clients</p>
                </div>
                <div className="stat-item">
                    <h2>500+</h2>
                    <p>Cleanings Completed</p>
                </div>
                <div className="stat-item">
                    <h2>10+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                    <h2>4.9/5</h2>
                    <p>Customer Rating</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;