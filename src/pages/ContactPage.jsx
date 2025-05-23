"use client"

import { useState } from "react"

export default function ContactPage() {
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
    // Here you would typically handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 px-4">
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
                I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about
                web development. Feel free to reach out!
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
  )
}
