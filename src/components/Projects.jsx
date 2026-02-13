import './Projects.css';

const projects = [
    {
        title: 'Furniture E-Commerce Platform',
        description: 'A dynamic e-commerce web app featuring multi-role support with dashboards for both buyers and sellers. Secure product management, image uploads, and optimized backend queries for high-speed performance.',
        tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
        date: 'Dec 2024',
        github: 'https://github.com/techc0der/OnlineShoppingWebsite-Mern-Stack-',
    },
    {
        title: 'MedX — Patient & Doctor Dashboard',
        description: 'A health portal supporting secure login and role-based routing for patients and doctors. Features appointment scheduling, dashboard stats, patient history view, and doctor availability with JWT-based access controls.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TailwindCSS'],
        date: 'Mar 2025',
        github: 'https://github.com/techc0der/Health_care_system_-TeamName-MedX-',
    },
    {
        title: 'Task Management System',
        description: 'A task management app with login authentication, deadline tracking, and priority labels. Clean UI with dynamic filters for task sorting using React state management and TailwindCSS.',
        tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
        date: 'May 2025',
        github: 'https://github.com/techc0der/Task-Manager-MERN-Stack',
    },
];

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="projects-subtitle">Real-world applications I've built and deployed</p>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-header">
                                <div className="project-header-left">
                                    <svg className="project-folder" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <span className="project-date">{project.date}</span>
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
