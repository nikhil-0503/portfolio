export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-blue-600 text-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Nikhil S</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#interests" className="hover:underline">Interests</a>
            </li>
            <li>
              <a href="#tech" className="hover:underline">Tech Stack</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header id="about" className="text-center pt-32 pb-16 px-6 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-2">Hi, I'm Nikhil 👋</h1>
        <p className="text-xl mb-4">Pre-Final Year B.Tech Student in IT at SSN College of Engineering & IIT Madras</p>
        <p className="text-md mb-4">Passionate about AI, Data Science, full-stack systems, and solving real-world problems.</p>
        <div className="space-x-4">
          <a href="https://www.linkedin.com/in/nikhil0503/" className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">LinkedIn</a>
          <a href="https://github.com/nikhil-0503" className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">GitHub</a>
        </div>
      </header>

      {/* Interests Section */}
      <section id="interests" className="mt-16 w-full px-10 max-w-6xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Interests</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
          <li>Applied AI & Speech Systems</li>
          <li>Full-Stack Engineering & System Design</li>
          <li>Geospatial Intelligence & Optimization Algorithms</li>
          <li>Backend APIs & Database Systems</li>
        </ul>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="mt-16 w-full px-10 max-w-6xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <div>
            <h3 className="font-bold text-lg mb-1">Languages</h3>
            <p>Python, JavaScript, SQL, C</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Frameworks & Tools</h3>
            <p>Flask, FastAPI, React, Vite, Unity, OpenCV, Streamlit</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Databases</h3>
            <p>PostgreSQL, MySQL, MongoDB</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Cloud & DevOps</h3>
            <p>Docker, Git, GitHub Actions, Heroku, Firebase</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Others</h3>
            <p>Tailwind CSS (CDN), Nginx, Linux</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-16 w-full px-10 max-w-6xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2">Respiration Health Monitoring System</h3>
            <p className="text-gray-600">Health monitoring project built with React and sensors.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2">Wealthist</h3>
            <p className="text-gray-600">AI-powered financial wellness system with insights and education.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="text-xl font-bold mb-2">Department Library Management System</h3>
            <p className="text-gray-600">Flask + PostgreSQL library management system with search filters.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 w-full px-10 max-w-6xl text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-700 mb-4">Connect with me:</p>
        <div className="space-x-4">
          <a href="https://www.linkedin.com/in/nikhil0503/" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition">LinkedIn</a>
          <a href="https://github.com/nikhil-0503" className="bg-gray-800 text-white px-4 py-2 rounded font-semibold hover:bg-gray-900 transition">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 w-full bg-gray-200 text-center text-gray-700">
        © {new Date().getFullYear()} Nikhil — Built with React + Tailwind CSS (CDN)
      </footer>
    </div>
  );
}
