import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce platform with payment gateway integration, user login, and dynamic cart system.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "TailwindCSS"],
    liveLink: "https://your-ecommerce-demo.vercel.app",
    githubLink: "https://github.com/your-username/ecommerce-site",
  },
  {
    title: "Student Performance Dashboard",
    description:
      "Dashboard to track academic performance using charts and tables. Built with React, Node.js, and MongoDB.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "TailwindCSS"],
    liveLink: "https://your-dashboard-demo.netlify.app",
    githubLink: "https://github.com/your-username/student-dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React and TailwindCSS showcasing my work and resume.",
    techStack: ["React", "TailwindCSS", "Vite", "Material Icons","Javascript"],
    liveLink: "https://yourportfolio.vercel.app",
    githubLink: "https://github.com/your-username/portfolio-site",
  },
];

const Projects = () => {
  return (
    <section className="pt-10 pb-12 lg:pt-[120px] lg:pb-[90px] bg-transparent">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark dark:text-white mb-2 text-[#00df9a]">
            <span className="material-symbols-outlined text-4xl align-middle mr-2 text-[#00df9a]">
              terminal
            </span>
            Projects
          </h2>
          <p className="text-base text-body-color dark:text-gray-400">
            A few things I've built recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-body-color dark:text-gray-400 mb-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-[#00df9a] bg-opacity-10 text-gray-900 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-[#00df98e3] hover:bg-[#00df9a] text-black font-semibold rounded hover:bg-opacity-90"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-[#00df9a] text-[#00df9a] rounded hover:bg-[#00df9a] hover:text-black "
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
