export default function Home() {
  const academicProjects = [
    {
      title: "BOB Online Fashion Retailer Case Study",
      year: "2025",
      module: "Business Analytics Strategy and Practice",
      text: "Proposed predictive analytics for premium product up-selling. Used CRISP-DM, customer segmentation, and revenue-growth analysis.",
    },
    {
      title: "King County Housing Dataset Analysis",
      year: "2025",
      module: "SAP Data Mining and Knowledge Discovery",
      text: "Analysed house prices using Python, statistics, visualisation, correlation, preprocessing, histograms, boxplots, scatter plots, and heatmaps.",
    },
    {
      title: "King County House Price Prediction",
      year: "2026",
      module: "Data Mining and Knowledge Discovery",
      text: "Built a Python machine learning regression system to predict house prices. Cleaned and engineered data, trained Linear Regression, Decision Tree, Random Forest, Neural Network, and Stacking Ensemble models, and evaluated them using MAE, RMSE, R², and 5-fold cross-validation.",
    },
    {
      title: "Google Play Store App Ratings Analysis",
      year: "2025",
      module: "Introduction to Statistical Data Analysis with R",
      text: "Cleaned app data, studied rating factors, compared free and paid apps, and built regression and random forest models.",
    },
    {
      title: "Statistical Set Exercise Assignment",
      year: "2026",
      module: "Introduction to Statistical Data Analysis with R",
      text: "Applied hypothesis testing, confidence intervals, normal and hypergeometric distributions, expected value, variance, probability modelling, statistical power, reproducibility analysis, and clear interpretation of statistical results.",
    },
    {
      title: "Multivariate Statistical Modelling Report",
      year: "2025",
      module: "Multivariate Analysis and Statistical Modelling",
      text: "Analysed datasets using ANOVA, multiple regression, logistic regression, diagnostics, ROC, and AUC.",
    },
    {
      title: "Statistical Modelling and Classification Report",
      year: "2026",
      module: "Multivariate Analysis and Statistical Modelling",
      text: "Built and compared statistical models in RStudio using logistic regression, LDA, classification trees, PCA, factor analysis, MANOVA, ROC, AUC, and cross-validation.",
    },
    {
      title: "Housing Sale Price Analysis",
      year: "2025",
      module: "Programming for Analytics with SAS",
      text: "Merged, cleaned, visualised, and analysed housing data using SAS. Used descriptive statistics, correlation, and regression to identify the key factors affecting house sale price.",
    },
    {
      title: "Housing Sale Price Analysis",
      year: "2026",
      module: "Programming for Analytics with SAS",
      text: "Analysed housing sale prices in SAS by importing, merging, cleaning, and visualising datasets. Used descriptive statistics, correlation, PROC GLM regression, and robustness checks to identify key price factors such as living area, garage area, bathrooms, garage type, and house age.",
    },
    {
      title: "PPP / Worldwide Awaydays Database Design",
      year: "2025",
      module: "Data Management",
      text: "Designed a database for guests, parties, bookings, suppliers, and payments. Covered BI questions, star schema, GDPR, and database security.",
    },
    {
      title: "Survival Analysis of the Cholangitis Dataset",
      year: "2026",
      module: "Medical Statistics",
      text: "Performed survival analysis in R using Kaplan-Meier curves, log-rank tests, Cox proportional hazards regression, backward AIC model selection, hazard ratio interpretation, forest plots, concordance, likelihood ratio tests, and proportional hazards assumption checks.",
    },
    {
      title: "Medical Statistics Case Study",
      year: "2026",
      module: "Medical Statistics",
      text: "Analysed medical and clinical datasets using two-proportion tests, chi-square tests, Fisher’s exact test, Poisson regression with offset, negative binomial regression, risk ratios, odds ratios, Bayesian odds ratio analysis, crossover trial analysis, sample size calculation, and study design evaluation.",
    },
  ]

  const projectExperience = [
    {
      title: "Land Acquisition Cost Prediction",
      subtitle: "IT and Technical Support Project Experience | HS2 High Speed Two",
      text: "Created and managed a 1000m GIS-based dataset for land acquisition records, engineering drawings, project documents, and technical coordination.",
    },
    {
      title: "Placement and Salary Prediction Android App",
      subtitle: "BE Project | Mumbai University",
      text: "Created an Android app to predict student placement chances and salary trends using machine learning concepts.",
    },
    {
      title: "Tourism Management Website",
      subtitle: "BE Project | Mumbai University",
      text: "Developed a tourism management portal with front-end, back-end, and MySQL database support.",
    },
    {
      title: "Fire Detection System with Water Sprinkler",
      subtitle: "BE Project | Mumbai University",
      text: "Built a fire safety system using sensor-based fire detection and automatic sprinkler response.",
    },
  ]

  const technicalSkills = [
    "ABAP for HANA 2.0",
    "WebDynpro",
    "Module Pool",
    "Smart Forms",
    "Data Dictionary",
    "Modifications and Enhancements",
    "Java",
    "Advanced Java",
    "Python",
    "R",
    "SAS",
    "Object-Oriented Programming",
    "SQL",
    "MySQL",
    "Data Cleaning",
    "Data Visualisation",
    "Regression Analysis",
    "Machine Learning Basics",
    "Power BI",
    "BI Reporting",
    "Front-end Development",
    "Back-end Development",
    "PyCharm",
    "RStudio",
    "SAS Studio",
    "SAP",
  ]

  const stats = [
    ["16+", "Projects"],
    ["30+", "Technical Skills"],
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
            <a href="#profile" className="hover:text-blue-400">Profile</a>
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
            Expected 2026 | MSc Data Analytics | Brighton, United Kingdom
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Hrushikesh Dunde
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Data Analyst
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MSc Data Analytics student with an IT Engineering background and
            practical experience in Python, R, SAS, SQL, SAP ABAP, and Power BI.
            Skilled in data cleaning, statistical analysis, regression, machine
            learning, dashboard reporting, and technical documentation. Looking
            for a Data Analyst, BI Analyst, or Junior Data Analyst role in the UK.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
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
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">name</span> <span className="text-slate-500">=</span> <span className="text-green-300">"Hrushikesh Dunde"</span></p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">role</span> <span className="text-slate-500">=</span> <span className="text-green-300">"Data Analyst"</span></p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">education</span> <span className="text-slate-500">=</span> <span className="text-green-300">"MSc Data Analytics"</span></p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">location</span> <span className="text-slate-500">=</span> <span className="text-green-300">"Brighton, UK"</span></p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">target</span> <span className="text-slate-500">=</span> <span className="text-green-300">"Data Analyst | BI Analyst"</span></p>
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

      <section id="profile" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Profile</p>
            <h2 className="mt-4 text-4xl font-black">Data analyst with IT engineering background</h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              MSc Data Analytics student with an IT Engineering background and
              practical experience in Python, R, SAS, SQL, SAP ABAP, and Power BI.
            </p>
            <p>
              Skilled in data cleaning, statistical analysis, regression, machine
              learning, dashboard reporting, and technical documentation.
            </p>
            <p>
              Looking for a Data Analyst, BI Analyst, or Junior Data Analyst role
              in the UK.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Academic Projects</p>
          <h2 className="mt-4 text-4xl font-black">Selected academic work</h2>
          <p className="mt-4 text-slate-400">
            Projects covering business analytics, data mining, SAS, R, Python,
            statistical modelling, medical statistics, and database design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {academicProjects.map((project) => (
            <article
              key={`${project.title}-${project.year}-${project.module}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.1]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  {project.module}
                </span>
                <span className="text-sm text-slate-400">{project.year}</span>
              </div>

              <h3 className="text-2xl font-bold group-hover:text-blue-300">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Project Experience</p>
          <h2 className="mt-4 text-4xl font-black">Technical and university projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectExperience.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur transition hover:-translate-y-2 hover:border-blue-400/50"
            >
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-cyan-300">{project.subtitle}</p>
              <p className="mt-4 leading-7 text-slate-400">{project.text}</p>
            </article>
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
            <h3 className="mt-3 text-2xl font-bold">MSc in Data Analytics</h3>
            <p className="mt-2 text-slate-400">Data Analytics</p>
            <p className="mt-2 text-slate-400">University of Brighton, United Kingdom</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <p className="text-sm text-blue-300">2023</p>
            <h3 className="mt-3 text-2xl font-bold">Bachelor of Engineering</h3>
            <p className="mt-2 text-slate-400">Information Technology</p>
            <p className="mt-2 text-slate-400">Mumbai University, India</p>
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Technical Skills</p>
          <h2 className="mt-4 text-4xl font-black">Technical toolkit</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {technicalSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-2xl font-bold text-blue-300">SAP</h3>
            <p className="mt-4 text-slate-300">
              ABAP for HANA 2.0, WebDynpro, Module Pool, Smart Forms,
              Data Dictionary, Modifications and Enhancements.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-2xl font-bold text-blue-300">Programming</h3>
            <p className="mt-4 text-slate-300">
              Java, Advanced Java, Python, R, SAS, and Object-Oriented Programming.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-2xl font-bold text-blue-300">Database</h3>
            <p className="mt-4 text-slate-300">SQL and MySQL.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-2xl font-bold text-blue-300">Analytics</h3>
            <p className="mt-4 text-slate-300">
              Data Cleaning, Data Visualisation, Regression Analysis,
              Machine Learning Basics, Power BI, and BI Reporting.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-2xl font-bold text-blue-300">Web</h3>
            <p className="mt-4 text-slate-300">
              Front-end Development and Back-end Development.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-2xl font-bold text-blue-300">Development Software</h3>
            <p className="mt-4 text-slate-300">
              PyCharm, RStudio, SAS Studio, and SAP.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Design Tools</p>
          <h2 className="mt-4 text-4xl font-black">CAD, design, and GIS tools</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-xl font-bold text-blue-300">CAD</h3>
            <p className="mt-3 text-slate-300">AutoCAD</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-xl font-bold text-blue-300">3D Design</h3>
            <p className="mt-3 text-slate-300">SketchUp Pro, Live Home 3D Pro</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-xl font-bold text-blue-300">Design Software</h3>
            <p className="mt-3 text-slate-300">Adobe InDesign</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7">
            <h3 className="text-xl font-bold text-blue-300">GIS</h3>
            <p className="mt-3 text-slate-300">Google Earth Pro</p>
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

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Core Strengths</p>
          <h2 className="mt-4 text-4xl font-black">What I can support</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-300">Technical Support</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Experienced in supporting IT and civil project documentation,
              GIS-based data records, land acquisition files, and technical coordination.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-300">Data Analysis</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Comfortable with data cleaning, visualisation, descriptive statistics,
              ROC, AUC, cross-validation, regression, correlation, BI reporting,
              and machine learning basics.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-300">Programming</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Skilled in Java, Advanced Java, Python, R, SAS, SQL, MySQL,
              SAP ABAP, and web development.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Other Skills</p>
          <h2 className="mt-4 text-3xl font-black">Work skills and typing</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-blue-300">Typing</p>
              <p className="mt-2 text-slate-300">60 Words Per Minute</p>
            </div>

            <div>
              <p className="text-blue-300">Work Skills</p>
              <p className="mt-2 text-slate-300">
                Problem Solving, Technical Documentation, GIS Data Handling,
                and Project Coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

    ```tsx
      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 backdrop-blur md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black">Contact Me</h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Please contact me directly at{" "}
              <a
                href="mailto:hrushikeshdunde3069@gmail.com"
                className="text-blue-300 hover:text-blue-400"
              >
                hrushikeshdunde3069@gmail.com
              </a>{" "}
              or through this form.
            </p>
          </div>

          <form
            action="mailto:priyankthakur3@gmail.com"
            method="POST"
            encType="text/plain"
            className="mx-auto mt-10 max-w-2xl space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Write your message"
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
```


      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Hrushikesh Dunde. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  )
}

