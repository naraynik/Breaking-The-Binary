// =====================================================
// COMPREHENSIVE STEM CAREER DATA
// Education levels: '10th', '12th-PCM', '12th-PCB', 'undergrad'
// =====================================================
const stemCategories = [
    {
        id: 'science',
        label: 'Science',
        icon: 'flask-conical',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        gradientFrom: 'from-emerald-500',
        gradientTo: 'to-teal-600',
        desc: 'Explore the natural world through Biology, Chemistry, Physics and Earth Sciences.',
        branches: [
            {
                id: 'bioscience',
                title: 'Biological Sciences',
                icon: 'dna',
                eligibility: ['12th-PCB', 'undergrad'],
                salary: '₹5L – ₹20L',
                growth: '+18%',
                duration: '3–5 Years',
                examRequired: 'NEET, CUET',
                marksRequired: '60%+ in Biology & Chemistry',
                description: 'Study living organisms, cellular biology, genetics, biochemistry and ecology to advance medicine and conservation.',
                roadmap: [
                    '1. Clear NEET / CUET with strong Biology & Chemistry scores',
                    '2. Pursue B.Sc. in Botany, Zoology, or Microbiology (3 yrs)',
                    '3. Specialise via M.Sc. in Genetics, Biochemistry, or Ecology',
                    '4. Pursue PhD for research roles at CSIR/ICAR/NCBS'
                ],
                colleges: ['NCBS Bangalore', 'Miranda House (DU)', 'Presidency University Kolkata', 'Fergusson College Pune', 'St. Xavier\'s College Mumbai'],
                scholarships: ['DBT Scholarship (women in Science)', 'DST INSPIRE Fellowship', 'CSIR JRF Fellowship', 'Kiran Girls Scholarship'],
                futureRoles: ['Research Scientist', 'Biotech Analyst', 'Ecologist', 'Science Educator', 'Wildlife Conservationist'],
                jobMarket: 'High demand in pharma R&D, agri-biotech, and environmental research sectors.'
            },
            {
                id: 'chemistry',
                title: 'Chemistry & Materials Science',
                icon: 'test-tube',
                eligibility: ['12th-PCM', '12th-PCB', 'undergrad'],
                salary: '₹6L – ₹22L',
                growth: '+20%',
                duration: '3–5 Years',
                examRequired: 'JEE Mains, CUET',
                marksRequired: '65%+ in PCM',
                description: 'From drug synthesis to developing new materials, chemistry drives nearly every modern industry.',
                roadmap: [
                    '1. Score well in Chemistry in Class 12 (Science Stream)',
                    '2. Pursue B.Sc. Chemistry or Integrated M.Sc. at IIT/NIT',
                    '3. Specialise in Organic, Inorganic, Analytical, or Polymer Chemistry',
                    '4. Enter pharma industry or pursue PhD for research roles'
                ],
                colleges: ['IIT Bombay', 'IIT Delhi', 'Jadavpur University', 'BHU Varanasi', 'University of Hyderabad'],
                scholarships: ['DST INSPIRE Scholarship', 'CSIR-SRF Grant', 'WISE (Women in Science & Engineering) Scholarship'],
                futureRoles: ['Chemist / Analyst', 'Materials Scientist', 'R&D Scientist', 'Pharmaceutical Researcher', 'Quality Control Expert'],
                jobMarket: 'Strong demand in pharma, defense materials, FMCG, and battery technology sectors.'
            },
            {
                id: 'physics',
                title: 'Physics & Astrophysics',
                icon: 'atom',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹7L – ₹25L',
                growth: '+22%',
                duration: '3–6 Years',
                examRequired: 'JEE Advanced, JEST, CUET',
                marksRequired: '70%+ in Physics & Maths',
                description: 'Study fundamental laws of the universe, from quantum mechanics to cosmology, and apply them in tech and space research.',
                roadmap: [
                    '1. Excel in PCM in Class 12; attempt JEE Advanced for IIT/IISc',
                    '2. Pursue B.Sc. Physics (3 yrs) or Int. MSc at IISc/IIT',
                    '3. Clear JEST/GATE for TIFR, IMSc, ISRO research fellowships',
                    '4. PhD from premier institutes opens global research positions'
                ],
                colleges: ['IISc Bangalore', 'TIFR Mumbai', 'IIT Madras', 'St. Stephen\'s College Delhi', 'CMI Chennai'],
                scholarships: ['KVPY Fellowship', 'DST INSPIRE (JRF)', 'TIFR Graduate Fellowship', 'ISRO Scholarship for Women in Space Science'],
                futureRoles: ['Research Physicist', 'Astrophysicist', 'Quantum Computing Researcher', 'Data Scientist', 'ISRO Scientist'],
                jobMarket: 'Emerging demand in quantum tech, space research, defense, and semiconductor physics.'
            }
        ]
    },
    {
        id: 'technology',
        label: 'Technology',
        icon: 'cpu',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-indigo-600',
        desc: 'Build, design, and secure the digital systems that power the modern world.',
        branches: [
            {
                id: 'cs-ai',
                title: 'Computer Science & AI',
                icon: 'brain-circuit',
                eligibility: ['10th', '12th-PCM', 'undergrad'],
                salary: '₹8L – ₹40L+',
                growth: '+35%',
                duration: '4 Years (B.Tech) / 2 Years (M.Tech)',
                examRequired: 'JEE Main/Advanced, KCET, BITSAT',
                marksRequired: '75%+ in PCM, Strong Maths',
                description: 'Design software, build AI systems, and solve complex computational problems across every industry imaginable.',
                roadmap: [
                    '1. Build coding fundamentals (Python/C++); participate in olympiads in Class 10-12',
                    '2. Clear JEE Main → B.Tech CSE/IT at IIT, NIT, or BITS',
                    '3. In Year 2-3, specialise in ML, Data Structures, or Cloud via internships',
                    '4. Score GATE for M.Tech or get placed via campus recruitments at Google, Microsoft, etc.'
                ],
                colleges: ['IIT Bombay', 'IIT Delhi', 'IIIT Hyderabad', 'BITS Pilani', 'NIT Trichy', 'Jadavpur University'],
                scholarships: ['Google Women Techmakers Scholarship', 'Adobe India Women-in-Tech', 'Intel Edge AI Scholarship', 'Anita Borg Memorial Scholarship'],
                futureRoles: ['Software Engineer', 'AI/ML Engineer', 'Data Scientist', 'Product Manager', 'CTO/Startup Founder'],
                jobMarket: 'Most in-demand field globally. Strong presence at startups, IT companies, research labs.'
            },
            {
                id: 'cybersecurity',
                title: 'Cybersecurity',
                icon: 'shield-check',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹7L – ₹30L',
                growth: '+38%',
                duration: '3–4 Years',
                examRequired: 'CUET, JEE Main, or direct admission',
                marksRequired: '60%+ in PCM',
                description: 'Protect government infrastructure, financial systems, and private networks from cyber threats.',
                roadmap: [
                    '1. Learn networking basics (CompTIA Net+), Linux, and Python in Class 12',
                    '2. Pursue B.Tech CSE with Cybersecurity specialization',
                    '3. Earn industry certifications: CEH, CISSP, Security+',
                    '4. Work with CERT-In, banks, MNCs, or start your own cybersecurity firm'
                ],
                colleges: ['IIT Delhi (Cybersec Labs)', 'VIT Vellore', 'Amrita University', 'PEC Chandigarh', 'MIT WPU Pune'],
                scholarships: ['WiCyS Scholarship (Women in CyberSecurity)', 'Fortinet Cybersecurity Grant', 'Cisco NetAcad Women in Tech'],
                futureRoles: ['Penetration Tester', 'SOC Analyst', 'Security Architect', 'Policy & GRC Analyst', 'CISO'],
                jobMarket: 'Critical shortage of cybersecurity professionals globally—women are highly sought for diversifying the field.'
            },
            {
                id: 'biotech',
                title: 'Bioinformatics & Biotech',
                icon: 'microscope',
                eligibility: ['12th-PCB', '12th-PCM', 'undergrad'],
                salary: '₹6L – ₹20L',
                growth: '+25%',
                duration: '3–4 Years',
                examRequired: 'NEET (optional), CUET, GATE BT',
                marksRequired: '60%+ in Biology & Chemistry',
                description: 'Sit at the intersection of biology and computing. Decode genomic data, build disease models, and pioneer drug discovery using AI.',
                roadmap: [
                    '1. Score well in Biology/Chemistry and/or Programming in Class 12',
                    '2. Pursue B.Sc./B.Tech in Biotechnology or Bioinformatics',
                    '3. Specialize in Genomics, Drug Design, or Computational Biology via M.Sc.',
                    '4. Join pharma MNCs (Biocon, Cipla, Genentech) or pursue research at NCBS/IGIB'
                ],
                colleges: ['IIT Kharagpur (BioSciences)', 'NIT Warangal', 'Manipal Institute of Technology', 'Amity University', 'Jamia Hamdard'],
                scholarships: ['DBT-BET Scholarship', 'Kiran Girls Scholarship by WOS-A', 'BIRAC Women Innovator Grant'],
                futureRoles: ['Bioinformatics Analyst', 'Drug Discovery Scientist', 'Genomic Data Analyst', 'Clinical Researcher'],
                jobMarket: 'Fastest growing in India post-COVID; massive demand in pharma and agri-genomics sectors.'
            }
        ]
    },
    {
        id: 'engineering',
        label: 'Engineering',
        icon: 'cog',
        color: 'text-violet-600',
        bgColor: 'bg-violet-50',
        borderColor: 'border-violet-200',
        gradientFrom: 'from-violet-500',
        gradientTo: 'to-purple-700',
        desc: 'Design, build and solve real-world problems in aerospace, structures, circuits and more.',
        branches: [
            {
                id: 'aerospace',
                title: 'Aerospace Engineering',
                icon: 'rocket',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹8L – ₹25L',
                growth: '+20%',
                duration: '4 Years (B.Tech)',
                examRequired: 'JEE Advanced, CUSAT',
                marksRequired: '80%+ in PCM, strong Physics',
                description: 'Design aircraft, spacecraft, and satellites. Work with ISRO, HAL, or global aviation giants like Boeing and Airbus.',
                roadmap: [
                    '1. Build strong foundation in Physics and Maths in Class 11-12',
                    '2. Clear JEE Advanced for IIT Madras/Kanpur/Bombay Aerospace programs',
                    '3. Intern at ISRO, NAL, or HAL during B.Tech (Years 2-4)',
                    '4. Apply to GATE for ISRO Scientist recruitment or M.Tech at IIT'
                ],
                colleges: ['IIT Madras', 'IIT Kanpur', 'IIT Bombay', 'IIST Thiruvananthapuram', 'MIT Manipal'],
                scholarships: ['Kalpana Chawla Scholarship (CSKHPKV)', 'ISRO Women in STEM Grant', 'DRDO Fellowship'],
                futureRoles: ['ISRO Scientist/Engineer', 'Aeronautical Designer', 'Aircraft Systems Engineer', 'Defense Researcher', 'Flight Test Engineer'],
                jobMarket: 'ISRO expansion and India\'s satellite-as-a-service boom creating strong demand for aerospace engineers.'
            },
            {
                id: 'civil',
                title: 'Civil & Environmental Engineering',
                icon: 'landmark',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹5L – ₹18L',
                growth: '+15%',
                duration: '4 Years (B.Tech)',
                examRequired: 'JEE Main, GATE (for M.Tech/govt jobs)',
                marksRequired: '70%+ in PCM',
                description: 'Build bridges, design smart cities, and solve water, sanitation, and climate infrastructure challenges.',
                roadmap: [
                    '1. Focus on Maths and Physics in Class 12',
                    '2. Pursue B.Tech Civil Engineering at NIT/IIT or state engineering colleges',
                    '3. Specialize in Structural, Environmental, or Urban Transport Engineering',
                    '4. Join RITES, NHAI, or Municipal Bodies; or pursue M.Tech via GATE'
                ],
                colleges: ['IIT Roorkee', 'NIT Surathkal', 'Jadavpur University', 'SVNIT Surat', 'Delhi Technological University'],
                scholarships: ['Women Engineers for Sustainable Development (WESD)', 'NHAI Girls Scholarship', 'Aicte PRAGATI Scholarship'],
                futureRoles: ['Structural Engineer', 'Urban Planner', 'Environmental Consultant', 'Project Manager', 'PWD Officer'],
                jobMarket: 'Government infrastructure push (PM Gati Shakti) driving massive civil engineering hiring.'
            },
            {
                id: 'electronics',
                title: 'Electronics & VLSI Engineering',
                icon: 'circuit-board',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹7L – ₹28L',
                growth: '+30%',
                duration: '4 Years (B.Tech)',
                examRequired: 'JEE Main, GATE ECE',
                marksRequired: '72%+ in PCM',
                description: 'Design the tiny chips that power smartphones, satellites, and medical devices. India is now a global semiconductor design hub.',
                roadmap: [
                    '1. Clear JEE Main for NIT/IIT B.Tech ECE programs',
                    '2. Study Signals, Circuits, VLSI Design, and Embedded Systems',
                    '3. Intern at semiconductor firms: Qualcomm, Intel, Texas Instruments India',
                    '4. Clear GATE ECE for M.Tech at IITs or directly join chip design firms'
                ],
                colleges: ['IIT Delhi', 'IIT Kharagpur', 'NIT Calicut', 'VNIT Nagpur', 'Amrita School of Engineering'],
                scholarships: ['Qualcomm India Scholarship for Women', 'AICTE PRAGATI Scholarship', 'TSMC Women in Semiconductor Grant'],
                futureRoles: ['VLSI Design Engineer', 'Embedded Systems Developer', 'RF Engineer', 'Chip Architect at Qualcomm/Intel'],
                jobMarket: 'India Semiconductor Mission creating 1 lakh+ job openings; women in ECE are extremely valued.'
            },
            {
                id: 'diploma-eng',
                title: 'Diploma in Engineering (After 10th)',
                icon: 'graduation-cap',
                eligibility: ['10th'],
                salary: '₹2L – ₹8L (entry)',
                growth: '+12%',
                duration: '3 Years',
                examRequired: 'State Polytechnic Entrance (DET)',
                marksRequired: '50%+ in Class 10',
                description: 'A practical, job-ready qualification after 10th Standard across 30+ specializations like Civil, Mechanical, Computer, Electrical.',
                roadmap: [
                    '1. Complete Class 10 with 50%+ marks; apply to State Polytechnic entrance exam',
                    '2. Choose a 3-year Diploma at a Government or recognized Polytechnic college',
                    '3. Apply for lateral entry to B.E./B.Tech 2nd year after completing Diploma',
                    '4. Work as a Junior Technician or further pursue engineering degree'
                ],
                colleges: ['Government Polytechnic institutes in your state', 'Thakur Polytechnic Mumbai', 'Shri Bhagubhai Polytechnic Gujarat', 'Chandigarh Polytechnic'],
                scholarships: ['AICTE Girls Scholarship for Diploma', 'State Government SC/ST/OBC Girls Grants', 'PRAGATI Scholarship for Diploma holders'],
                futureRoles: ['Junior Engineer (JE)', 'Site Supervisor', 'Technician', 'Lateral Entry B.Tech holder', 'Entrepreneur'],
                jobMarket: 'Practical, immediate job market. Government JE exams and private manufacturing sector actively hire diploma holders.'
            }
        ]
    },
    {
        id: 'mathematics',
        label: 'Mathematics',
        icon: 'calculator',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        gradientFrom: 'from-orange-500',
        gradientTo: 'to-amber-600',
        desc: 'Use logic, statistics, and modelling to power finance, AI, and scientific research.',
        branches: [
            {
                id: 'data-science',
                title: 'Data Science & Statistics',
                icon: 'bar-chart-2',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹7L – ₹30L',
                growth: '+36%',
                duration: '3–4 Years',
                examRequired: 'CUET, JEE Main, CMI Entrance',
                marksRequired: '70%+ in Maths',
                description: 'Use statistics and machine learning to extract insights from data, drive decisions in healthcare, finance, and technology.',
                roadmap: [
                    '1. Excel in Maths and learn Python/R basics in Class 12',
                    '2. Pursue B.Sc. Statistics, B.Tech CSE (Data Science), or B.Stat at ISI',
                    '3. Build portfolio projects on Kaggle; intern at analytics firms',
                    '4. Join top tech firms or pursue M.Sc. Statistics for academia'
                ],
                colleges: ['ISI Kolkata', 'CMI Chennai', 'IIT Bombay', 'Delhi School of Economics', 'Symbiosis Statistical Institute'],
                scholarships: ['SAS Women in Statistics Grant', 'Actuaries India Women in Actuarial Science', 'Google Data Analytics Grant'],
                futureRoles: ['Data Scientist', 'Actuary', 'Statistician', 'ML Engineer', 'Quantitative Analyst (Quant)'],
                jobMarket: 'Absolute top-5 most demanded specialization globally. Nearly every industry needs data professionals.'
            },
            {
                id: 'economics-maths',
                title: 'Mathematical Economics & Finance',
                icon: 'trending-up',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹8L – ₹35L',
                growth: '+25%',
                duration: '3–5 Years',
                examRequired: 'DSE Entrance, JNUEE, IIT HSS, CAT',
                marksRequired: '70%+ in Maths',
                description: 'Apply advanced mathematical models to financial markets, economic policy, and risk management in banking and consulting.',
                roadmap: [
                    '1. Score 90%+ in Maths in Class 12',
                    '2. Pursue B.Sc. Economics (DU), B.Stat (ISI), or B.Sc. Maths + Economics',
                    '3. Apply for M.Sc. Economics at DSE, JNU, or IIT Economics programs',
                    '4. Join RBI, IMF, consulting firms (McKinsey, BCG), or investment banks'
                ],
                colleges: ['DSE Delhi', 'ISI Kolkata', 'IIT Bombay (HSS)', 'Presidency University Kolkata', 'NMIMS Mumbai'],
                scholarships: ['Reserve Bank of India Scholarship', 'World Bank Graduate Scholarship', 'IMF Diversity Fellowship for Women'],
                futureRoles: ['Economist', 'Quant Analyst', 'Investment Banker', 'Policy Analyst', 'Research Consultant'],
                jobMarket: 'High-paying field with demand from RBI, SEBI, global banks, and Big 4 consulting firms.'
            },
            {
                id: 'pure-maths',
                title: 'Pure Mathematics & Research',
                icon: 'sigma',
                eligibility: ['12th-PCM', 'undergrad'],
                salary: '₹5L – ₹20L (₹80L+ in global academia)',
                growth: '+10%',
                duration: '3–6 Years',
                examRequired: 'CMI, ISI Entrance, TIFR GS',
                marksRequired: '85%+ in Maths',
                description: 'Solve deep mathematical problems that underpin cryptography, quantum computing, physics, and theoretical computer science.',
                roadmap: [
                    '1. Clear IMO/INMO olympiads in school for premium programme access',
                    '2. Pursue B.Math from ISI Kolkata or B.Sc. Maths from CMI',
                    '3. Clear NBHM scholarship exam for M.Sc. in top universities',
                    '4. Pursue PhD at TIFR, CMI, or global universities (MIT, Cambridge)'
                ],
                colleges: ['ISI Kolkata', 'CMI Chennai', 'TIFR Mumbai', 'IIT Bombay Maths Dept', 'IISc Bangalore'],
                scholarships: ['NBHM (National Board for Higher Mathematics) Scholarship', 'TIFR Graduate Fellowship', 'Ramanujan Fellowship (Post-PhD)'],
                futureRoles: ['Professor/Researcher', 'Cryptographer', 'Algorithm Designer at DeepMind/OpenAI', 'Quant at Hedge Funds'],
                jobMarket: 'Niche but extremely high-impact. Pure mathematicians power cutting-edge AI and cryptography globally.'
            }
        ]
    }
];

