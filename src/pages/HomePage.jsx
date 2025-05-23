"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import profileImage from "../assets/profile.jpg"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 93 },
    { name: "Bootstrap", level: 89 },
    { name: "Git", level: 85 },
    { name: "Responsive Design", level: 95 },
  ]

  const projects = [
    {
      title: "Bookmark Web App",
      description:
        "A simple CRUD application where users can save and manage their favorite websites. Features live form validation, real-time search, and smooth animations using Bootstrap and SweetAlert2.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SweetAlert2", "LocalStorage"],
      image: "https://via.placeholder.com/300x200",
      github: "https://lnkd.in/dKvbsNBw",
      demo: "https://lnkd.in/difsx4Ae",
    },
    {
      title: "Fresh Cart E-commerce",
      description:
        "A modern, fully responsive e-commerce web app with user authentication, product filtering, shopping cart management, and smooth animations using Framer Motion.",
      tech: ["React", "Tailwind CSS", "Vite", "React Query", "Axios", "Formik"],
      image: "https://via.placeholder.com/300x200",
      github: "https://lnkd.in/dtRmpnrT",
      demo: "https://lnkd.in/dxF8JgS7",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills, built with React and featuring an animated star background using Canvas API.",
      tech: ["React", "Tailwind CSS", "Canvas API", "JavaScript"],
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/MohamedKamal100",
      demo: "#",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 overflow-hidden">
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Mohamed Kamal"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mohamed Kamal
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">Junior Front-End Developer</p>

          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful, responsive web experiences with modern technologies like React,
            JavaScript, and Tailwind CSS. Always eager to learn and build amazing projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transition-transform duration-300 hover:scale-105 inline-block"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white/30 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Mohamed Kamal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Mohamed Kamal, a passionate junior front-end developer with expertise in modern web technologies. I
                specialize in creating responsive, user-friendly applications using React, JavaScript, and CSS
                frameworks.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey includes building practical projects like e-commerce platforms and CRUD applications. I love
                solving problems through code and creating seamless digital experiences that users enjoy.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400">2+</div>
                  <div className="text-sm text-gray-400">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborating on projects, or just having a chat
                  about web development. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      <a href="mailto:m7maaa@gmail.com" className="hover:text-blue-400 transition-colors">
                        m7maaa@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-gray-300">
                      <a
                        href="https://www.linkedin.com/in/mohamed-kamal-b65136325/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        linkedin.com/in/mohamed-kamal-b65136325
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🐙</span>
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-gray-300">
                      <a
                        href="https://github.com/MohamedKamal100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        github.com/MohamedKamal100
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
