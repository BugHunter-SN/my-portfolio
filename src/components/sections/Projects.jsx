import { RevealOnScroll } from "../RevealOnScroll";
import fosterImage from "../../images/foster-ecommerce.png";
import printforgeImage from "../../images/printforge-3d.png";
// import datavizImage from "../../images/ai-dashboard.png";
// import chatflowImage from "../../images/chat-app.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Foster",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, phone number signup and SMS confirmation, and customizable product inventory.",
      image: fosterImage,
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "FastAPI",
        "Twilio",
        "MTN Mobile Money",
        "Orange Money",
      ],
      liveUrl: "https://app.fosterliberia.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Printforge",
      description:
        "Scalable 3D platform for showcasing awesome 3D designs, with real-time rendering and interactive features.",
      image: printforgeImage,
      technologies: ["Next.js", "Tailwind", "React", "TypeScript"],
      liveUrl: "https://print-forge.onrender.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "DataViz Pro",
      description:
        "ML-powered data visualization platform with predictive analytics and interactive reports.",
      image: printforgeImage,
      technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "ChatFlow",
      description:
        "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      image: fosterImage,
      technologies: ["Socket.IO", "Express", "React", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="group glass rounded-xl border border-white/10 overflow-hidden hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-500/10 text-gray-400 py-1 px-3 rounded-full text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-200 hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
                      >
                        View Live →
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="group glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
