import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-900">
      
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white px-4">
        
        <h1 className="text-5xl font-bold leading-tight mb-4">
          <span className="block">Dhruv</span>
          <span className="block">Narayan</span>
          <span className="block">Vishwakarma</span>
        </h1>

        
        <p className="text-lg sm:text-xl mb-6">
          Full-Stack / MERN Developer
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
          <a
            href="/Dhruv_s_Resume.pdf"
            download="Dhruv_Resume.pdf"
            className="px-6 py-2 bg-white text-indigo-700 rounded-lg shadow hover:bg-gray-200 text-center"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Dhruv-codes76"
            target="_blank"
            className="px-6 py-2 bg-white text-indigo-700 rounded-lg shadow hover:bg-gray-200 text-center"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-narayan-vishwakarma-9a4733245/"
            target="_blank"
            className="px-6 py-2 bg-white text-indigo-700 rounded-lg shadow hover:bg-gray-200 text-center"
          >
            LinkedIn
          </a>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Aspiring Full-Stack / MERN Stack Developer with hands-on experience in
          building and deploying web applications. Skilled in Java, JavaScript,
          React, Node.js, Express.js, and MongoDB with projects like Zerodha
          Clone, Vehiclix and Weathery. Strong foundation in OOP, DBMS,
          Operating Systems, and Networks, passionate about developing scalable,
          user-focused solutions.
        </p>
      </section>

      
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Zerodha Clone</h3>
            <p className="mb-4">
              Trading platform clone with auth and dashboard.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://zerodha-clone-ashy-two.vercel.app"
                target="_blank"
                className="text-indigo-600"
              >
                Frontend
              </a>
              <a
                href="https://zerodha-clone-ibfd.vercel.app"
                target="_blank"
                className="text-indigo-600"
              >
                Dashboard
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Vehiclix</h3>
            <p className="mb-4">
              Vehicle rental web app with booking, reviews, and admin panel.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://vehiclix.onrender.com/"
                target="_blank"
                className="text-indigo-600"
              >
                Live
              </a>
              <a
                href="https://github.com/Dhruv-codes76/Vehiclix"
                target="_blank"
                className="text-indigo-600"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Weathery</h3>
            <p className="mb-4">
              React app with real-time weather forecasts using OpenWeather API.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/Dhruv-codes76/Weathery"
                target="_blank"
                className="text-indigo-600"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Other Projects</h3>
            <p className="mb-4">
              Explore more projects and experiments on my GitHub profile.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/Dhruv-codes76"
                target="_blank"
                className="text-indigo-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-5">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Java",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "SQL",
            "Tailwind CSS",
            "Git",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Training & Certificates
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center">
            <h3 className="font-semibold mb-2">Sypher Web</h3>
            <p>MERN Stack Training (2024)</p>
            <a
              href="/certificates/sypher-web.pdf"
              target="_blank"
              className="text-indigo-600 underline block mt-2"
            >
              View Certificate (PDF)
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center">
            <h3 className="font-semibold mb-2">Apna College</h3>
            <p>Delta Course: Full Stack Web Development</p>
            <a
              href="/certificates/apna-college.pdf"
              target="_blank"
              className="text-indigo-600 underline block mt-2"
            >
              View Certificate (PDF)
            </a>
          </div>
        </div>
      </section>

  
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="mb-2">
          Phone:{" "}
          <a
            href="tel:+916393275443"
            className="!text-white underline hover:text-gray-200"
          >
            +91 6393275443
          </a>
        </p>

        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:dhruvnvishwa@gmail.com"
            className="!text-white underline hover:text-gray-200"
          >
            dhruvnvishwa@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/Dhruv-codes76"
            target="_blank"
            className="px-4 py-2 bg-white text-indigo-700 rounded-lg shadow hover:bg-gray-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-narayan-vishwakarma-9a4733245/"
            target="_blank"
            className="px-4 py-2 bg-white text-indigo-700 rounded-lg shadow hover:bg-gray-200"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
