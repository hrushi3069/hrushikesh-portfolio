export default function Home() {
  const projects = [
  {
      title: "Explainable ML for Hazardous Asteroids",
      category: "Machine Learning",
      tools: "Python, XGBoost, SHAP, SMOTE, Random Forest",
      text: "Classified potentially hazardous asteroids using NASA JPL orbital data. Applied SMOTE and class weighting for imbalance, compared Random Forest, XGBoost, and Logistic Regression, and used SHAP explainable AI to identify key risk factors.",
    },
    {
      title: "King County House Price Prediction",
      category: "Machine Learning",
      tools: "Python, Scikit-learn, Pandas",
      text: "Built and compared regression models to predict house prices. Trained Linear Regression, Decision Tree, Random Forest, Neural Network, and Stacking Ensemble models. Evaluated using MAE, RMSE, R², and 5-fold cross-validation.",
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
    },
    {
      title: "Database Design for Worldwide Awaydays",
      category: "Database Design",
      tools: "SQL, MySQL, ERD, Star Schema",
      text: "Designed a relational database for guests, bookings, suppliers, activities, and payments. Covered BI reporting questions, star schema design, GDPR compliance, and database security.",
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
    },
  ]


  const skills = [
    "Python", "R", "SAS", "SQL", "MySQL", "Power BI", "Excel",
    "Machine Learning", "Regression", "Classification", "PCA",
    "Factor Analysis", "MANOVA", "ROC", "AUC", "SAP ABAP",
    "RStudio", "SAS Studio", "AutoCAD", "Google Earth Pro",
    "XGBoost", "SHAP", "SMOTE", "Kaplan-Meier", "Cox Regression",
    "GIS", "Android Development", "Java", "Android Studio",
  ]
  const stats = [
    ["10+", "Projects"],
    ["20+", "Technical Skills"],
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
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Data Analyst | MSc Data Analytics | UK
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Hrushikesh Dunde
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Data Analyst
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Hrushikesh Dunde, an MSc Data Analytics student at the
            University of Brighton. I work with Python, R, SAS, SQL, Power BI,
            machine learning, statistical modelling, and dashboard reporting.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              View My Projects
            </a>

            <a
              href="/RESUME.pdf"
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              Download CV
            </a>

            <a
              href="mailto:hrushikeshdunde3069@gmail.com"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400"
            >
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
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">name</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-green-300">"Hrushikesh Dunde"</span>
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">role</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-green-300">"Data Analyst"</span>
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">focus</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-green-300">
                    "Data, BI, ML, Statistics"
                  </span>
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">location</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-green-300">"Brighton, UK"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
            >
              <h2 className="text-3xl font-black text-blue-300">{number}</h2>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Data analyst with IT engineering background
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I have practical experience in data cleaning, exploratory data
              analysis, statistical modelling, machine learning, dashboard
              thinking, SQL database design, and technical documentation.
            </p>

            <p>
              My career target is to work as a Data Analyst, Junior Data
              Analyst, BI Analyst, Reporting Analyst, Graduate Data Analyst, or
              Analytics Support professional in the UK.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-black">Selected work</h2>
          <p className="mt-4 text-slate-400">
            A mix of machine learning, statistics, database design, business
            analytics, and BI-focused work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.1]"
            >
              <div className="mb-5 inline-flex rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                {project.category}
              </div>

              <h3 className="text-2xl font-bold group-hover:text-blue-300">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-cyan-300">{project.tools}</p>

              <p className="mt-4 leading-7 text-slate-400">{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-black">Technical toolkit</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="education" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>
          <h2 className="mt-4 text-4xl font-black">Academic background</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <p className="text-sm text-blue-300">Expected 2026</p>
            <h3 className="mt-3 text-2xl font-bold">MSc Data Analytics</h3>
            <p className="mt-2 text-slate-400">
              University of Brighton, United Kingdom
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <p className="text-sm text-blue-300">2023</p>
            <h3 className="mt-3 text-2xl font-bold">
              Bachelor of Engineering in IT
            </h3>
            <p className="mt-2 text-slate-400">Mumbai University, India</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Certification
          </p>
          <h2 className="mt-4 text-3xl font-black">
            SAP Certified Development Specialist
          </h2>
          <p className="mt-3 text-slate-300">ABAP for SAP HANA 2.0</p>
          <p className="mt-1 text-slate-400">Certificate No. 0025823234</p>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Let us connect
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I am open to Data Analyst, Junior Data Analyst, BI Analyst,
            Reporting Analyst, Graduate Data Analyst, and Analytics Support
            roles in the UK.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hrushikeshdunde3069@gmail.com"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/hrushikesh-dunde-sap/"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400"
            >
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
        © 2026 Hrushikesh Dunde. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  )
}
