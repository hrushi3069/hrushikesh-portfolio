export default function Home() {
  const projects = [
    {
      title: "Explainable ML for Hazardous Asteroids",
      category: "Machine Learning",
      tools: "Python, XGBoost, SHAP, SMOTE, Random Forest",
      text: "Classified potentially hazardous asteroids using NASA JPL orbital data. Applied SMOTE and class weighting for imbalance, compared Random Forest, XGBoost, and Logistic Regression, and used SHAP explainable AI to identify key risk factors.",
      status: "Ongoing (Dissertation Project)"
    },
    {
      title: "King County House Price Prediction",
      category: "Machine Learning",
      tools: "Python, Scikit-learn, Pandas",
      text: "Built and compared regression models to predict house prices. Trained Linear Regression, Decision Tree, Random Forest, Neural Network, and Stacking Ensemble models. Evaluated using MAE, RMSE, R², and 5-fold cross-validation.",
      github: "https://github.com/hrushi3069/Housing-Market-Analysis-and-Price-Prediction-Using-SAS"

    },
    {
      title: "King County Housing Dataset Analysis",
      category: "Data Analytics",
      tools: "Python, EDA, Visualisation",
      text: "Analysed house prices using Python with statistical analysis, visualisation, correlation, preprocessing, histograms, boxplots, scatter plots, and heatmaps to explore key patterns in the dataset.",
    },
    {
      title: "Multivariate Statistical Modelling",
      category: "Advanced Statistics",
      tools: "RStudio, PCA, MANOVA, ROC",
      text: "Applied logistic regression, LDA, classification trees, PCA, factor analysis, MANOVA, ROC, AUC, and cross-validation for statistical modelling and classification.",
    },
    {
      title: "Housing Sale Price Analysis",
      category: "Business Analytics",
      tools: "SAS, PROC GLM, Regression",
      text: "Cleaned and analysed housing data using SAS. Used descriptive statistics, correlation, regression, and robustness checks to identify key price drivers.",
    },
    {
      title: "Google Play Store Ratings Analysis",
      category: "Data Analytics",
      tools: "R, Random Forest, Regression",
      text: "Analysed app ratings, compared free and paid apps, cleaned data, built predictive models, and explained rating patterns using statistical methods.",
    },
    {
      title: "Survival Analysis of Cholangitis Dataset",
      category: "Medical Statistics",
      tools: "R, Kaplan-Meier, Cox Regression",
      text: "Used survival curves, log-rank tests, Cox regression, hazard ratios, backward AIC, forest plots, concordance, likelihood ratio tests, and proportional hazards checks.",
    },
    {
      title: "Medical Statistics Case Study",
      category: "Medical Statistics",
      tools: "R, Chi-Square, Poisson, Bayesian",
      text: "Analysed clinical datasets using two-proportion tests, chi-square, Fisher's exact test, Poisson and negative binomial regression, risk ratios, odds ratios, Bayesian analysis, and sample size calculation.",
    },
    {
      title: "BOB Online Fashion Retailer Case Study",
      category: "Business Analytics",
      tools: "CRISP-DM, Segmentation, Analytics",
      text: "Proposed predictive analytics for premium product up-selling using CRISP-DM methodology, customer segmentation strategies, and revenue-growth analysis.",
      github: "https://github.com/hrushi3069/BOB-Customer-Upselling-Case-Study"    
    },
    {
      title: "Database Design for Worldwide Awaydays",
      category: "Database Design",
      tools: "SQL, MySQL, ERD, Star Schema",
      text: "Designed a relational database for guests, bookings, suppliers, activities, and payments. Covered BI reporting questions, star schema design, GDPR compliance, and database security.",
      github: "https://github.com/hrushi3069/Pier-Party-Planning-Data-Management"
    },
    {
      title: "Land Acquisition Cost Prediction",
      category: "GIS & Technical Support",
      tools: "GIS, AutoCAD, Google Earth Pro",
      text: "Created and managed a 1000m GIS-based dataset for land acquisition records linked to HS2 technical support. Coordinated engineering drawings, project documents, and technical records.",
    },
    {
      title: "Placement & Salary Prediction Android App",
      category: "Mobile Development",
      tools: "Android, Java, Machine Learning",
      text: "Built an Android app to predict student placement chances and salary trends using machine learning concepts, developed as part of the Mumbai University final year project.",
    },
    {
      title: "Tourism Management Website",
      category: "Web Development",
      tools: "HTML, CSS, JavaScript, MySQL",
      text: "Developed a full-stack tourism management portal with front-end design, back-end logic, and MySQL database integration for managing tourist listings and bookings.",
    },
    {
      title: "Fire Detection System with Water Sprinkler",
      category: "Embedded Systems",
      tools: "Sensors, Hardware, Automation",
      text: "Built a fire safety system using sensor-based fire detection with automatic sprinkler response, integrating hardware components for real-time monitoring and rapid reaction.",
      github: "https://github.com/hrushi3069/Fire-Alarm-System-with-Siren-and-Water-Sprinkler"
    },
  ]

 const skillsWithIcons = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "R", icon: "https://cdn.simpleicons.org/r" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql" },

  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk" },

  { name: "Android", icon: "https://cdn.simpleicons.org/android" },
  { name: "Power BI", icon: "https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png" },
  { name: "SAP", icon: "https://cdn.simpleicons.org/sap" },
  { name: "AutoCAD", icon: "https://cdn.simpleicons.org/autodesk" },

  { name: "SAS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/SAS_logo_horiz.svg/960px-SAS_logo_horiz.svg.png" },
 
  { name: "Excel", icon: "data:image/jpeg;base64,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" },
  { name: "XGBoost", icon: null },
  { name: "SHAP", icon: null },
  { name: "SMOTE", icon: null },
  { name: "PCA", icon: null },
  { name: "MANOVA", icon: null },
  { name: "ROC / AUC", icon: null },
  { name: "Kaplan-Meier", icon: null },
  { name: "Cox Regression", icon: null },
  { name: "GIS", icon: null },
  { name: "CRISP-DM", icon: null },
  { name: "Google Earth Pro", icon: "https://cdn.arcgis.com/sharing/rest/content/items/903c4e3e13ae4141aeba2615e9b2ce89/resources/P3_F9W9H3oLfotm5fuJh_.png?w=400"},
  { name: "Bayesian Analysis", icon: null },
]

  const stats = [
    ["14+", "Projects"],
    ["28+", "Technical Skills"],
    ["2026", "MSc Completion"],
    ["60 WPM", "Typing Speed"],
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            Hrushikesh<span className="text-blue-400">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#education" className="hover:text-blue-400">Education</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
         
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Hrushikesh Dunde
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Data Analyst
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hey, I am Hrushikesh, an MSc Data Analytics student at the
            University of Brighton. I work with Python, R, SAS, SQL, Power BI,
            machine learning, statistical modelling, and dashboard reporting.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-600">
              View My Projects
            </a>
            <a href="/RESUME.pdf" className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
              Download CV
            </a>
            <a href="mailto:hrushikeshdunde3069@gmail.com" className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <p className="text-sm text-slate-400">portfolio/profile.ts</p>
              <div className="mt-5 space-y-3 font-mono text-sm leading-7">
                <p><span className="text-purple-400">const</span>{" "}<span className="text-blue-300">name</span>{" "}<span className="text-slate-500">=</span>{" "}<span className="text-green-300">"Hrushikesh Dunde"</span></p>
                <p><span className="text-purple-400">const</span>{" "}<span className="text-blue-300">role</span>{" "}<span className="text-slate-500">=</span>{" "}<span className="text-green-300">"Data Analyst"</span></p>
                <p><span className="text-purple-400">const</span>{" "}<span className="text-blue-300">focus</span>{" "}<span className="text-slate-500">=</span>{" "}<span className="text-green-300">"Data, BI, ML, Statistics"</span></p>
                <p><span className="text-purple-400">const</span>{" "}<span className="text-blue-300">location</span>{" "}<span className="text-slate-500">=</span>{" "}<span className="text-green-300">"Brighton, UK"</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
              <h2 className="text-3xl font-black text-blue-300">{number}</h2>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">About Me</p>
            <h2 className="mt-4 text-4xl font-black">Data analyst with IT engineering background</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>I have practical experience in data cleaning, exploratory data analysis, statistical modelling, machine learning, dashboard thinking, SQL database design, and technical documentation.</p>
            <p>My career target is to work as a Data Analyst, Junior Data Analyst, BI Analyst, Reporting Analyst, Graduate Data Analyst, or Analytics Support professional in the UK.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Projects</p>
          <h2 className="mt-4 text-4xl font-black">Selected work</h2>
          <p className="mt-4 text-slate-400">A mix of machine learning, statistics, database design, business analytics, medical statistics, GIS, and full-stack development work.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.1]">
              <div className="mb-5 inline-flex rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-300">{project.title}</h3>
              <p className="mt-2 text-sm text-cyan-300">{project.tools}</p>
          

