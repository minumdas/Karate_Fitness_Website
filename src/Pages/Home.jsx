import React from 'react';
import Hero from '../Components/Hero/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero />

            <section className="py-5">
                <div className="container">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="text-center">
                            <h3>Expert Instructors</h3>
                            <p>Learn from world-class masters with decades of experience.</p>
                        </div>
                        <div className="text-center">
                            <h3>Traditional Values</h3>
                            <p>We teach respect, discipline, and perseverance alongside technique.</p>
                        </div>
                        <div className="text-center">
                            <h3>Modern Facilities</h3>
                            <p>Train in a safe, clean, and fully equipped dojo environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="container text-center">
                    <h2 className="section-title">Start Your Journey</h2>
                    <p className="mb-4">Join our community and discover your true potential.</p>
                    <Link to="/programs" className="btn">View Programs</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
