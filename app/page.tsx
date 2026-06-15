"use client"

export default function Home() {

const academicProjects = [
{
title:"Explainable Machine Learning for Potentially Hazardous Asteroids",
year:"2026",
module:"MSc Data Analytics Project",
text:"Built machine learning classification models using NASA JPL orbital datasets. Performed preprocessing, exploratory analysis, feature selection, SMOTE, class weighting, Random Forest, XGBoost, Logistic Regression comparison, and SHAP explainable AI analysis."
},

{
title:"King County House Price Prediction",
year:"2026",
module:"Data Mining and Knowledge Discovery",
text:"Developed a Python regression system to predict house prices. Trained Linear Regression, Decision Tree, Random Forest, Neural Network, and Stacking Ensemble models. Evaluated using MAE, RMSE, R² and 5-fold cross validation."
},

{
title:"Statistical Modelling and Classification Report",
year:"2026",
module:"Multivariate Analysis and Statistical Modelling",
text:"Created statistical models in RStudio using logistic regression, LDA, classification trees, PCA, factor analysis, ROC, AUC and cross-validation."
},

{
title:"Housing Sale Price Analysis",
year:"2026",
module:"Programming for Analytics with SAS",
text:"Analysed housing datasets using SAS. Applied data cleaning, descriptive statistics, correlation analysis, PROC GLM regression and robustness checks."
},

{
title:"Survival Analysis of Cholangitis Dataset",
year:"2026",
module:"Medical Statistics",
text:"Performed survival analysis in R using Kaplan-Meier curves, Cox regression, hazard ratios, AIC selection, forest plots and assumption testing."
},

{
title:"PPP Worldwide Awaydays Database Design",
year:"2025",
module:"Data Management",
text:"Designed relational database structures covering customers, bookings, suppliers, payments, BI questions, GDPR and database security."
},

{
title:"BOB Online Fashion Retailer Case Study",
year:"2025",
module:"Business Analytics Strategy",
text:"Applied CRISP-DM, customer segmentation and predictive analytics concepts for premium product up-selling analysis."
}
]


const projectExperience = [
{
title:"Land Acquisition Cost Prediction",
subtitle:"Technical Support Project Experience",
text:"Created and managed GIS-based datasets for land acquisition records, engineering drawings, project documentation and technical coordination."
},

{
title:"Placement and Salary Prediction Android App",
subtitle:"BE Project | Mumbai University",
text:"Created an Android application using machine learning concepts to predict student placement chances and salary trends."
},

{
title:"Tourism Management Website",
subtitle:"BE Project | Mumbai University",
text:"Developed a tourism management portal with frontend, backend and MySQL database support."
}
]


const technicalSkills=[
"Python",
"R",
"SAS",
"SQL",
"Power BI",
"Machine Learning",
"Statistical Modelling",
"Regression Analysis",
"Classification",
"Predictive Analytics",
"Data Cleaning",
"Data Visualisation",
"ROC AUC",
"Cross Validation",
"SHAP",
"MySQL",
"SAP ABAP",
"RStudio",
"SAS Studio"
]


const stats=[
["10+","Analytics Projects"],
["5+","ML Models Built"],
["2026","MSc Completion"],
["10+","Analytics Tools"]
]


return (

<main className="min-h-screen overflow-hidden bg-[#020617] text-white">


<div className="pointer-events-none fixed inset-0">

<div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"/>

<div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"/>

</div>



<nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">


<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


<a href="#" className="text-xl font-bold">
Hrushikesh<span className="text-blue-400">.</span>
</a>


<div className="hidden gap-8 text-sm text-slate-300 md:flex">

<a href="#profile">Profile</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#education">Education</a>
<a href="#contact">Contact</a>

</div>


</div>


</nav>




<section className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">


<div>


<h1 className="text-5xl font-black md:text-7xl">

Hrushikesh Dunde

<span className="block text-blue-400">
Data Analyst
</span>

</h1>



<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">

MSc Data Analytics student with an IT Engineering background and practical experience in Python, R, SAS, SQL, SAP ABAP and Power BI.

Skilled in data cleaning, statistical analysis, machine learning, predictive modelling and dashboard reporting.

Seeking Graduate Data Analyst, BI Analyst or Reporting Analyst opportunities in the UK.

</p>


<div className="mt-9 flex flex-wrap gap-4">


<a href="#projects"
className="rounded-xl bg-blue-500 px-6 py-3 font-semibold">
View Projects
</a>


<a href="/resume.pdf"
download
className="rounded-xl border border-white/20 px-6 py-3">
Download CV
</a>


<a href="mailto:hrushikeshdunde3069@gmail.com"
className="rounded-xl border border-white/20 px-6 py-3">
Contact
</a>


</div>


</div>



<div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">


<p className="font-mono text-sm text-slate-400">
portfolio/profile.ts
</p>


<div className="mt-6 space-y-3 font-mono text-sm">


<p>const name = "Hrushikesh Dunde"</p>

<p>const role = "Data Analyst"</p>

<p>const education = "MSc Data Analytics"</p>

<p>const location = "Brighton, UK"</p>


</div>


</div>


</section>
<section id="profile" className="mx-auto max-w-7xl px-6 py-20">

<h2 className="text-3xl font-bold text-blue-400">
Profile
</h2>


<div className="mt-6 max-w-4xl text-slate-300 leading-8">

<p>
Data Analyst with an IT Engineering background and MSc Data Analytics
student at the University of Brighton.
</p>


<p className="mt-4">
Experienced in Python, R, SAS, SQL, Power BI and SAP ABAP.
Skilled in data cleaning, statistical analysis, regression,
machine learning, predictive modelling and dashboard reporting.
</p>


</div>


</section>





<section className="mx-auto max-w-7xl px-6 py-10">


<div className="grid gap-6 md:grid-cols-4">


{stats.map((item,index)=>(


<div
key={index}
className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
>


<h3 className="text-3xl font-bold text-blue-400">
{item[0]}
</h3>


<p className="mt-2 text-slate-300">
{item[1]}
</p>


</div>


))}


</div>


</section>





<section id="projects" className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-3xl font-bold text-blue-400">
Academic Projects
</h2>



<div className="mt-10 grid gap-6 md:grid-cols-2">


{academicProjects.map((project,index)=>(


<div
key={index}
className="rounded-2xl border border-white/10 bg-white/5 p-6"
>


<h3 className="text-xl font-bold">
{project.title}
</h3>


<p className="mt-2 text-sm text-blue-400">
{project.module} | {project.year}
</p>


<p className="mt-4 text-slate-300 leading-7">
{project.text}
</p>


</div>


))}


</div>


</section>






<section className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-3xl font-bold text-blue-400">
Project Experience
</h2>



<div className="mt-10 grid gap-6 md:grid-cols-3">


{projectExperience.map((project,index)=>(


<div
key={index}
className="rounded-2xl border border-white/10 bg-white/5 p-6"
>


<h3 className="text-xl font-bold">
{project.title}
</h3>


<p className="mt-2 text-blue-400 text-sm">
{project.subtitle}
</p>


<p className="mt-4 text-slate-300">
{project.text}
</p>


</div>


))}


</div>


</section>






<section id="skills" className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-3xl font-bold text-blue-400">
Technical Skills
</h2>



<div className="mt-8 flex flex-wrap gap-3">


{technicalSkills.map((skill,index)=>(


<span
key={index}
className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
>


{skill}


</span>


))}


</div>


</section>






<section id="education" className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-3xl font-bold text-blue-400">
Education
</h2>



<div className="mt-8 grid gap-6 md:grid-cols-2">


<div className="rounded-2xl border border-white/10 bg-white/5 p-6">


<h3 className="text-xl font-bold">
MSc Data Analytics
</h3>


<p className="mt-2 text-blue-400">
2026
</p>


<p className="mt-3 text-slate-300">
University of Brighton, United Kingdom
</p>


</div>




<div className="rounded-2xl border border-white/10 bg-white/5 p-6">


<h3 className="text-xl font-bold">
Bachelor of Engineering
</h3>


<p className="mt-2 text-blue-400">
Information Technology | 2023
</p>


<p className="mt-3 text-slate-300">
Mumbai University, India
</p>


</div>



</div>



</section>






<section className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-3xl font-bold text-blue-400">
Certification
</h2>



<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">


<h3 className="text-xl font-bold">
SAP Certified Development Specialist
</h3>


<p className="mt-2 text-slate-300">
ABAP for SAP HANA 2.0
</p>


<p className="text-slate-400">
Certificate No. 0025823234
</p>


</div>


</section>
<section id="contact" className="mx-auto max-w-7xl px-6 py-20">

  <h2 className="text-3xl font-bold text-blue-400">
    Contact
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-bold">Get in touch</h3>

      <p className="mt-3 text-slate-300 leading-7">
        You can contact me for Data Analyst, BI Analyst or Reporting Analyst roles.
        I am open to graduate opportunities in the UK.
      </p>

      <div className="mt-6 space-y-3 text-slate-300">

        <p>
          Email:{" "}
          <a
            href="mailto:hrushikeshdunde3069@gmail.com"
            className="text-blue-400"
          >
            hrushikeshdunde3069@gmail.com
          </a>
        </p>

        <p>
          Location: Brighton, United Kingdom
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="#"
            className="text-blue-400"
          >
            linkedin.com/in/hrushikesh-dunde
          </a>
        </p>

      </div>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-bold">Availability</h3>

      <p className="mt-3 text-slate-300 leading-7">
        Available for full-time graduate roles starting immediately after MSc completion.
        Open to relocation within the UK.
      </p>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-slate-300">
        <p>status: "seeking_opportunity"</p>
        <p>type: "Graduate Data Analyst"</p>
        <p>mode: "Full-time"</p>
      </div>

    </div>

  </div>

</section>

<footer className="border-t border-white/10 bg-slate-950/60 py-10">

  <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">

    <p>
      © {new Date().getFullYear()} Hrushikesh Dunde. All rights reserved.
    </p>

    <p className="mt-2">
      Built with Next.js and Tailwind CSS
    </p>

  </div>

</footer>

</main>
)
}