{project.status && (
  <p className="mt-2 text-sm font-semibold text-yellow-300">
    {project.status}
  </p>
)}

<p className="mt-4 leading-7 text-slate-400">
  {project.text}
</p>

{project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 inline-block rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
  >
    GitHub
  </a>
)}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Skills</p>
          <h2 className="mt-4 text-4xl font-black">Technical toolkit</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {skillsWithIcons.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400">
              {skill.icon ? (
                <img
  src={skill.icon}
  alt={skill.name}
  className="h-6 w-6 object-contain"
/>
              ) : (
                <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-400/20 text-[10px] font-bold text-blue-300">
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="text-sm font-medium text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Education</p>
          <h2 className="mt-4 text-4xl font-black">Academic background</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <p className="text-sm text-blue-300">Expected 2026</p>
            <h3 className="mt-3 text-2xl font-bold">MSc Data Analytics</h3>
            <p className="mt-2 text-slate-400">University of Brighton, United Kingdom</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <p className="text-sm text-blue-300">2023</p>
            <h3 className="mt-3 text-2xl font-bold">Bachelor of Engineering in IT</h3>
            <p className="mt-2 text-slate-400">Mumbai University, India</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Certification</p>
          <h2 className="mt-4 text-3xl font-black">SAP Certified Development Specialist</h2>
          <p className="mt-3 text-slate-300">ABAP for SAP HANA 2.0</p>
          <p className="mt-1 text-slate-400">Certificate No. 0025823234</p>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Contact</p>
          <h2 className="mt-4 text-4xl font-black">Let us connect</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I am open to Data Analyst, Junior Data Analyst, BI Analyst, Reporting Analyst, Graduate Data Analyst, and Analytics Support roles in the UK.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:hrushikeshdunde3069@gmail.com" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/hrushikesh-dunde-sap/" className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400">
              LinkedIn
            </a>
          </div>
          <div className="mt-8 space-y-2 text-sm text-slate-400">
            <p>Brighton, United Kingdom</p>
            <p>+44 7404304513</p>
            <p>hrushikeshdunde3069@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-slate-500">
     © 2026 Hrushikesh Dunde. Designed and developed with Next.js, React and Tailwind CSS.
      </footer>
    </main>
  )
}