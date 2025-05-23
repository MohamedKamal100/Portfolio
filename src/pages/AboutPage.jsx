import profileImage from "../assets/profile.jpg"

export default function AboutPage() {
  return (
    <section className="py-20 px-4">
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
              specialize in creating responsive, user-friendly applications using React, JavaScript, and CSS frameworks.
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
  )
}
