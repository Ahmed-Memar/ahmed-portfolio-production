import stageVNBIT from "@/images/stage-VNB-IT.png";
import stagCNS from "@/images/stageCNS.png";

export const degreesData = [
    {
        year: "09/2024 - Present",
        degree: "Master 2 in Computer Science - Cybersecurity",
        university: "Université de Caen Normandie",
    },
    {
        year: "09/2023 - 05/2024",
        degree: "Master 1 in Computer Science - Cybersecurity",
        university: "Université de Caen Normandie",
    },
    {
        year: "09/2019 - 08/2022",
        degree: "Computer and Communication Network Engineering",
        university: "Lebanese University",
    },
];


export const skillsData = [
    'Git',
    'Docker',
    'Python',
    'Java',
    'PHP',
    'C',
    'C#',
    'HTML',
    'CSS',
    'javascript',
    'React',
    'Next JS',
    'Wordpress',
    'MongoDB',
    'MySQL',

    // Choose your skills from below. Make sure it's in the same format and spelled correctly.
    // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
    
    
    // AVAILABLE SKILLS
    
    /* 
    HTML
    CSS
    javascript 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
    */
    
];

export const projectsData = [
    
    {
        title: "Blockchain Application Development with Smart Contract",
        technologies: "JavaScript, python",
        desciption : "Development of a blockchain-based application featuring a smart contract to automate management processes and execute transactions. This project highlights the use of smart contracts to ensure transparency and security in transactions.",
        skills: ["python", "javascript"],
    },
    {
        title: "DDoS Attack Simulator",
        technologies: "Docker, hping3, slowloris, nginx, apache",
        desciption : "Study and simulation of DDoS attacks on web servers. This simulator is designed to analyze the effects of DDoS attacks on server infrastructure and demonstrate the importance of robust defense mechanisms.",
        skills: ['docker', 'nginx'],
    },
    {
        title: "Malicious Web Content Detection",
        technologies: "Python, machine learning algorithms",
        desciption : "Development of an interface that analyzes website content and automatically detects malicious web content. This project uses Python and various machine learning algorithms to identify potential threats.",
        skills: ["python"],
    }, 
    {
        title: "Large and Complex Website",
        technologies: "PHP, MySQL, HTML, CSS, JavaScript",
        desciption: "Development of a large website showcasing job opportunities, internships, and scholarships. This project includes creating a dashboard where users can manage content such as job listings and applications for end-users.",
        skills: ["PHP", "MySQL", "HTML", "CSS", "javascript"],
    },
    {
        title: "This Portfolio",
        technologies : "React, NextJs, Tailwind CSS, NodeMailer, Google Captcha Api",
        desciption : "My portfolio showcases my projects and skills with a clean design using React and Next.js. It features Tailwind CSS for styling, NodeMailer for form submissions, and Google Captcha API for security.",
        skills: ["React", "Next JS", "Tailwind"],
    },
    
    {
        title: "Computer Vision",
        technologies: "Python, Jupyter Notebook, AI",
        desciption : "An artificial intelligence project focused on modifying and enhancing images using computer vision techniques. This project uses Python to apply various image processing algorithms and improve visual quality.",
        skills: ["python"],
    },

]

export const experiencesData = [
    {
        title: "System and Network Security Administrator",
        company: "VNB-IT, Ile-de-France",
        date: "06/2024 - 07/2024 (2 months)",
        technologies: "GPO, Active Directory, Hyper-V/Proxmox Virtualization.",
        desciption : [
            "Administered and maintained Windows and Linux servers. ",
            "Technical support for employees and user account management. ",
            "Implementation and deployment of 3 security projects (WSUS, OpenVAS, and ClamAV)."
        ],
        image: {
            title: "stageVNBIT",
            url : stageVNBIT,
        },
     },

    {
        title: "Network and Security Engineer",
        company: "CNS, part of the multinational ICC group",
        date: "09/2022 - 08/2022 (6 months)",
        technologies: "Firewall, VPN, virtual IPs, Cisco Packet Tracer",
        desciption : [
            "Management of network infrastructure (routers, switches, firewalls, VPN).",
            "Security log analysis to detect and prevent incidents.",
            "Security auditing: Identifying vulnerabilities and applying solutions."
        ],
        image: {
            title: "stagCNS",
            url : stagCNS,
        },
    },
    {
        title: "Assistant Engineer in Telecommunications and Home Automation",
        company: "OGERO, Lebanese Ministry of Telecommunications",
        date: "05/2021 - 08/2021 (4 months)",
        technologies: "cabling, Mapping, Wi-Fi design, IOT, VoIP",
        desciption : [
            "Analyse et sécurisation des infrastructures de télécommunication.",
            "Surveillance des réseaux télécoms pour menaces.",
            "Documentation des procédures de sécurité." 
        ],
        image: null,
    },
    {
        title: "Freelance Web Developer",
        company: "Self-employed",
        date: "08/2022 - Present",
        technologies: "Développement web personnalisé., Gestion de projets en autonomie.",
        desciption : [
            "Created websites and online stores for various clients. ",
            "Developed custom web solutions to meet client needs. ",
            "Enhanced clients' online presence through tailored web designs."
        ],
        image: null,
    },
]
