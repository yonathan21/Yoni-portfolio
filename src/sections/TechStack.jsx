import React from "react";

const skills = [
    {
        category: "Frontend",
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "React",
            "Responsive Design",
        ],
    },
    {
        category: "Animation & 3D",
        items: [
            "GSAP",
            "ScrollTrigger",
            "Three.js",
            "Web Animation",
            "Interactive UI",
        ],
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "Express.js",
            "REST API",
            "Authentication",
        ],
    },
    {
        category: "Database",
        items: [
            "SQL",
            "MySQL",
            "Database Design",
            "CRUD",
        ],
    },
    {
        category: "Tools",
        items: [
            "Git",
            "GitHub",
            "VS Code",
            "Vite",
            "NPM",
        ],
    },
];

const TechStack = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">

                {/* Heading */}
                <div className="skills-heading">

                    <p className="skills-subtitle">
                        MY EXPERTISE
                    </p>

                    <h2>
                        Skills & <span>Technologies</span>
                    </h2>

                    <p className="skills-description">
                        Technologies and tools I use to build modern,
                        responsive, interactive and high-performance
                        web applications.
                    </p>

                </div>

                {/* Skills */}
                <div className="skills-grid">

                    {skills.map((skill, index) => (
                        <div
                            className="skill-card"
                            key={index}
                        >

                            <h3>
                                {skill.category}
                            </h3>

                            <div className="skill-list">

                                {skill.items.map(
                                    (item, itemIndex) => (
                                        <span key={itemIndex}>
                      {item}
                    </span>
                                    )
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default TechStack;