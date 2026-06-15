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

 const skillsWithIcons = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "R", icon: "https://cdn.simpleicons.org/r" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql" },

  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk" },

  { name: "RStudio", icon: "https://cdn.simpleicons.org/rstudio" },
  { name: "Android", icon: "https://cdn.simpleicons.org/android" },
  { name: "Power BI", icon: "https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png" },
  { name: "SAP", icon: "https://cdn.simpleicons.org/sap" },
  { name: "AutoCAD", icon: "https://cdn.simpleicons.org/autodesk" },

  { name: "SAS", icon: null },
  { name: "SAS Studio", icon: null },
  { name: "Excel", icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4QEhINDxAQDQ0SEBAQEA0NDREODQ0OFx0WGBYRFRMYHCggGBwnJxYfIT0hJSorLi4vGSA/RDMsOSguLzcBCgoKDg0OGxAQGi0lHyUtLS0wLS0xLSstLy0rMi0rKystLS0tLS0tLzItLS0tKy0tLS0tLS0tLy0tLS8tLi0tLf/AABEIANkA6QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQUEBwIDBgj/xABDEAACAQIBBgsGAwYFBQAAAAAAAQIDEQQFEiExUZEGBxMUMkFSYXFysRUiQoGhslSU8CM0NUOC0iUzU2LhFhckwdP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMBEBAAIBAwMCAwcEAwAAAAAAAAECEQMSMQQTQSEyUXGRM1KBobHR4QU0YfAVIsH/2gAMAwEAAhEDEQA/AN4gAAAAAA6MdioUac60+hThKcra7JXsu8Kal4pWbTxDT+WcvYnFScqk5Rg+jQhJqlCOy3xPvf8AwYzMy+a1up1Nac2n0+HhVkOcAAAAAAAAAALLBdBeLDO3LvCoAAAAAAAAAtcjZdrYaSedKdG6z6Um5LN2xvqZMWw7Om63U0bc5r5j9mwvadD/AFI7zXMPpe/p/FlktQAAAAAKPht+5Yjyx+6JW3Dk677CzUBk+aAAAAAAAAAAABZYLoLxYZ25d4VAAAAAAAAAADlyktr3hbdPxbgN32gAAAAAFHw2/ca/lh90StuHJ139vZqAyfNAAAAAAAAAAAAssF0F4sM7cu8KgAAAAAAAAAAA3EbvtgAAAAAKPht+41/LD7olbcOTrv7ezUBk+aAAAAAAAAAAABZYLoLxYZ25d4VAAAAAAAAAAABuI3fbAAAAAAUfDb9xr+WH3RK24cnXf29moDJ80AAAAAAAAAAACywXQXiwzty7wqAAAAAAAAAAADcRu+2AAAAAAouHLtgcQ/8AbD7olbcOXrfsLNOcs9hk+c2nLPYDacs9gNpyz2A2nLPYDacs9gNpyz2A2nLPYDamNXboCJq7AqAWWC6C8WGduXeFQAAAAAAAAAAAWHDXhvXdWeFwk3RpU5OE6sP82rNaJWl8MU9GjS7a7FrW+D3+q6y26aUnER5eReWsb+LxX5qt/cVzLh72p96frJ7axv4vFfmq39wzJ3tT70/WUe2sb+LxX5qt/cMyd7U+9P1k9tY38XivzVb+4Zk72p96frKPbWN/F4r81W/uGZO9qfen6y4Vsq4qacJ4nEVIPXCeIqTjLxTdmMyidS8xibT9ZYmc9r3kKGc9r3gRnPa94DPe17wGc9r3hOEZ72veAznte8DorzlFZ8ZSVtabbVttmTEtKYn0mGRhMoQmtLSktas7eJMq30prLOp4unZe8tzIYTScuXOqfaW5kI2yssDiaeYveWt9TJZWrOWRzmn2vowjbJzmn2vowbZOc0+19GDbJzmn2vowbZOc0+19GDbJzmn2vowbZOc0+19GDbJzmn2vowbZOc0+19GDbJzmn2vowbZOc0+19GDbLzMpNtt6W223tZDscQgAgABAAAEoAAQAAggAOvEdGXll6EwtX3Qq8n634FpdOtws6eoo5p5cghaYDoLxfqSwvyyCVQAAAAAAAAAAAVZDdAAABAAJQAAgABAAgAIA4V+jLyy9CVq+6FVk/W/AtLp1uFpT1FHNPLkELTAdBeL9SWF+WQSqAAAAAAAAAAACqIbgEAAPb5E4v44uhTxNPGpRmtMXhW3TmtEoP9prT0F4pmOXoaXQxqUi0X/L+Wd/2ql+Nj+Uf/0J7f8Alp/xs/f/AC/l4DKGDnQq1KFRWqU5yhJdV11ruevwZnPo869Jpaaz4Y4VQ2BsDBcV9adOFSpiVRqShGUqTw7m6benNcs9Xa8C/bl6Vf6daYiZtj8P5deVeLmOGo1MTVx0VTpxcn/4ju3qUV+01t2XiyJpjyjU6CKVm034/wAfy8EUecAAOuv0ZeWXoFq+6FXk/W/AvLp1uFpT1FHNPLkELTAdBeL9SWF+WQSqAAAAAAAAAAACpIbgEBIB7Piy4Qc3r80qO1DESSjfVTxGqL/q6Pjml6TiXd0Ovsvsnif1bfNXtNZ8bWRLOGUILQ7Uq9l1/wAub+2/lM7x5eX/AFDR41I+U/8AjW5k8t67i2yFzrE8tNXoYdxm76p1vgh8rZ3yW0vSMy7ei0d9908R+rcxs9tqTjR4RctV5jSlejRleq09E8RqzfCOrxb2GV7ZnDx+v191u3HEc/P+HhTN56AFwl1137svLL0JhNfdCsyfrfgWl063C0p6ijmnlyCFpgOgvF+pLC/LIJVAAAAAAAAAAABUkOhAACAFwN38A+EHPcMnN3xNK1OsuuT+Gp/UlvUthtWcw97pNfu09eY5/ddZTwNPEUqmHqK9OpBwe1X1SXetfyJmMui9IvWaz5fP+NyfVpVpYSUW68anJZsVpnJu0c1d9014owx4fOW07Vvs88N5cFMixwWGp4dWdTp1ZL460uk/BaEu6KN6xiHv9PpRpUiv+5YvDjhAsDhnKLXOKl6dCOyXXUtsitPjZdZFrYhTqtftUzHPhoxtvS223pbbu29rZg8BFwIuEoA4VujLyy9CVq8wrcn634FpdGtwtKeoo5p5cghaYDoLxfqSwvyyCVQAAAAAAAAAAAVBDoQAAgAQLrgjl14HEwr6eRl7leK03pPXK21a/k11lqziW/Ta3avnx5b4pzUkpRalFpOMk7qSeppm76GJyo8VwapVMdSyk7Xp0pRcLdKqrKnP5Jy3R2FdvrlhbQrOrGp8F5UqRinOTUYxTlKUnZRitLbZZvM4aG4YZeljsTKtpVGPuUIvRakvia2y17l1GFpzL5/qdbu3z48KO5VggABFwl11n7svK/QlavMK/J+t+BaW+twtKeoo5p5cghaYDoLxfqSwvyyCVQAAAAAAAAAAAU5DoQAIACAAG6OLCpiHgY8sv2anJYeTfvSod/cndLuS6rG1OHudDNu1G78Pk9aXdjyPGjPELAy5H/Lc4rENdNUe7uvZPuv1XKXzhx9du7U7fx+TStzF4gBFwlFwIA4V37svLL0Jhasf9oVeArJN6OovMOzV0pmFlDEq2plcOedGfi5c5WxkYR2Z+KwweOSglmvW+tDhz6mlMWd/tCPZe9DKnbPaEey96GTtntCPZe9DJ2z2hHsvehk7Z7Qj2XvQyds9oR7L3oZO2e0I9l70MnbPaEey96GTtntCPZe9DJ2z2hHsvehk7Z7Qj2XvQydthENAABAAC64I5BljsRGjpVGPv15r4aS6k9r1L5vqLVjMt+m0Z1b48eW+KNKMIxpwShCMVGMYq0YxWhJLYbvoIiIjEKanwmoSx0smfzI0lJTvodXS5UvFRtLfsK7vXDGNevd7fn/fRc16MZxlTnFThOLjKMleMotWaa2Fm0xExiWguFuQ5YHEzw7u6T9+jN/HSerTtWp+Hec8xiXgdRozpX2+PCluQxQACUXA66/Rl5ZehMcrU90fNT4LW/A0l6Opwz4aiGMuRCGXh+ivmVnly6vudpDMAAAAAAAAAAAHMIQAAAIRcmoxTlJtRjGKvKUnoSS62ExGW9eBXB5YDDqm7PETtOvNabz6oJ7I6t76zetcQ9/ptCNKmPPll8J8swwWGqYmVnJLNpwf8yq9EY/+33Jk2nEL62rGnSbS0LRyhWhWWLU3zhVeW5R65Vb5zb23etd7MMvAi9otv88voDIWVKeLoU8VT6NSN3HW4TWiUH3ppr5G8TmMvodPUjUrFo8qjh9wd59hmoK+JpXqUHovJ/FSv/utvUdhFq5hj1Wj3aenMcNFPc9j0NMweGi4EXAgJcK792Xll6EwtT3QqMFrfgaS9DU4Z8NRDGXIhDLw/RXzKzy5dX3O0hmAAAAAAAAAAADkEAEARcJbD4quDnKS9o1Y/s4Nxw6a0SqapVPBal337JpSvl6XQaGZ7k/g2oavVaZ40Mv84xPNqbvQwzcXZ6J4j438uj4qW0xvOZeN12tvvtjiP1eLuUcT33FNl7kq0sBUf7OvedK+qNdLTH+pLfFbTSk+uHodBrYtsnz+rbhq9Zp3jU4Oc3rc+pRtQryfKJaqeI1t+EtL8VLajG9cTl5PW6O22+OJ/V4Qo4UXAi4HXX6MvLL0JhanuhVYLW/A0l6Gpwz4aiGMuRCGXh+ivmVnly6vudpDMAAAAAAAAAAAEhBcJRcCaWbnRz3JU85Z7gk5qF9OanovbaExjPq2lg+MvJ1GnCjTw2KhThFQhFRo6IrQv5hrGpEeHrV67SrGIify/d15T40qEqVSOHo14Yhwcac6ipKEJPRnO0nq16uoTqIv/UK7Z2xOWrW9ul7Xpbe0yeUi4SmlVlCUakG4TjKM4SWuM07qS8GgmJmJzDa+G418LmR5XD4jlc2OfyapOnn205t5p2vtNe5/h6sdfTHrEsbLHGLkzFUamFq4fFunUjmtqNG8XrU17+tOz+RE3iYxhW/WaV6zWYn1+TVj/Wi30M3mIuACXXWfuy8r9CYWp7oVeC1vwNJd+pwz4aiGMuRCGXh+ivmVnly6vudpDMAAAAAAAAAAAC4EARcJRcCAASi4EXAgJLgRcCAIuEouBwrdGXlfoTC1PdCswWt+BpLv1OGfDUQxlyIQy8P0V8ys8uXV9ztIZgAAAAAAAAAAAhhKLgRcCAlFwIuACUXAi4EARcJRcCAAS66z92XlfoTC1PdCuwWt+BpLu1OGfDUQxlyIQy8P0V8ys8uXV9ztIZgAAAAAAAAAAA9bw74IV8NWqYilTlVwlSUqilTi5cg5NtwmlqS6nqtbTcvauJd3VdNalptWMxLxuetq3lMw4kZ62reMwlGetq3kZgRnrat4zAjPW1bxmEmetq3k5AAEoAgCAkA4sDCx2KVsyLvJ6HbUl1l618unR0pzul04LW/AtLe/DPhqIYy5EIdkKzSsrDCltOLTmU84l3biMK9mpziXduGDs1OcS7twwdmpziXduGDs1OcS7twwdmpziXduGDs1OcS7twwdmpziXduGDs1OcS7twwdmpziXduGDs1OcS7twwdmr6iN3vIzVsW4BmrYtwDNWxbgGati3AM1bFuA8nxqQ/wAKxlkr8nD74ESpqelZfNXIS/TK5cm6DkJfpjJug5CX6YyboOQl+mMm6DkJfpjJug5CX6YyboOQl+mMp3Q5woNDKJsy8NG1yJZXZkUQylJCAAAAAAAAAAAAAAH1ObPZAAAAAA8txoL/AAvF+SH3wInhnreyXzpmoo4MmagZM1AyZqBkzUDJmoGTNQMmYDLIo0raev0IZ2tl2kKgAAAAAAAAAAAAAAH1ObPZAAAAAA8zxlfw3FeSH3wItwy1/s5fPtjJ5ZYBYBYBYBYBYCQAAAAAAAAAAAAAAAAAB9Tmz2QAAAAAPM8ZX8NxXkh98CLcMtf7OXz8ZPLAAAAAAAAAAAAAAAAAAAAAAAAAB9Tmz2QAAAAAPM8ZX8NxXkh98CLcMtf7OXz8ZPLAAAAAAAAAAAAAAAAAAAAAAAABYD6nNnsgAAAAAYOW8nRxWHrYWbzY1acoZyV3BtaJW7nZ/IiVb13VmJfOWWMlV8HVlh8TB06ibtrzKke3CXxRe30egyeVek0nEsMKgAAAAAAAAAAAAAAAAAAAAAFpwbyBXyhWVChF5t1yta16dCHXKT27FrZMRlfT051JxDeP/ROTv9L6mmIel2qvREtAAAAAAAHkeM390/qK24Za3taXM3CkAAAAAAAAAAAAAAAAAAAAADe3AX9zpfM1jh6Gn7V+Su//2Q==" },
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
  { name: "Google Earth Pro", icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVEhUXGBIVFRgVFRUbFxUVFRUWFhUVFRkYHSggGBolGxgWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFy0dHR0tLSstKy0tLS0rLS0tKy0tLSstLS0tLS0tKysrLS0tLS0tLS0rLS0tListLS0tNy0rLf/AABEIAOgA2QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABGEAABAgMEBwQHBAcIAwEAAAABAAIDESEEEjFBBSIyUWFxgQaRocEHExRCUtHwYpKx4RYzQ1Nyk7MXIzRzgqKy8SSD0iX/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQEBAQEAAwEBAAAAAAAAAAERAhIxIUFRYRP/2gAMAwEAAhEDEQA/APanOv0HOqA6Qu54cKocANnHhWiABKZ2vPKiBGamOe5F2t7LHjVDK7XSdETM5e75c0A8X6jxSude1Rjx4JHmWz4VSuAFW496Aa66Lpx+aRguVPglaARN2P1JIwz2vGiAu1v5Y8UPF/DLeiZnL3fLmh9NnrKqBS6YujH5Ia67Q86JHEATG19TomCK01ca8aIHsbcqeVEFszfyx40UdtrB2zTuqmm2tnIHV8s6oJT9fDLfxSl0xdzw4UUZ1raNg85V5LoIzZTB1vPOiDq11yh50SNbdqfBJDIdtY8aJWkmjsO5AFt43hh8kPN/DLegkgyGH1OqH02esqoFvUuZ4cEjDcxz3JZCU/e8+SRldrpOiADbpvHD5oc29UeKASTI4fUqocSKNw70CudfoOdUB0hczw4VQ8AbOPCtEACUzteeVECM1Mc93BO9oHFNZXb6TpzTvVs4d6Bt25XHJF2ev1lyQ2fvYcd6DOdNnwlmgNvhLzRenqdJ8kP+x1klpL7XjNAk7lMc0Xbutj+aGS9/Hihs/ew4oC7e1sPyQXX+ElzjRZVGH1NUmldONbRhrwSTRcxbW1ounlNRRa3e40unngO8rG2nSUVxmDLoJ+KgRYr37bnO/icT+K3/AM6z6boznN8VreAI/EkfgkIgk1eHHjEHkQsGIfBLcV8f6enoQgMI2Wkd/wCKd6lnwN+635Lz6EXNM2ktO9pIPgrOyafjs2iIg+1j94ec1Lwemt9nZ8LRyEvwTPZGTmJg8HHzmoej9OQotJ3HfC7PkcD+Ks1mzGkeJAfi1/Rw8x8l0Nqfg5tN4qPy6rohQdIFubK7jx5ruNSuM1XxLO11ZSO8UP5psOK+Ht67d+7mMkFnd9/rJBF/hJcYMe9UbPhJdnfY6yQF69q4fki9dpilMpU2vqaGy97HigS7crjki7PX6y5IZP38OO9BnOmz4SzQB1+EvNHs3HwQ/wCx1l4Jsn8e9A4Ov0NM0F0tXp3pXuvUbigOkLpx+eCBHamFZou+/wBe9DNXazRKt7LFAAX6mmSi2q2gCRpLySaQtIAmFl9IxI0Y6sOJd4MdXwVk1LRpLTDnTaw03qpuzUoaPijGFE+475Lm5hbiCOYl+K7TJ8YrmGJHwl0mlREWSWS6vYuaikkkLU5Kg5OYrPRum4kKTXTiM3E6w/hPkfBQZJCFfv0bmyWpkVt5hmPEHcRkV2WDstofCdeYZHPcRuIzC1ui9KNjD4XjFvmN4XLrnG5dTkqRCyri+CRVlDmMj8iu9ltkqZ5g4hImRYU6ijhgfI8EFhdlrfVUobeqaKDYbQZ61JYhTHC9VuCBWuv0NM0XpanTvSvN6jUB0hdzw78ECO1MKz8kntJ3BKzV2s8E71zfoIEe27VuKA2YvHH5YJGtuVNckFs9br3IBmttZLjaI92hwXWIb2FJb1WxH+sdd91sp7ich9eaAgMmb5/0jcN/NSJpEIBKSkQgjRtHQn4w2826p/2qttHZ8fs3y4P+Y+Su0KzqxMjHWqxRIe20gb8W94UVwmt2qy26Ehvq3+7dw2Tzbl0W53/WfLKJVKt1giQjrCmThVp65HgVFWkCEqECEJGuLSHNJBFQRknIVGo0PpYRRddIRBlk7i35KzWCqCCDIioIxBWp0NpURRddSIO5w3jzC59c/uNSrRCELDTlHhTqMR4jcpFltUxIfRzTFxc/1brwwJ1uBOB6/WKC0eLtWoDZi9nj3YJkHVE8cqJ12evlj3IBmttZYJ3qW/RTXa+FJb+KT2Y7wgVs/ew470Gc6bPhLNF6/TDNBfLV6T5oImko11upiaU8FygQ7rQM8Sd5OJTHNnE3gV65efcu6AQhCAQhCAQhCAQhCAcJiRqDiDgeao9I6AB1oOqfhOB/hOXWnJXiFZcSxhIjHNJa4FpGIOKQLaW2xMiiTxyI2hyPksvpHRj4NTrMycPwcMiuk61mzERIkmlVQhSAkEEGRFQRiClKFRq9DaUEZsjR4xG8fEOH4KxWDhxHMcHNMnCoK1+itItjNng4bTdx3jgVz65z8tSpqR7AQQcDRKhYaN0bFMyx5wpXPce5TzOdNnwlmquK2TmnAGh8vNWTIlLvSfNA59NjrLwTbz+PcnbHGfkj2nh4oFcQdnHhSi5R3gNIO1X8qrq5tyo5VULSR1C7OvKiCPYWm6ScXEnpgPw8VIUePaGQWXnuugADmdwGZWbtnap5MoTA0b31PcKDxVnNqWtYhYU6ctJ/akcms/8AlPZp60j9pPm1nkAteKnpt0LKQe1EUbbGO5TafNWVm7SwXUdehniJjvb5gKXmrsXKEyDGa8TY4OG9pBHgnrKhCEIBCEIBDhMSNQaEHAjihCDPaU0FKb4PVmf+nfy/6VECt6q7SmiGxdYar9+Tv4vn+K3Ov6zYyiE6PBdDcWvF0j6mN4TZroyQp1mtDobw9hkR3EZg8EiaUG20fbWxmB7eRGbTuKkLD2C2ugvvNqMHDJw+e4rZ2W0tiND2GYPeDmDuK5dc43LotLJtIGMpjmKhSrBFBYB70us8qrkmaMbK9vaTyoaLKrBlNvpOvNOvs4dyazXxy3cU72ccUDWtuVPKirdKiZBwBLcdwImrJpJ2sO6qou0ziGENww78aoMppi3mPELvdEwwbhv5n6wUNrU8tSgLt8cyBqddSpUDbqQsT0IGw3OYbzSWne0kHwVxYu0cRtIgEQbxR3yPgqlEk/F+jbWHScKLsOr8Jo7uz6KWvPC1Wth0/Fh0f/eN47Q5HPr3rN4/jU6a5Ci2HSMOMNR1c2mjh08wpS5tBCEiAQhCDhbbGyK268ciMWneCsnpHRz4JrVpwcMDwO48Fs0kRgcC1wBBoQcCtTrEs1g5oVvpXQZZN8Kbm5txc3l8Q8fxVMCun34wUhSNHW90B0xVp2m7+I3FR0hCo3FjtbIrbzDMZ7wdxGRRZB/evMxIEE9wmFhRMGbSWneCQfBaPskTIjIuM+sp1XPrnPy1LrVv18Mt/FN9nPBOdTZ6yryTfWP49yw0cXX6YZqj7SGTC3l+M1evl7uPDcqnTzAYZntSPPgkGMeya4qQmvbNdnNyQiSEAlQhAJUIQCCEqEDJSMwZEYEUI5FXNg7QvbqxRfHxDaHPJ3geaqpJC1W5fprcWW0siC8xwcOGXAjEFdVgoT3MN5ji07x57xwV9o/tEDqxhI/EBTqMungud4/jU6X6EjHhwBaQQcCDMFKsNBCEIFVTpTQjIk3Mkx/+13MDA8QrVCsuDC2mzvhuuvaWnLceIOBXKa3kWE1wuuAcNxEwqmP2chmrHOZw2h0nI+K3O5+2PLMrSdlTQiWJp1AE0+y9nobTN7jE4SujqAST3qzsQbfdKU6AcJAAAKddasiyGpxn5JfaeCRn2+k/FOmzgsNGltyorkoukIN5hd9UUpgLauwXOOy9UYfLFB564SJG6Y7lY2PQ0SIL1GA4XpzPGQ81Kh2AOtJJGqBfIyJwA81fzXS9Mzlm4nZt+T2f7vko8Ts/HGAa7k7/AOpLWIWfVXzGHj2CKzahuA3ymO8UUcFegAqPabFCibbGk75SPeKq+08sQlWgtXZwYwny4PqPvDDuVNa7FEhbbSBvxaeootyys44JUgKVAIQhAJpanIVDrJa4kIzhulvGLTzHnitDYO0MN9In927f7p65de9ZshMLVLJSXHoAM6hCw1jt0WDsOkPhNWnpl0kr2x9pWGkVpYd4q35jxWLxWp0vELnAtDHibHBw+yQV0WGghCa9wAJJAAxJoBzKBXOABJoBU8him6JhTb6zMzcs/bdLCPEbBh7EwXu+ICsh9n8eWOpssKQBGHyxVswd26+NJeaX2cb0j9bZyxyTfUu+ioHNN6jsMUjjI3Rh88U5zr9BTNAdIXc8O9BVWxghxGuGBo7rge9d10tcCTTOs1FssSYkcRQ8sig7IQhAIXO1R2w2OiOo1jXPdyaCT4BeTWz0j2xziYfq4TfdbcDiBlMnE9yD11BXjf8AaFb/AI2fymo/tCt/xs/lNQeoWzQUJ9W/3buGz93LoqG26NiwqubNvxNqOu7qsb/aFb/jZ/Kal/tCt/xs/ltWp1YljTApVh7T2ptLzObGn7MNoHdgocTtPbR7zSODGrfqM+XoiF5t+mFr+Nv3Go/S+1/E37jU2GPSELzf9L7X8TfuNR+l9r+Jv3Gp6MejkJpavOv0vtfxN+41KzthagZksdwLBXuqr6MeggEGYJB3gyPeFMhaXtDcIhP8QDvEiarNFW4R4LIoErwqNxBIcONQVLktfUTDp+0fE0f6AoNptMSL+se53AmnQCiUtToMEucGjE0/NT8QXHZOw3nF5FMB0x+uC2QMtUYYd6gaKsoDA0CUgMVYXpC5nh3rjbt1uB+rs54pvrnfQTm6mNZ7uCd7QNxUUj5e7jw3IEpV2vGeSS7crjki7PX6y5IBont9JqqtkNzH3xs57i1Wu3wl5pkQXhc6T5IIjHAgEVBwSqI4epddOwc/hPyUtBXdpP8AB2n/ACI/9Ny8CXvvaT/B2n/Ij/03LwJALaejXs7Z7a+OLQ1zgxsItuuLauLwZyxwCxa9K9Cn6y1fwwP+URBMi9n9ANcWujsDmktcDaTMEGRBriCuVs9HljtMMxNHWgFwwHrGxIZPwkjWYeNeS8705/ibR/nR/wCq5X/outERukIbWTuvERsUZFgY5wJ5ODZHjLNBmLVZ3w3uhxGlj2ktc04gjELkt76Q9FGPpZsGDdESLDhk3jIXwH7RAPuMb4KpZ2DtptBs4awua1rnvvH1bQ+d2biJzoaAEoMpEgtdiOoxUd9jORnzWu7VdkYtgax0WJCffJADC69qiZMnNFBMV4hStA+j62WlgiSbAYatMUm84ZEMAJlzkrowL4ThiCuc16dpL0YWyG0uhuhx5e60lrzyDhI96xEWFIlrmyIJBDhUEUIINQU1MVKFYmzt+EeKT2Zm7xPzV0xuexf+Dh84v9RyvGgkyAJO4CZU70caPhGwQnGG0mcapE/2r9610NoaJNAaNzQB+C17Tyyll0HGfiPVje/H7uPfJWuiNFhr7zZuGF4jHfIZBTYrvWO9W3D3j5Kzs7BDF2U1m9WrJjpdAGpjw3JwlKu14zySXblcckXZ6/WXJZUMrt9J+KdJnDvTdvhLzS+zcfBAjARtYca1QQZzGz4Szohrr9DzogukbuWHGqAfXY6yolmJS97xnnVI/Uwz3oLZC/njwqg4xoYIIf41VS2MYJuv2Mj8PA8FaRXXhM8qLP6QtN6bSgldoz/4dp/yI/8ATcvAl6fpbSz4NntEPbhmDGEji2cNwmOHBeURLQCwuaZ5cpoOVptRnJvU/Jek+gT9bbP4LN/yjLytoXq3oF/W2z+Czf8AKKtX4iytvZTQJixHvtrWRHRIjnj2yEJPc8l4Iyk4kSyXaHp7QuiYbnWZ7bTFcJf3bxEe6XuuiDVhtnjhhgSvItP/AOLtP+faf6r1BTBveyGm3WvTEGNEOvEiPMsgBBeA1vAAAdFsfSd2ri2Z7bNZj6t72iJEiAC9Iksa1pOB1DM4ylJebejQf/qWT+N/9GIrf01OI0kJEj/x4OB+3GUw1O7CwYmkbaz2qI+OyAx0SURxdPWaGtrleIMs7slM9I3bGObQ+zQIjoUOGbriwkOe/wB6bhUNBpIbjOdJVfoW0ndtzoTz+thODJyq9jmvu/dDz/pVX6SLNEs2kIwezViudGhurJ7XmbpHe1xII5bwmKmdmu2lpssVrnxXxoUx6xj3Odq5ll6Za4Y0xzWj9MGiGNdCtbAB6w+riS94ht6G/ndDhPg1eaaNbEtMVkCFDLokQhrQDvxcaUaBUnIAr1L0029kGz2WzDWcX3wM7kKGWTPMvHcdyYPMEKEbefh8fyXJ9tdwHIfNMNe8ejcy0dCJoJx/6z1cxLX6zVhEO3uBEuhz5ry3sXEdEs0JriS0GJQky/WOywC9A0dH9XIDxSjSWSA0Nk3a8eNVLaQKOx41UOzukLwx8KqWxt4TPgoBgI2sONaoIM5jZ8JZ0Qx1+h50QXSNzLDjVAPrsdZU5Jtx/HvTn6mGe/gm+0Hgge91+g51QHSF3PDhVDwBs499EACUztfUqIEZqY57kXa3sseNUMrtdMkAmcvd8uaCNa4d+o5VVFb7PeoFpIgls4d64xrMJTGPeg877R2S7ZbQD+6jf8HLxIwyF9R2zRLIsN7Igo9rmHIycCD4FeOWz0X29ryGNZFb7rr7WzGUw6UjwqgwTYhGIW49GXbCBo98d0ZsR4iNhBvqwwkXC8m9ecPiC5O9G2kf3Lf5sP8AGa5v9GukMoLekWGfNXUxn9J2gRI8aI2YD4sWIAcQHvc4AyzkVGWmd6O9Ij9k3+ZD+aZ+gekRjBb/ADGfNXTEPsjpRlktkC0xA5zIbnFwYAXGcN7aTIGLhmp3pC7QwrfaxaITXsb6qHDlEDQ6bXPJOq4iWsM1z/Qm3/uQP9bPmk/Qu3fuf97Pmgo7NHfDe2JDcWPYQ5rhi1wMwQvVrD6SrDaoIhaUs4JEiXCGIkMke81u1DdynzWG/Qm3/uQf/Yz5pw7CaQOEFv8AMZ80G8Z280NYWuNgs16I4S1YRhzzAfEia12e4HkvL+0Om4tsjutEdwLnSAAo1jRssYMmiZ6knEq3b6PNIn9k0f8AshjzTmejXSJxgt6xIfzU0ZF0TcEy4StsPRrpH9y3+bD+a7QvRlpEkD1cNvExWkDndmfBNVe+j6zTsUPeTF/qvW1sFlLMfBSOznZxlls0OCDecwGZ+J7iXOMsqk0VzAsw97pkoGWOCW6xw+amFt6o8U2GMjs/Uqp7iRRuHegV7r9BzqgOkLueHCqHgDZx76IAEpna88qIEZqY57uCd7QOKayu10yTvVs+igaG3K45Iuz1+suSGz97DjvQZzps+Es0AdfhLzRenqdJ8kP+x1klpL7XjPNAgNymOaLl3Wx/NKyXv48UjZz1sOKBDDva2H5JCL9MJJzpz1cOHih/2OskDLo2Ok031YZxmu1Jfa8ZpGfb6TQcTZgNbw5ppsgfXDJSBOddnw4IdP3cOG9BFNma+kpZpPZWjUlwnz/7Ux0vcx4bkCUq7XjPLyQRBY2synPyThZANfrLmpDPt9J+KBOddnwlkg4+zB9cMktwOpKS6vn7mHDeldL3ceCDmGhurj+aUQ7nGae2Uq7XjwSM+30mgT1fv9ZJZX+EkVn9nwkh/wBjrJAXr2r9UQHXaYpTKVNrx4obL3seKBA25XHJF2ev1lyQyfv4cd6DOdNnwlmgDr8JeaPZuKH/AGOsvBNk/igcHX6GmaC6Wr070IQB1MKz8kXff696VCBAL9TTJAde1fqiEIAuu6v1VBFyorNKhAXff6pAL+NJIQgA6er9UQXXKCuaEIAtuVFckXZ6/Xu/6SoQINfGkvNF6ep07kIQBdcoK5pS27XFCEAG3tb6okBv40khCAve50QTcwrNCEAW3db6qlDb1cEIQIHX6GmaL0tTp3oQgDqYVn5JPaDuQhB//9k=" },
  { name: "Factor Analysis", icon: null },
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
            I am Hrushikesh Dunde, an MSc Data Analytics student at the
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
              <p className="mt-4 leading-7 text-slate-400">{project.text}</p>
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
        © 2026 Hrushikesh Dunde. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  )
}