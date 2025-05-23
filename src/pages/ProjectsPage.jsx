import bookmarkImage from "../assets/bookmark.png" // You'll need to add this image
import freshCartImage from "../assets/freshcart.png" // You'll need to add this image
import portfolioImage from "../assets/portfolio.jpg" // You'll need to add this image

export default function ProjectsPage() {
  const projects = [
    {
      title: "Bookmark Web App",
      description:
        "A simple CRUD application where users can save and manage their favorite websites. Features live form validation, real-time search, and smooth animations using Bootstrap and SweetAlert2.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SweetAlert2", "LocalStorage"],
      image: bookmarkImage,
      github: "https://lnkd.in/dKvbsNBw",
      demo: "https://lnkd.in/difsx4Ae",
    },
    {
      title: "Fresh Cart E-commerce",
      description:
        "A modern, fully responsive e-commerce web app with user authentication, product filtering, shopping cart management, and smooth animations using Framer Motion.",
      tech: ["React", "Tailwind CSS", "Vite", "React Query", "Axios", "Formik"],
      image: freshCartImage,
      github: "https://lnkd.in/dtRmpnrT",
      demo: "https://lnkd.in/dxF8JgS7",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills, built with React and featuring an animated star background using Canvas API.",
      tech: ["React", "Tailwind CSS", "Canvas API", "JavaScript"],
      image: portfolioImage,
      github: "https://github.com/MohamedKamal100",
      demo: "#",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transition-transform duration-300 hover:scale-105"
            >

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-white/30 rounded-lg transition-colors duration-300 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
