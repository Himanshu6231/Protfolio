// CV plain text content (exactly as provided)
const cvPlainText = `Himanshu - CV

LinkedIn: https://www.linkedin.com/in/himanshu-647b5a297/
Email: himanshugpta1234@gmail.com
GitHub: https://github.com/Himanshu6231
Mobile: +91 8707231198

SKILLS
Languages: C++, Python, C, Java, HTML and CSS
Frameworks: React, Node.js, Scikit-learn, NumPy, Pandas
Tools/Platforms: GitHub, Google Colab, Jupyter Notebook
Soft Skills: Problem-Solving, Team Player, Empathy, Time Management, Adaptability

PROJECTS

Justice Gap Identification System | Live: https://himanshu6231justice-gap-analyzer-t6usfirmshvrcne2ge2qjn.streamlit.app/ Dec'25
- Implemented FP-Growth association rule mining to analyze legal aid case data and detect outcome disparities.
- Performed preprocessing, categorical encoding, and feature engineering on multi-source datasets.
- Evaluated rules using support, confidence, and lift metrics to identify systemic delays and biases.
- Built visualization dashboard for interpretable policy insights.
Tech: Python, Pandas, NumPy, Data Mining, Explainable AI

SAVI -- Emergency Chatbot (AI Project) | GitHub: https://github.com/Shubh219/Emergency-Chat-Bot-AI Apr'24
- Engineered an AI emergency chatbot to handle urgent queries and guide users during critical situations.
- Architected best UI and rule-based logic to generate quick and accurate responses for emergencies.
- Established a user-friendly interface enabling fast reliable performance in high-stress scenarios.
Tech: Python, NLP, Rule-Based AI, Kotlin (App UI)

Fuel Efficiency Prediction System (MPG Prediction) | GitHub: https://github.com/anubhav0704/Summer-Training-Project Jun'23
- Enhanced an ML-based regression system using real + synthetic vehicle data (200,000 records, 15 features) to accurately predict fuel efficiency (MPG).
- Performed data preprocessing, feature engineering, normalization, and one-hot encoding for optimized model performance.
- Implemented and tuned an XGBoost Regressor using Grid Search CV, achieving high accuracy (R² ≈ 0.87, MAE ≈ 7 MPG).
Tech: Python, Pandas, NumPy, Scikit-learn, XGBoost, Streamlit, Synthetic, Regression Model.

TRAINING
Machine Learning Made Easy: Lovely Professional University | Certificate: https://drive.google.com/file/d/12yyKKIZDZEzbXMl7SWc82i-NINDB9bfp/view?usp=sharing Jun'25-Jul'25
- Completed structured training in Machine Learning and Artificial Intelligence focused on predictive modeling and applied data analysis.
- Built a complete ML pipeline covering data preprocessing, feature engineering, model training, and evaluation using advanced regression techniques.
- Created and deployed an interactive Streamlit web application for real-time MPG prediction.

CERTIFICATES
- Computational Theory: Language Principle Finite Automata Theory -- Infosys | https://drive.google.com/file/d/1bu-b8WYvaEmV22fHBR46A6tI_1jo3Bks/view?usp=sharing Aug'25
- Digital Systems: From Logic Gates to Processors -- Coursera | https://coursera.org/share/15698765811a3db2fad92d3ca1aecbcc Sep'24
- Unraveling Basic Python Towards AI/ML - CSE PATHSHALA | https://drive.google.com/file/d/118PCduk7lPDo8NuWyg6USFYVO1eneMeA/view?usp=sharing Mar'24

EDUCATION
- Lovely Professional University, Phagwara, Punjab
Bachelor of Technology, Computer Science and Engineering; CGPA: 6.76 Aug'23 -- Present
- NAGA JI S.V.M Sr. Sec. School, Ballia, Uttar Pradesh
Intermediate, Percentage: 63 Mar'21 -- May'22
- NAGA JI S.V.M Sr. Sec. School, Ballia, Uttar Pradesh
Matriculation, Percentage: 76 Mar'19 -- May'20
`;

const downloadBtn = document.getElementById('downloadCvBtn');
downloadBtn.addEventListener('click', function() {
  const blob = new Blob([cvPlainText], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Himanshu_CV.txt';   // .txt works universally
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
});