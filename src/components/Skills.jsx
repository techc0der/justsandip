import './Skills.css';

const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'C++', icon: '⚡' },
    { name: 'Java', icon: '☕' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'TailwindCSS', icon: '💨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Git', icon: '📦' },
    { name: 'Postman', icon: '📮' },
    { name: 'VS Code', icon: '💻' },
    { name: 'JWT Auth', icon: '🔐' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'DSA', icon: '🧠' },
];

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="skills-subtitle">
                    Technologies I work with on a daily basis
                </p>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <div className="skill-card" key={skill.name}>
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