// App routing state
let currentView = 'categories'; // categories | branches | profile
let selectedCategory = null;
let selectedBranch = null;
let compareList = [];

const getCategories = () => stemCategories;

const getBranchesForCategory = (catId) => {
    const cat = stemCategories.find(c => c.id === catId);
    if (!cat) return [];

    const edu = (window.userState && window.userState.education) || '';
    const marks = (window.userState && window.userState.marks) || {};

    const hasBioStream = !!(marks.obBio);
    const hasMathStream = !!(marks.obMaths || marks.obPhysics);

    let eligibilityKeys = [];
    switch (edu) {
        case '10th SSC':
            eligibilityKeys = ['10th'];
            break;
        case '12th HSC':
            if (hasBioStream && hasMathStream) {
                eligibilityKeys = ['12th-PCM', '12th-PCB', 'undergrad'];
            } else if (hasBioStream) {
                eligibilityKeys = ['12th-PCB', 'undergrad'];
            } else {
                eligibilityKeys = ['12th-PCM', 'undergrad'];
            }
            break;
        case 'Diploma':
            eligibilityKeys = ['10th', '12th-PCM', '12th-PCB'];
            break;
        case "Bachelor's":
        case "Master's":
        case 'M.Phil':
        case 'PhD':
        case 'Post-Doctorate':
            eligibilityKeys = ['10th', '12th-PCM', '12th-PCB', 'undergrad'];
            break;
        default:
            eligibilityKeys = ['10th', '12th-PCM', '12th-PCB', 'undergrad'];
    }

    let branches = cat.branches.filter(b => b.eligibility.some(e => eligibilityKeys.includes(e)));

    // Merge in detailed `careersData` if available
    if (window.careersData && window.careersData.roles) {
        branches = branches.map(b => {
            // Find a role that matches this branch's overarching title/category (naive matching for demo)
            const roleMatch = window.careersData.roles.find(r => r.category === b.title || r.category === cat.label || r.title.includes(b.title.split(' ')[0]));
            if (roleMatch) {
                return {
                    ...b,
                    salary: roleMatch.salaryRange,
                    jobMarket: `Demand: ${roleMatch.demand}. QP: ${roleMatch.nsdcQp} - ${b.jobMarket}`,
                    roadmap: roleMatch.roadmap.map(rm => `${rm.step}. ${rm.title}: ${rm.desc}`)
                };
            }
            return b;
        });
    }

    return branches;
};


