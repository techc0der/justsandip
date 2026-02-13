import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
                <div className="contact-grid">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                rows="5"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn" disabled={submitted}>
                            {submitted ? '✓ Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:sandipsuthar086@gmail.com">sandipsuthar086@gmail.com</a>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📱</div>
                            <div>
                                <h3>Phone</h3>
                                <a href="tel:+919316081882">+91-9316081882</a>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div>
                                <h3>Location</h3>
                                <p>Ahmedabad, India</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">🟢</div>
                            <div>
                                <h3>Availability</h3>
                                <p>Open to opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
