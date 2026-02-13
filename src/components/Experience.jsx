import './Experience.css';

const achievements = [
    {
        title: 'Top 75 — Odoo Combat Hackathon',
        description: 'Placed in the Top 75 out of 400+ competing teams, demonstrating problem-solving skills and teamwork under pressure.',
        icon: '🏆',
    },
    {
        title: 'NetSquare Cybersecurity Event',
        description: 'Participated in a cybersecurity event tackling real-world security challenges and learning about modern threat landscapes.',
        icon: '🔒',
    },
];

const interests = [
    'Full Stack Web Development',
    'Data Structures & Algorithms (DSA)',
    'Competitive Programming',
    'Open Source Contribution',
];

const education = [
    {
        degree: 'B.Tech in Computer Science Engineering',
        institution: 'Indus University',
        period: '2022 – 2026',
        cgpa: 'CGPA: 7.61',
        location: 'Ahmedabad, India',
    },
];

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h2 className="section-title">Education</h2>
                <div className="timeline">
                    {education.map((edu, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-role">{edu.degree}</h3>
                                        <p className="timeline-company">{edu.institution}</p>
                                    </div>
                                    <div className="timeline-meta">
                                        <span className="timeline-type">{edu.cgpa}</span>
                                        <span className="timeline-period">{edu.period}</span>
                                    </div>
                                </div>
                                <p className="timeline-description">
                                    📍 {edu.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '4rem' }}>Achievements</h2>
                <div className="achievements-grid">
                    {achievements.map((a, idx) => (
                        <div className="achievement-card" key={idx}>
                            <span className="achievement-icon">{a.icon}</span>
                            <div>
                                <h3 className="achievement-title">{a.title}</h3>
                                <p className="achievement-desc">{a.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '4rem' }}>Areas of Interest</h2>
                <div className="interests-grid">
                    {interests.map((interest, idx) => (
                        <div className="interest-tag" key={idx}>
                            {interest}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