// =====================================================
// RENDER FUNCTIONS
// =====================================================
const renderCategoryCards = () => {
    return `
    <div class="mb-10">
        <h1 class="text-4xl font-black text-[#1F2937] dark:text-gray-100 tracking-tight leading-tight mb-3 transition-colors">Choose Your STEM Path</h1>
        <p class="text-lg text-gray-500 dark:text-gray-400 transition-colors">Select a domain below to explore career options suited to <strong class="text-[#7C3AED] dark:text-[#A78BFA]">${(window.userState && window.userState.education) || 'your'}</strong> education level.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${stemCategories.map(cat => `
        <div onclick="selectCategory('${cat.id}')" class="bg-white dark:bg-gray-800 rounded-2xl border-2 ${cat.borderColor} dark:border-gray-700 hover:border-[#7C3AED] dark:hover:border-[#7C3AED] hover:shadow-xl cursor-pointer transition-all hover:-translate-y-1 overflow-hidden group">
            <div class="h-2 w-full bg-gradient-to-r ${cat.gradientFrom} ${cat.gradientTo}"></div>
            <div class="p-8">
                <div class="${cat.bgColor} dark:bg-gray-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <i data-lucide="${cat.icon}" class="w-7 h-7 ${cat.color} dark:text-white"></i>
                </div>
                <h2 class="text-2xl font-bold text-[#1F2937] dark:text-gray-100 mb-2 transition-colors">${cat.label}</h2>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 transition-colors">${cat.desc}</p>
                <div class="flex items-center gap-2 text-sm font-semibold ${cat.color} dark:text-[#A78BFA] transition-colors">
                    Explore ${cat.branches.length} Career Branches <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </div>
            </div>
        </div>
        `).join('')}
    </div>`;
};

