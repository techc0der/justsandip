import './About.css';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm <strong>Sandip Suthar</strong>, an aspiring Full Stack Developer
                            based in Ahmedabad, India. I'm currently pursuing my B.Tech in Computer Science
                            Engineering at Indus University (2022–2026).
                        </p>
                        <p>
                            I specialize in the <strong>MERN stack</strong> — MongoDB, Express, React, and Node.js —
                            and love building scalable, user-friendly web applications. From dynamic
                            e-commerce platforms to health-tech dashboards with real-time data handling,
                            I enjoy tackling complex problems and turning them into clean, efficient solutions.
                        </p>
                        <p>
                            Beyond web dev, I'm passionate about Data Structures & Algorithms and
                            competitive programming. I placed in the <strong>Top 75 out of 400+ teams</strong> at
                            the Odoo Hackathon and have participated in cybersecurity challenges at NetSquare.
                        </p>
                    </div>
                    <div className="about-highlights">
                        <div className="highlight-card">
                            <div className="highlight-icon">🎯</div>
                            <h3>Problem Solver</h3>
                            <p>Strong DSA skills with competitive programming experience</p>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">🚀</div>
                            <h3>MERN Stack</h3>
                            <p>End-to-end web development with modern JavaScript frameworks</p>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">🏆</div>
                            <h3>Hackathon Winner</h3>
                            <p>Top 75 out of 400+ teams in Odoo Combat Hackathon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
