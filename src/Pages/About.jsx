import React from 'react';
import ash from '../assets/ash.jpeg';

const About = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h1 className="section-title">About Our Dojo</h1>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3>Our History</h3>
                        <p>Founded in 2010, Karate Fitness has been dedicated to teaching the art of Shotokan Karate to students of all ages. What started as a small group in a garage has grown into a premier martial arts academy.</p>
                        <br />
                        <h3>Our Mission</h3>
                        <p>To empower individuals through the practice of Karate, fostering physical strength, mental clarity, and indomitable spirit.</p>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px', height: '300px', backgroundColor: 'var(--card-bg)', border: '1px solid var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '8px' }}>
                        <img src={ash} alt="Dojo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
                    </div>
                </div>

                <h2 className="section-title">Meet The Sensei</h2>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    {/* Sensei Card 1 */}
                    <div className="sensei-card" style={{
                        position: 'relative',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--card-bg)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        maxWidth: '400px',
                        width: '100%'
                    }}>
                        <div style={{ height: '400px', overflow: 'hidden' }}>
                            <img src={ash} alt="Sensei Ashraf KFT" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: '50% 20%', /* Adjusted to show face */
                                transition: 'transform 0.5s ease'
                            }}
                                className="sensei-img"
                            />
                        </div>
                        <div style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--primary-color)' }}>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>Sensei Ashraf KFT</h4>
                            <p style={{ color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Chief Instructor</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                                5th Dan Black Belt with over 20 years of experience in Shotokan Karate and self-defense training.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
