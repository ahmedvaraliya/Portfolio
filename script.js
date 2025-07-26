// Global Variables
let isDarkMode = true
let currentSkillIndex = 0
let activeSection = "home"

// Skills data
const skills = [
  "HTML & CSS",
  "JavaScript",
  "React & Next.js",
  "WordPress",
  "GitHub",
  "Canva Design",
  "Node.js",
  "TypeScript",
  "UI/UX Design",
  "Web Development",
]

const technicalSkills = [
  { name: "React/Next.js", level: 95, icon: "⚛️" },
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "TypeScript", level: 88, icon: "🔷" },
  { name: "Node.js", level: 85, icon: "🟢" },
  { name: "WordPress", level: 82, icon: "📝" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "UI/UX Design", level: 78, icon: "🎨" },
  { name: "MongoDB", level: 75, icon: "🍃" },
]

const projects = [
  {
    title: "E-Commerce Spider Store",
    description:
      "Full-stack e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
    image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=E-Commerce+Store",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
  },
  {
    title: "Web Crawler Analytics",
    description:
      "Advanced web scraping tool with real-time analytics dashboard. Built with Python and React for data visualization.",
    image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Web+Crawler",
    tech: ["Python", "React", "D3.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Data Analytics",
  },
  {
    title: "Spider Sense Dashboard",
    description:
      "Real-time monitoring system with predictive alerts and beautiful data visualization. Perfect for tracking web performance.",
    image: "https://via.placeholder.com/400x300/dc2626/ffffff?text=Dashboard",
    tech: ["Next.js", "TypeScript", "Chart.js", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Dashboard",
  },
  {
    title: "WordPress Web Agency",
    description:
      "Custom WordPress theme and plugin development for a digital agency. Includes custom post types and advanced ACF integration.",
    image: "https://via.placeholder.com/400x300/1d4ed8/ffffff?text=WordPress+Site",
    tech: ["WordPress", "PHP", "ACF", "SCSS"],
    github: "https://github.com",
    live: "https://example.com",
    category: "WordPress",
  },
  {
    title: "Mobile App UI Kit",
    description:
      "Complete mobile app UI kit designed in Figma and implemented in React Native. Includes 50+ screens and components.",
    image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Mobile+UI+Kit",
    tech: ["React Native", "Figma", "Expo", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Mobile",
  },
  {
    title: "AI Web Assistant",
    description:
      "AI-powered web assistant built with OpenAI API. Features include natural language processing and automated responses.",
    image: "https://via.placeholder.com/400x300/059669/ffffff?text=AI+Assistant",
    tech: ["Next.js", "OpenAI", "Prisma", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
    category: "AI/ML",
  },
]

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Web Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
    achievements: ["Increased app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Spider Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces using modern frontend technologies.",
    achievements: ["Built 15+ client websites", "Improved SEO scores by 60%", "Reduced load times by 35%"],
  },
  {
    title: "WordPress Developer",
    company: "Creative Web Solutions",
    period: "2019 - 2020",
    description:
      "Specialized in custom WordPress theme and plugin development. Worked with clients to deliver tailored content management solutions.",
    achievements: ["Created 20+ custom themes", "Developed 10+ plugins", "Client satisfaction rate 98%"],
  },
]

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeWebBackground()
  initializeSpiderWeb()
  initializeSkillCycling()
  initializeSkillsGrid()
  initializeProjectsGrid()
  initializeExperienceList()
  initializeScrollSpy()
  initializeMobileMenu()
  initializeContactForm()

  // Start animations after a short delay
  setTimeout(() => {
    document.body.classList.add("loaded")
  }, 100)
})

// Theme Toggle Function
function toggleTheme() {
  isDarkMode = !isDarkMode
  const body = document.getElementById("body")
  const themeIcon = document.getElementById("themeIcon")
  const navbar = document.getElementById("navbar")

  if (isDarkMode) {
    body.className = "bg-gradient-to-br from-black via-gray-900 to-red-950 text-white transition-all duration-1000"
    themeIcon.className = "fas fa-sun text-lg"
    body.classList.remove("light-mode")
  } else {
    body.className =
      "bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 transition-all duration-1000 light-mode"
    themeIcon.className = "fas fa-moon text-lg"
  }

  // Update web gradient colors
  updateWebGradient()
}

// Initialize Web Background
function initializeWebBackground() {
  const webBackground = document.getElementById("webBackground")

  // Create web strands
  for (let i = 0; i < 8; i++) {
    const angle = i * 45 * (Math.PI / 180)
    const x2 = 50 + Math.cos(angle) * 40
    const y2 = 50 + Math.sin(angle) * 40

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
    line.setAttribute("x1", "50%")
    line.setAttribute("y1", "50%")
    line.setAttribute("x2", `${x2}%`)
    line.setAttribute("y2", `${y2}%`)
    line.setAttribute("stroke", "url(#webGradient)")
    line.setAttribute("stroke-width", "1")
    line.classList.add("web-strand")
    line.style.animationDelay = `${i * 0.2}s`

    webBackground.appendChild(line)
  }
}

// Initialize Spider Web in Hero
function initializeSpiderWeb() {
  const spiderWeb = document.getElementById("spiderWeb")

  // Create radial web lines
  for (let i = 0; i < 12; i++) {
    const angle = i * 30 * (Math.PI / 180)
    const x2 = 200 + Math.cos(angle) * 180
    const y2 = 200 + Math.sin(angle) * 180

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
    line.setAttribute("x1", "200")
    line.setAttribute("y1", "200")
    line.setAttribute("x2", x2)
    line.setAttribute("y2", y2)
    line.setAttribute("stroke", "url(#centerGradient)")
    line.setAttribute("stroke-width", "2")
    line.setAttribute("filter", "url(#glow)")
    line.classList.add("web-line-animate")
    line.style.animationDelay = `${i * 0.1}s`

    spiderWeb.appendChild(line)
  }

  // Create concentric circles
  for (let i = 0; i < 5; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circle.setAttribute("cx", "200")
    circle.setAttribute("cy", "200")
    circle.setAttribute("r", (i + 1) * 30)
    circle.setAttribute("fill", "none")
    circle.setAttribute("stroke", "url(#centerGradient)")
    circle.setAttribute("stroke-width", "1.5")
    circle.setAttribute("filter", "url(#glow)")
    circle.classList.add("web-circle-animate")
    circle.style.animationDelay = `${i * 0.2}s`

    spiderWeb.appendChild(circle)
  }

  // Create central spider
  const spider = document.createElementNS("http://www.w3.org/2000/svg", "circle")
  spider.setAttribute("cx", "200")
  spider.setAttribute("cy", "200")
  spider.setAttribute("r", "8")
  spider.setAttribute("fill", isDarkMode ? "#ef4444" : "#3b82f6")
  spider.classList.add("spider-pulse")

  spiderWeb.appendChild(spider)
}

// Initialize Skill Cycling Animation
function initializeSkillCycling() {
  const skillText = document.getElementById("skillText")
  const currentSkill = document.getElementById("currentSkill")

  setInterval(() => {
    skillText.style.transform = "translateY(-100%)"
    skillText.style.opacity = "0"

    setTimeout(() => {
      currentSkillIndex = (currentSkillIndex + 1) % skills.length
      currentSkill.textContent = skills[currentSkillIndex]
      skillText.style.transform = "translateY(0)"
      skillText.style.opacity = "1"
    }, 300)
  }, 2500)
}

// Initialize Skills Grid
function initializeSkillsGrid() {
  const skillsGrid = document.getElementById("skillsGrid")

  technicalSkills.forEach((skill, index) => {
    const skillCard = document.createElement("div")
    skillCard.className =
      "bg-gray-800/50 border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 section-card-animate p-6 rounded-lg"
    skillCard.style.animationDelay = `${index * 0.1}s`

    skillCard.innerHTML = `
            <div class="text-center">
                <div class="text-3xl mb-2">${skill.icon}</div>
                <h3 class="text-lg font-bold mb-4">${skill.name}</h3>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div class="h-2 rounded-full transition-all duration-1000 bg-red-500 skill-progress-animate" 
                             style="width: ${skill.level}%; animation-delay: ${index * 0.2}s;"></div>
                    </div>
                </div>
            </div>
        `

    skillsGrid.appendChild(skillCard)
  })
}

// Initialize Projects Grid
function initializeProjectsGrid() {
  const projectsGrid = document.getElementById("projectsGrid")

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div")
    projectCard.className =
      "bg-gray-800/50 border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 group section-card-animate overflow-hidden rounded-lg"
    projectCard.style.animationDelay = `${index * 0.1}s`

    projectCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute top-4 right-4">
                    <span class="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-sm">${project.category}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                    <i class="fas fa-globe text-blue-400"></i>
                    ${project.title}
                </h3>
                <p class="opacity-80 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tech.map((tech) => `<span class="border border-gray-600 text-gray-300 px-2 py-1 rounded text-sm">${tech}</span>`).join("")}
                </div>
                <div class="flex gap-2">
                    <button class="border border-gray-600 hover:bg-gray-700 px-4 py-2 rounded flex-1 flex items-center justify-center gap-2">
                        <i class="fab fa-github"></i>
                        Code
                    </button>
                    <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded flex-1 flex items-center justify-center gap-2">
                        <i class="fas fa-external-link-alt"></i>
                        Live
                    </button>
                </div>
            </div>
        `

    projectsGrid.appendChild(projectCard)
  })
}

// Initialize Experience List
function initializeExperienceList() {
  const experienceList = document.getElementById("experienceList")

  experiences.forEach((exp, index) => {
    const expCard = document.createElement("div")
    expCard.className =
      "bg-gray-800/50 border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] section-card-animate p-6 rounded-lg"
    expCard.style.animationDelay = `${index * 0.2}s`

    expCard.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                    <h3 class="text-xl font-bold flex items-center gap-2">
                        <i class="fas fa-briefcase text-red-400"></i>
                        ${exp.title}
                    </h3>
                    <p class="text-lg font-semibold text-blue-400">${exp.company}</p>
                </div>
                <div class="flex items-center gap-2 text-sm opacity-80">
                    <i class="fas fa-calendar"></i>
                    ${exp.period}
                </div>
            </div>
            <p class="mb-4 opacity-90">${exp.description}</p>
            <div class="space-y-2">
                <h4 class="font-semibold flex items-center gap-2">
                    <i class="fas fa-award text-red-400"></i>
                    Key Achievements:
                </h4>
                <ul class="space-y-1 ml-6">
                    ${exp.achievements
                      .map(
                        (achievement) => `
                        <li class="flex items-center gap-2 opacity-80">
                            <i class="fas fa-bullseye text-xs"></i>
                            ${achievement}
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
        `

    experienceList.appendChild(expCard)
  })
}

// Scroll to Section Function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }

  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.add("hidden")
}

// Initialize Scroll Spy
function initializeScrollSpy() {
  const sections = ["home", "about", "skills", "projects", "experience", "contact"]
  const navLinks = document.querySelectorAll(".nav-link")
  const navbar = document.getElementById("navbar")

  function updateActiveSection() {
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (activeSection !== section) {
            activeSection = section

            // Update navigation
            navLinks.forEach((link) => {
              link.classList.remove("active")
              if (link.dataset.section === section) {
                link.classList.add("active")
              }
            })
          }
          break
        }
      }
    }

    // Update navbar background
    if (activeSection !== "home") {
      navbar.className = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode
          ? "bg-black/90 backdrop-blur-md border-b border-red-500/20"
          : "bg-white/90 backdrop-blur-md border-b border-blue-500/20"
      }`
    } else {
      navbar.className = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    }
  }

  window.addEventListener("scroll", updateActiveSection)
  updateActiveSection() // Initial call
}

// Initialize Mobile Menu
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })
}

// Initialize Contact Form
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    // Simulate form submission
    alert("Thank you for your message! I'll get back to you soon.")
    contactForm.reset()
  })
}

// Update Web Gradient Colors
function updateWebGradient() {
  const webGradient = document.getElementById("webGradient")
  const centerGradient = document.getElementById("centerGradient")

  if (webGradient) {
    const stops = webGradient.querySelectorAll("stop")
    stops[0].setAttribute("stop-color", isDarkMode ? "#ef4444" : "#3b82f6")
    stops[1].setAttribute("stop-color", isDarkMode ? "#dc2626" : "#1d4ed8")
  }

  if (centerGradient) {
    const stops = centerGradient.querySelectorAll("stop")
    stops[0].setAttribute("stop-color", isDarkMode ? "#ef4444" : "#3b82f6")
    stops[1].setAttribute("stop-color", isDarkMode ? "#dc2626" : "#1d4ed8")
  }
}

// Add smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const targetId = e.target.getAttribute("href").substring(1)
    scrollToSection(targetId)
  }
})

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe all sections for animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
})
