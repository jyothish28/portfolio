'use client';

import React, { useState } from 'react';

export default function JyothishPortfolio() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  attachment: null,
});

  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      title: 'Live-Love',
      description:
        'A modern social networking platform enabling users to connect, share moments, save inspiring posts, and manage their personal profile with advanced content controls.',
      tech: 'React • Node.js • Express • PostgreSQL • Tailwind CSS',
      link: '#', // Add live demo or GitHub link here
      github: '#',
    },
    {
      title: 'Food Donation Platform',
      description:
        'A full-stack web application connecting food donors with recipients. Features include donor & recipient dashboards, real-time request tracking, and comprehensive admin panel.',
      tech: 'React • MongoDB • Mongoose • Node.js • Tailwind CSS',
      link: '#',
      github: '#',
    },
    {
      title: 'Virtual Hackathon Platform',
      description:
        'Complete end-to-end platform for hosting virtual hackathons with registration, team formation, project submission, real-time judging system, and live leaderboard updates.',
      tech: 'React • Node.js • PostgreSQL • Socket.io • Tailwind CSS',
      link: '#',
      github: '#',
    },
  ];

  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 
    'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 
    'PostgreSQL', 'MongoDB', 'Mongoose', 'Git & GitHub',
    'RESTful APIs', 'Cybersecurity Fundamentals', 'Machine Learning Basics'
  ];

  const services = [
    {
      title: 'Resume / Personal Website',
      description: 'Clean, professional one-page or multi-page resume website perfect for students, freshers, and job seekers.',
      price: 'Starting at ₹1,500',
      icon: '📄',
    },
    {
      title: 'Portfolio Website',
      description: 'Stunning, modern portfolio with project showcases, animations, contact form, and SEO optimization.',
      price: 'Starting at ₹3,500',
      icon: '🎨',
    },
    {
      title: 'Business Website',
      description: 'Professional websites for small businesses, shops, gyms, coaching centers, cafes, and startups.',
      price: 'Starting at ₹5,500',
      icon: '🏢',
    },
    {
      title: 'Admin Dashboards',
      description: 'Feature-rich admin panels with analytics, user management, CRUD operations, and data visualization.',
      price: 'Starting at ₹8,000',
      icon: '📊',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('message', formData.message);

    if (formData.attachment) {
      data.append('attachment', formData.attachment);
    }

    const response = await fetch('https://portfolio-mrgs.onrender.com/api/contact', {
      method: 'POST',
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          attachment: null,
        });
      }, 3000);
    } else {
      alert('Failed to send message');
    }
  } catch (error) {
    console.error(error);
    alert('Server error. Please try again later.');
  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Jyothish <span className="text-cyan-400">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-cyan-500 text-slate-950 px-6 py-2.5 font-semibold text-sm hover:bg-cyan-400 transition"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-block px-4 py-2 bg-slate-900 border border-cyan-900 rounded-full text-cyan-400 text-sm font-medium mb-6">
              Full-Stack Web Developer
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Jyothish Anand Kumar</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Passionate full-stack developer crafting exceptional digital experiences. 
              I specialize in building fast, scalable, and user-friendly web applications using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 flex items-center gap-2 group"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-700 hover:border-cyan-400 px-8 py-4 font-semibold transition-all duration-300"
              >
                Let's Collaborate
              </a>
            </div>

            <div className="mt-12 flex gap-8 text-sm text-slate-400">
              <div>Chennai, India</div>
              <div>Open to Freelance & Opportunities</div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-3xl" />
              <div className="relative w-full h-full rounded-[3rem] border border-slate-700 bg-slate-900/70 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="text-center px-10">
                  <div className="text-7xl mb-6">💻</div>
                  <h3 className="text-2xl font-semibold mb-3">Available for Freelance</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Currently interning • Available evenings & weekends for exciting projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-16 lg:px-24 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert max-w-none text-lg text-slate-300 leading-relaxed">
            <p>
              I'm a passionate full-stack web developer currently pursuing an internship while actively seeking 
              freelance opportunities in the evenings and weekends. With strong foundations in React, Node.js, 
              and modern databases, I love turning ideas into elegant, functional digital products.
            </p>
            <p className="mt-6">
              My focus is on creating clean, performant, and user-centric applications. I'm always eager to learn 
              new technologies and take on challenging projects that push my boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-16 lg:px-24 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-16 lg:px-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <p className="text-slate-400 mt-2">Recent work that I'm proud of</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-2 w-12 bg-cyan-400 rounded mb-8 group-hover:w-16 transition-all" />
                
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-8 min-h-[100px]">
                  {project.description}
                </p>
                
                <div className="text-sm text-cyan-400 font-medium mb-8">
                  {project.tech}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" className="text-sm font-medium flex items-center gap-2 hover:text-cyan-400 transition">
                      Live Demo →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" className="text-sm font-medium flex items-center gap-2 hover:text-cyan-400 transition">
                      View Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Professional web development services tailored for individuals and small businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="text-cyan-400 font-bold text-lg">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-slate-400 text-lg">
              Available for freelance work after 7 PM IST and on weekends
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-14">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-slate-400">Your message has been received. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-slate-950 border border-slate-700 rounded-3xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition resize-y"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <div>
                   <label className="block text-sm text-slate-400 mb-2">
                      Attachment (optional)
                   </label>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                    onChange={(e) => {
                    setFormData({
                    ...formData,
                    attachment: e.target.files[0],
                    });
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-slate-300 file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-slate-950"
                 />
               </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-4 rounded-2xl transition text-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center text-sm">
            <div>
              <p className="text-slate-400">Email</p>
              <a href="mailto:jyothish4855@gmail.com" className="hover:text-cyan-400 transition">jyothish4855@gmail.com</a>
            </div>
            <div>
              <p className="text-slate-400">Phone</p>
              <a href="tel:+919876543210" className="hover:text-cyan-400 transition">+91 88862 78055</a>
            </div>
            <div>
              <p className="text-slate-400">Location</p>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 Jyothish Anand Kumar. Crafted with passion in Chennai.</p>
      </footer>
    </div>
  );
}