const renderBranchCards = (catId) => {
    const cat = stemCategories.find(c => c.id === catId);
    const branches = getBranchesForCategory(catId);
    const edu = (window.userState && window.userState.education) || 'any';
    return `
    <div class="mb-8">
        <button onclick="goBackToCategories()" class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#2D0A59] dark:hover:text-white mb-4 font-medium transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to STEM Domains
        </button>
        <div class="flex items-center gap-4 mb-3">
            <div class="${cat.bgColor} dark:bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100 dark:border-gray-700 transition-colors">
                <i data-lucide="${cat.icon}" class="w-6 h-6 ${cat.color} dark:text-white transition-colors"></i>
            </div>
            <div>
                <h1 class="text-3xl font-black text-[#1F2937] dark:text-gray-100 tracking-tight transition-colors">${cat.label}</h1>
                <p class="text-gray-500 dark:text-gray-400 transition-colors">Showing paths for: <span class="font-semibold text-[#7C3AED] dark:text-[#A78BFA] transition-colors">${edu}</span></p>
            </div>
        </div>
    </div>
    ${branches.length === 0 ? `
    <div class="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 transition-colors">
        <i data-lucide="search-x" class="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors"></i>
        <p class="text-gray-500 dark:text-gray-400 font-medium transition-colors">No branches available for your education level in this category.</p>
        <p class="text-gray-400 dark:text-gray-500 text-sm mt-2 transition-colors">Try another domain or update your education level.</p>
    </div>` :
            `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${branches.map(b => `
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#7C3AED]/30 dark:hover:border-[#7C3AED]/50 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col">
            <div class="p-6 flex-1">
                <div class="w-10 h-10 rounded-xl ${cat.bgColor} dark:bg-gray-700 flex items-center justify-center mb-4 transition-colors">
                    <i data-lucide="${b.icon}" class="w-5 h-5 ${cat.color} dark:text-white transition-colors"></i>
                </div>
                <h3 class="text-xl font-bold text-[#1F2937] dark:text-gray-100 leading-tight mb-2 transition-colors">${b.title}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2 transition-colors">${b.description}</p>
                <div class="grid grid-cols-2 gap-2 mb-5">
                    <div class="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800/50 rounded-lg px-3 py-2 text-center transition-colors">
                        <p class="text-[10px] uppercase tracking-widest text-green-400 dark:text-green-500 font-bold">Growth</p>
                        <p class="text-green-700 dark:text-green-400 font-bold text-sm transition-colors">${b.growth}</p>
                    </div>
                    <div class="bg-violet-50 dark:bg-violet-900/30 border border-violet-100 dark:border-violet-800/50 rounded-lg px-3 py-2 text-center transition-colors">
                        <p class="text-[10px] uppercase tracking-widest text-violet-400 dark:text-violet-500 font-bold">Salary</p>
                        <p class="text-violet-700 dark:text-violet-400 font-bold text-xs transition-colors">${b.salary}</p>
                    </div>
                </div>
            </div>
            <div class="px-6 pb-6 pt-0 flex gap-3">
                <button onclick="openBranchProfile('${catId}', '${b.id}')" class="flex-1 bg-[#2D0A59] dark:bg-[#7C3AED] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#7C3AED] dark:hover:bg-[#5b21b6] transition-colors flex items-center justify-center gap-2">
                    Explore <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="toggleCompare('${b.id}', '${b.title}')" id="cmp-${b.id}" class="compare-toggle-btn px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-[#7C3AED] dark:hover:border-[#7C3AED] hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors text-xs font-medium">
                    + Compare
                </button>
            </div>
        </div>
        `).join('')}
    </div>`}
    
    <!-- Compare Bar -->
    <div id="compareBar" class="hidden fixed bottom-0 left-0 right-0 bg-[#2D0A59] text-white py-4 px-6 z-40 flex items-center justify-between shadow-2xl">
        <div>
            <p class="text-sm text-white/70">Compare Selected Fields</p>
            <p id="compareSelectionText" class="font-bold"></p>
        </div>
        <div class="flex gap-3">
            <button onclick="clearCompare()" class="px-4 py-2 rounded-lg bg-white/10 text-sm hover:bg-white/20 transition-colors">Clear</button>
            <button onclick="showComparison()" class="px-4 py-2 rounded-lg bg-[#7C3AED] text-sm font-bold hover:bg-[#5b21b6] transition-colors">View Comparison →</button>
        </div>
    </div>`;
};

