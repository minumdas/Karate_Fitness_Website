import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programs = [
        {
            title: "Karate Training",
            description: "Master the art of self-defense, discipline, and focus with our comprehensive Karate training for all ages.",
            level: "Beginner to Black Belt"
        },
        {
            title: "Weight Loss Challenge",
            description: "Achieve your fitness goals with our high-intensity weight loss program designed to burn calories and build strength.",
            level: "All Fitness Levels"
        },
        {
            title: "Gymnastics Training",
            description: "Develop flexibility, balance, and agility with our specialized gymnastics training sessions.",
            level: "Beginner to Advanced"
        }
    ];

    return (
        <div className="py-5">
            <div className="container">
                <h1 className="section-title">Our Programs</h1>
                <p className="text-center mb-4">We offer classes for all ages and skill levels.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {programs.map((program, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            border: '1px solid var(--text-light)',
                            borderRadius: '8px',
                            backgroundColor: 'var(--card-bg)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <h3 style={{ color: 'var(--primary-color)' }}>{program.title}</h3>
                            <p style={{ margin: '1rem 0', color: 'var(--text-dark)' }}>{program.description}</p>
                            <p><strong>Level:</strong> {program.level}</p>
                            <Link to="/contact" className="btn-outline" style={{ display: 'inline-block', marginTop: '1rem', padding: '8px 20px', borderRadius: '4px', textDecoration: 'none' }}>Join Now</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;
