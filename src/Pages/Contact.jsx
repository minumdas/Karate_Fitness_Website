import React from 'react';

const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h1 className="section-title">Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h3>Get in Touch</h3>
                        <p className="mb-4">Have questions? We'd love to hear from you. Fill out the form or visit us at the dojo.</p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4>Location</h4>
                            <p>Near Palm Tree, Seaport Airport Road</p>
                            <p>Kakkanad, Kochi</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4>Contact Info</h4>
                            <p>Email: info@karatefitness.com</p>
                            <p>Phone: 9061223224</p>
                        </div>

                        <div>
                            <h4>Hours</h4>
                            <p>Mon-Fri: 10:00 AM - 9:00 PM</p>
                            <p>Sat: 9:00 AM - 2:00 PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>

                    <div>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Your Email" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                                <textarea rows="5" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