const renderBranchProfile = (catId, branchId) => {
    const cat = stemCategories.find(c => c.id === catId);
    const branch = cat.branches.find(b => b.id === branchId);
    if (!branch) return '<p>Not found.</p>';
    return `
    <button onclick="goBackToBranches('${catId}')" class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#2D0A59] dark:hover:text-white mb-8 font-medium transition-colors">
        <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to ${cat.label}
    </button>
    
    <div class="bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo} rounded-3xl p-8 text-white mb-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div class="relative z-10 flex items-start justify-between flex-wrap gap-4">
            <div>
                <span class="text-xs font-bold uppercase tracking-wider text-white/60 mb-2 block">${cat.label}</span>
                <h1 class="text-4xl font-black tracking-tight leading-tight mb-3">${branch.title}</h1>
                <p class="text-white/80 leading-relaxed max-w-2xl">${branch.description}</p>
            </div>
        </div>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div class="bg-white/10 rounded-xl p-4">
                <p class="text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">Avg Salary</p>
                <p class="text-xl font-black">${branch.salary}</p>
            </div>
            <div class="bg-white/10 rounded-xl p-4">
                <p class="text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">10-Yr Growth</p>
                <p class="text-xl font-black">${branch.growth}</p>
            </div>
            <div class="bg-white/10 rounded-xl p-4">
                <p class="text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">Duration</p>
                <p class="text-lg font-black">${branch.duration}</p>
            </div>
            <div class="bg-white/10 rounded-xl p-4">
                <p class="text-xs text-white/60 uppercase tracking-wider mb-1 font-bold">Entrance Exam</p>
                <p class="text-lg font-black">${branch.examRequired}</p>
            </div>
        </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Roadmap -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            <h2 class="text-xl font-bold text-[#1F2937] dark:text-gray-100 mb-6 flex items-center gap-3 transition-colors"><i data-lucide="map" class="w-5 h-5 text-[#7C3AED] dark:text-[#A78BFA]"></i> Your Roadmap</h2>
            <div class="space-y-4">
                ${branch.roadmap.map((step, i) => `
                <div class="flex gap-4 items-start">
                    <div class="w-7 h-7 rounded-full bg-[#7C3AED]/10 dark:bg-[#7C3AED]/20 text-[#7C3AED] dark:text-[#A78BFA] flex items-center justify-center text-sm font-bold shrink-0 transition-colors">${i + 1}</div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pt-0.5 transition-colors">${step.replace(/^\d+\.\s/, '')}</p>
                </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Criteria & Job Market -->
        <div class="space-y-6">
            <div class="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-800/50 transition-colors">
                <h2 class="text-lg font-bold text-amber-800 dark:text-amber-500 mb-4 flex items-center gap-2 transition-colors"><i data-lucide="clipboard-check" class="w-5 h-5"></i> Entry Criteria</h2>
                <div class="space-y-3">
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-600 dark:text-gray-400 transition-colors font-medium">Entrance Exam</span>
                        <span class="font-bold text-amber-800 dark:text-amber-400 transition-colors">${branch.examRequired}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span class="text-gray-600 dark:text-gray-400 transition-colors font-medium">Min. Required Marks</span>
                        <span class="font-bold text-amber-800 dark:text-amber-400 transition-colors">${branch.marksRequired}</span>
                    </div>
                </div>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/50 transition-colors">
                <h2 class="text-lg font-bold text-blue-800 dark:text-blue-500 mb-3 flex items-center gap-2 transition-colors"><i data-lucide="trending-up" class="w-5 h-5"></i> Job Market Outlook</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">${branch.jobMarket}</p>
            </div>
        </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- Colleges — Location Aware -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
            ${(() => {
            const uState = (window.userState && window.userState.state) || 'Maharashtra'; // Default to show features if empty
            const uCity = (window.userState && window.userState.city) || 'Pune';
            const branchTypeMap = {
                'science': ['science'],
                'technology': ['engineering', 'technology'],
                'engineering': ['engineering', 'technology'],
                'mathematics': ['maths', 'science'],
            };
            const types = branchTypeMap[catId] || ['engineering', 'science'];
            if (['bioscience', 'biotech', 'chemistry'].includes(branchId)) types.push('science', 'medical');
            if (branchId === 'bioscience' || branchId === 'biotech') types.push('medical');

            let html = '';

            // Industrial Cluster Logic
            if (window.industrialClusters && window.industrialClusters[uCity]) {
                const dominantInd = window.industrialClusters[uCity].join(', ');
                html += `
                    <div class="mb-4 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-100 dark:border-purple-800/50 shadow-inner transition-colors">
                        <p class="text-xs text-purple-800 dark:text-purple-400 font-bold uppercase mb-1 transition-colors">🏭 Local Industry Cluster</p>
                        <p class="text-sm text-purple-700 dark:text-purple-300 transition-colors"><strong>${uCity}</strong> is a hub for: ${dominantInd}. Studying here offers great internship prospects!</p>
                    </div>
                `;
            }

            if (uState && typeof renderLocationColleges !== 'undefined') {
                html += `
                    <h2 class="text-lg font-bold text-[#1F2937] dark:text-gray-100 mb-4 flex items-center gap-2 transition-colors">
                        <i data-lucide="map-pin" class="w-5 h-5 text-[#7C3AED] dark:text-[#A78BFA]"></i>
                        Colleges Near You
                    </h2>
                    <ul class="space-y-4">${renderLocationColleges(types, uState, uCity).replace(/<li class="flex items-center gap-2/g, '<li class="flex flex-col gap-1').replace(/<span>(.*?)<\/span>/g, '<span class="font-bold text-gray-800 dark:text-gray-200 transition-colors">$1</span>')}</ul>`;
            } else {
                html += `
                    <h2 class="text-lg font-bold text-[#1F2937] dark:text-gray-100 mb-4 flex items-center gap-2 transition-colors">
                        <i data-lucide="building-2" class="w-5 h-5 text-gray-400 dark:text-gray-500"></i>
                        Top Colleges in India
                    </h2>
                    <ul class="space-y-2">
                        ${branch.colleges.map(c => `<li class="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300 transition-colors"><span class="font-bold text-gray-800 dark:text-gray-200"><div class="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#A78BFA] inline-block mr-2 shrink-0"></div>${c}</span></li>`).join('')}
                    </ul>`;
            }
            return html;
        })()}
        </div>
        <!-- Scholarships -->
        <div class="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-6 border border-pink-100 dark:border-pink-800/50 transition-colors">
            <h2 class="text-lg font-bold text-pink-800 dark:text-pink-500 mb-4 flex items-center gap-2 transition-colors"><i data-lucide="award" class="w-5 h-5 text-pink-500"></i> Scholarships for Women</h2>
            <ul class="space-y-2">
                ${branch.scholarships.map(s => `<li class="flex items-center gap-2 text-sm text-pink-700 dark:text-pink-400 font-medium transition-colors"><div class="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></div>${s}</li>`).join('')}
            </ul>
        </div>
        <!-- Future Roles -->
        <div class="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800/50 transition-colors">
            <h2 class="text-lg font-bold text-green-800 dark:text-green-500 mb-4 flex items-center gap-2 transition-colors"><i data-lucide="user-check" class="w-5 h-5 text-green-500"></i> Future Career Roles</h2>
            <ul class="space-y-2">
                ${branch.futureRoles.map(r => `<li class="flex items-center gap-2 text-sm text-green-700 dark:text-green-400 font-medium transition-colors"><div class="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></div>${r}</li>`).join('')}
            </ul>
        </div>
    </div>
    
    <!-- Ask Ada -->
    <div class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800/30 flex items-center justify-between gap-4 transition-colors">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[#7C3AED] dark:bg-[#6D28D9] rounded-xl flex items-center justify-center shrink-0 transition-colors">
                <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
            </div>
            <div>
                <p class="font-bold text-[#2D0A59] dark:text-[#E9D5FF] transition-colors">Ask Ada about ${branch.title}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 transition-colors">Your AI co-pilot can answer your personal questions about this field.</p>
            </div>
        </div>
        <button onclick="document.getElementById('adaToggleBtn').click(); document.getElementById('quickPrompts').classList.add('hidden'); document.getElementById('adaInput').value = 'Tell me more about becoming a student in ${branch.title}'; document.getElementById('adaSendBtn').click()"
            class="whitespace-nowrap px-5 py-2.5 bg-[#7C3AED] text-white rounded-xl text-sm font-bold hover:bg-[#2D0A59] transition-colors">
            Ask Ada →
        </button>
    </div>`;
};

const renderComparisonView = () => {
    if (compareList.length < 2) return '<p class="text-gray-500">Please select at least 2 fields to compare.</p>';
    const branches = compareList.map(id => {
        for (const cat of stemCategories) {
            const branch = cat.branches.find(b => b.id === id);
            if (branch) return { branch, cat };
        }
        return null;
    }).filter(Boolean);

    const compFields = [
        { label: 'Avg Salary', icon: 'indian-rupee', key: 'salary' },
        { label: '10yr Growth', icon: 'trending-up', key: 'growth' },
        { label: 'Duration', icon: 'clock', key: 'duration' },
        { label: 'Entrance Exam', icon: 'clipboard-check', key: 'examRequired' },
        { label: 'Min Marks', icon: 'percent', key: 'marksRequired' },
        { label: 'Job Market', icon: 'briefcase', key: 'jobMarket' },
    ];

    return `
    <div class="mb-8">
        <button onclick="goBackToBranches(selectedCategory)" class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#2D0A59] dark:hover:text-white mb-4 font-medium transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Branches
        </button>
        <h1 class="text-4xl font-black text-[#1F2937] dark:text-gray-100 tracking-tight mb-2 transition-colors">Career Comparison</h1>
        <p class="text-gray-500 dark:text-gray-400 transition-colors">Side by side: helping you make the right choice.</p>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full min-w-[700px]">
            <thead>
                <tr>
                    <th class="text-left py-4 text-gray-400 dark:text-gray-500 text-sm font-medium w-36 transition-colors">Metrics</th>
                    ${branches.map(({ branch, cat }) => `
                    <th class="text-left py-4 px-4 rounded-t-xl">
                        <div class="${cat.bgColor} dark:bg-gray-800 ${cat.color} dark:text-white rounded-xl p-4 transition-colors">
                            <i data-lucide="${branch.icon}" class="w-5 h-5 mb-1"></i>
                            <p class="text-sm font-bold">${branch.title}</p>
                        </div>
                    </th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${compFields.map((field, fi) => `
                <tr class="${fi % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/30' : 'bg-white dark:bg-gray-900'} transition-colors">
                    <td class="py-4 pr-4 border-b border-gray-100 dark:border-gray-800">
                        <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">
                            <i data-lucide="${field.icon}" class="w-4 h-4"></i>${field.label}
                        </div>
                    </td>
                    ${branches.map(({ branch }) => `
                    <td class="py-4 px-4 text-sm text-gray-700 dark:text-gray-300 font-medium border-b border-gray-100 dark:border-gray-800 transition-colors">${branch[field.key]}</td>`).join('')}
                </tr>`).join('')}
                <!-- Colleges row -->
                <tr class="bg-gray-50/50 dark:bg-gray-800/30 transition-colors">
                    <td class="py-4 pr-4 align-top border-b border-gray-100 dark:border-gray-800">
                        <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">
                            <i data-lucide="building-2" class="w-4 h-4"></i>Top Colleges
                        </div>
                    </td>
                    ${branches.map(({ branch }) => `
                    <td class="py-4 px-4 align-top border-b border-gray-100 dark:border-gray-800 transition-colors">
                        <ul class="space-y-1">
                            ${branch.colleges.slice(0, 3).map(c => `<li class="text-xs text-gray-600 dark:text-gray-400 transition-colors">• ${c}</li>`).join('')}
                        </ul>
                    </td>`).join('')}
                </tr>
                <!-- Scholarships Row-->
                <tr class="bg-white dark:bg-gray-900 transition-colors">
                    <td class="py-4 pr-4 align-top">
                        <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">
                            <i data-lucide="award" class="w-4 h-4"></i>Scholarships
                        </div>
                    </td>
                    ${branches.map(({ branch }) => `
                    <td class="py-4 px-4 align-top">
                        <ul class="space-y-1">
                            ${branch.scholarships.slice(0, 2).map(s => `<li class="text-xs text-pink-600 dark:text-pink-400 font-medium transition-colors">• ${s}</li>`).join('')}
                        </ul>
                    </td>`).join('')}
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-6 text-center">
        <button onclick="clearCompare(); goBackToBranches(selectedCategory)" class="px-6 py-3 bg-[#2D0A59] text-white rounded-xl font-semibold hover:bg-[#7C3AED] transition-colors">
            Back to Branches
        </button>
    </div>`;
};

const renderDiscovery = () => `
<div id="discoveryPage" class="hidden pt-24 px-4 md:px-8 pb-28 container mx-auto max-w-7xl">
    <div id="discoveryContent">
        <!-- Content is rendered dynamically -->
    </div>
</div>`;

// =====================================================
// DISCOVERY CONTROLLER FUNCTIONS
// =====================================================
function selectCategory(catId) {
    selectedCategory = catId;
    currentView = 'branches';
    renderDiscoveryContent();
}

function openBranchProfile(catId, branchId) {
    selectedCategory = catId;
    selectedBranch = branchId;
    currentView = 'profile';
    renderDiscoveryContent();
}

function goBackToCategories() {
    currentView = 'categories';
    selectedCategory = null;
    selectedBranch = null;
    compareList = [];
    updateCompareBar();
    renderDiscoveryContent();
}

function goBackToBranches(catId) {
    currentView = 'branches';
    selectedCategory = catId;
    selectedBranch = null;
    document.getElementById('compareBar') && document.getElementById('compareBar').classList.add('hidden');
    renderDiscoveryContent();
}

function renderDiscoveryContent() {
    let html = '';
    if (currentView === 'categories') html = renderCategoryCards();
    else if (currentView === 'branches') html = renderBranchCards(selectedCategory);
    else if (currentView === 'profile') html = renderBranchProfile(selectedCategory, selectedBranch);
    else if (currentView === 'compare') html = renderComparisonView();

    const container = document.getElementById('discoveryContent');
    if (container) {
        container.innerHTML = html;
        lucide.createIcons();
        // Re-attach compare bar state
        if (currentView === 'branches') {
            updateCompareBar();
            compareList.forEach(id => {
                const btn = document.getElementById('cmp-' + id);
                if (btn) btn.classList.add('bg-[#7C3AED]', 'text-white', 'border-[#7C3AED]');
            });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleCompare(branchId, branchTitle) {
    if (compareList.includes(branchId)) {
        compareList = compareList.filter(id => id !== branchId);
        const btn = document.getElementById('cmp-' + branchId);
        if (btn) btn.classList.remove('bg-[#7C3AED]', 'text-white', 'border-[#7C3AED]');
    } else {
        if (compareList.length >= 3) {
            alert('You can compare up to 3 fields at a time.');
            return;
        }
        compareList.push(branchId);
        const btn = document.getElementById('cmp-' + branchId);
        if (btn) btn.classList.add('bg-[#7C3AED]', 'text-white', 'border-[#7C3AED]');
    }
    updateCompareBar();
}

function updateCompareBar() {
    const bar = document.getElementById('compareBar');
    if (!bar) return;
    if (compareList.length > 0) {
        bar.classList.remove('hidden');
        const names = compareList.map(id => {
            for (const cat of stemCategories) {
                const b = cat.branches.find(branch => branch.id === id);
                if (b) return b.title;
            }
            return id;
        });
        document.getElementById('compareSelectionText').textContent = names.join(' vs ');
    } else {
        bar.classList.add('hidden');
    }
}

function clearCompare() {
    compareList = [];
    document.querySelectorAll('.compare-toggle-btn').forEach(btn => {
        btn.classList.remove('bg-[#7C3AED]', 'text-white', 'border-[#7C3AED]');
    });
    updateCompareBar();
}

function showComparison() {
    if (compareList.length < 2) {
        alert('Please select at least 2 fields to compare.');
        return;
    }
    currentView = 'compare';
    renderDiscoveryContent();
    const bar = document.getElementById('compareBar');
    if (bar) bar.classList.add('hidden');
}
