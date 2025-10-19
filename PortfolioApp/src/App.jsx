import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500 flex flex-col items-center">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl tracking-tight">Nikhil S</h1>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#interests" className="hover:text-blue-500">Interests</a></li>
              <li><a href="#tech" className="hover:text-blue-500">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-32 pb-24 text-center px-6 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight text-center">
          Hi, I'm Nikhil 👋
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl text-center text-gray-600 dark:text-gray-300">
          Pre-Final Year B.Tech Student in IT at SSN College of Engineering & IIT Madras. 
          Passionate about AI, Data Science, full-stack systems, and solving real-world problems.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/nikhil0503/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:shadow-lg hover:bg-blue-700 transition font-semibold">LinkedIn</a>
          <a href="https://github.com/nikhil-0503" className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:shadow-lg hover:bg-gray-900 transition font-semibold">GitHub</a>
        </div>
      </header>

      {/* Interests Section */}
      <section id="interests" className="mt-24 text-center px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Interests</h2>
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 text-lg text-center">
          <p>Applied AI & Speech Systems</p>
          <p>Full-Stack Engineering & System Design</p>
          <p>Geospatial Intelligence & Optimization Algorithms</p>
          <p>Backend APIs & Database Systems</p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="mt-24 text-center px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Languages</h3>
            <p>Python, JavaScript, SQL, C</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Frameworks & Tools</h3>
            <p>Flask, FastAPI, React, Vite, Unity, OpenCV, Streamlit</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Databases</h3>
            <p>PostgreSQL, MySQL, MongoDB</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Cloud & DevOps</h3>
            <p>Docker, Git, GitHub Actions, Heroku, Firebase</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Others</h3>
            <p>Tailwind CSS (CDN), Nginx, Linux</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-24 text-center px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">Respiration Health Monitoring System</h3>
            <p className="text-gray-600 dark:text-gray-300">Health monitoring project built with React and sensors.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">Wealthist</h3>
            <p className="text-gray-600 dark:text-gray-300">AI-powered financial wellness system with insights and education.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">Department Library Management System</h3>
            <p className="text-gray-600 dark:text-gray-300">Flask + PostgreSQL library management system with search filters.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-24 mb-16 text-center px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Connect with me:</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="https://www.linkedin.com/in/nikhil0503/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:shadow-lg hover:bg-blue-700 transition font-semibold">LinkedIn</a>
          <a href="https://github.com/nikhil-0503" className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:shadow-lg hover:bg-gray-900 transition font-semibold">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 w-full bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Nikhil — Built with React + Tailwind CSS
      </footer>
    </div>
  );
}
