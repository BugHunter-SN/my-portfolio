import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "JavaScript",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "AWS",
    "Render",
    "Vercel",
    "MongoDB",
    "PostgreSQL",
    "Java",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Science in Software Engineering</strong> -
                  University of Liberia (First-Year Student)
                </li>
                <li>
                  <strong>High School Diploma</strong> - J.J. Roberts United
                  Methodist School, Monrovia (Graduated 2018)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Backend Software Engineer at Spark Solutions Liberia (Nov
                    2024 – June 2025){" "}
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Designed, Developed and maintained 50+ APIs for monolithic
                      cloud-based applications.
                      <li>
                        Worked closely with senior backend engineers and DevOps
                        team to deploy containerized apps via Docker
                      </li>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Curriculum Developer & Instructor at Rhotel Digital and
                    Innovation Hub (Oct 2021 – Present)
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Delivered 300+ hours of training on programming basics
                      with Java, and modern web development tools (HTML5, CSS3,
                      JavaScript, ES6+, JSON, React 18)
                    </li>
                    <li>
                      Designed and structured a project-based learning
                      curriculum tailored for beginner and intermediate software
                      development students
                    </li>
                    <li>
                      Integrated modules on Git, web fundamentals, and API usage
                      to boost technical readiness among learners
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
