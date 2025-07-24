import React from "react";

const projects = [
  {
    title: "task_manager application",
    description:
      "A task management application that allows users to create, update, and delete tasks.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    liveLink: "https://task-manager-three-henna-62.vercel.app/",
    githubLink: "https://github.com/prashantbatchu/task_manager",
  },
  {
    title: "wheather-application ",
    description:
      "simple weather application that provides current weather information for any city using OpenWeatherMap API.",
    techStack: ["HTML","CSS", "JavaScript", "OpenWeatherMap API"],
    liveLink: "https://cool-eclair-6517b3.netlify.app/",
    githubLink: "https://github.com/prashantbatchu/Weather_App",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React and TailwindCSS showcasing my work and resume.",
    techStack: ["React", "TailwindCSS", "Vite", "Material Icons","Javascript"],
    liveLink: "https://portfolio-sigma-ten-47.vercel.app",
    githubLink: "https://github.com/prashantbatchu/portfolio",
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
