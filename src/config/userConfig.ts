import neurospeccompanionmerged from './projects/neurospeccompanionmerged.json';
import scheds from './projects/scheds.json';
import fadedTextRestoration from './projects/fadedtextrestoration.json';
import clinicalmain from './projects/clinicalmain.json';
import seatReservation from './projects/seatreservation.json';
import nucpaBalloons from './projects/nucpa-balloons.json';
import nucpaBalloonsApi from './projects/nucpaballoonsapi.json';
import portfolio from './projects/portfolio.json';
import foodies from './projects/foodies.json';

export const userConfig = {
    // Personal Information
    name: 'Hieu Le',
    role: 'Information Security Specialist',
    location: 'Ho Chi Minh City, Vietnam',
    email: 'harrylee02.work@gmail.com',
    website: 'harrylee.id.vn',
    roleFocus: 'Security Specialist',
    age: 21,    

    // Social Links
    social: {
        github: 'https://github.com/HarryLee02',
        linkedin: 'https://www.linkedin.com/in/hieule-harrylee//', // Add your LinkedIn URL
    },

    // Contact Information
    contact: {
        email: 'harrylee02.work@gmail.com',
        phone: '+84902751871', // Add your phone number
        calendly: 'https://calendly.com/harrylee02-work', // Add your Calendly URL
    },

    // Spotify Configuration
    spotify: {
        playlistId: '0mSgMxv8a4CE9DnPVONECO', // Your Spotify playlist ID
        playlistName: 'random-stuff',
    },

    // Resume Configuration
    resume: {
        url: 'https://drive.google.com/file/d/1k5QVhHgOb6o4ksZ5AHuWFkqZ4-8Jw7lW/view?usp=sharing',
        localPath: '/resume.pdf',
    },

    // Education Background
    education: [
        {
            degree: "Bachelor of Computer Science",
            major: "Information Security",
            institution: "University of Information and Technology",
            location: "Ho Chi Minh City, Vietnam",
            year: "2022-2026",
            description: "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Biomedical Informatics, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems",
            images: [
                {
                    url: "https://tuyensinh.uit.edu.vn/sites/default/files/uploads/files/dai-hoc-uit-3.jpg",
                    alt: "University of Information and Technology",
                    description: "University of Information and Technology Campus"
                }
            ]
        }
    ],

    courses: [
        {
            title: "IOT",
            description: "IOT course",
            institution: "ITI",
            location: "Cairo, Egypt",
            year: "2023-2024",
            images: [
                {
                    url: "https://iti.gov.eg/assets/images/ColoredLogo.svg",
                    alt: "ITI",
                    // description: "ITI Campus"
                }
            ]
        },
        {
            title: ".NET full stack course",
            description: ".NET full stack course",
            institution: "Digital Egypt Pioneers Initiative - DEPI",
            location: "Cairo, Egypt",
            year: "2024",
            images: [
                {
                    url: "https://depi.gov.eg/assets/images/proAr.png",
                    alt: "DEPI",
                    // description: "DEPI Logo"
                }
            ]
        }
    ],

    skills: [
        "C++",
        "C#",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL Server",
        "MongoDB",
        "Docker",
        "MITRE ATT&CK",
        "OWASP Top 10",
        "Havoc C2 Framework",
    ],

    extraCurricularRoles: [
        {
            role: "Course Marshal",
            institution: "Son Kim, Thu Duc City run",
            location: "Ho Chi Minh City, Vietnam",
            year: "2023",
            images: [
                {
                    url: "https://i.ibb.co/FbSmTsBw/486635391-1079182187577545-400541279663759578-n.jpg",
                    alt: "NUICPC",
                    // description: "NUICPC Campus"
                },
                
            ]
        },
        {
            role: "Private Tutor",
            institution: "Personal Resident",
            location: "Ho Chi Minh City, Vietnam",
            year: "2023",
            images: [
                {
                    url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487392755_1081523057343458_8188220183188100569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLS-aCW1uJUQ7kNvwGbXwyf&_nc_oc=AdlFYb4-vwoTMNuaHrlFgSR161QWwnQ7VtWfb-8Y_JyoVI37WuwF6Qwu3I3tjawZM10&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=l69wa6Aj6hbCl-b5xEZigg&oh=00_AfHAACCAl3WKApFTelz0kJWcQbEIeAxPXnHV1WHsRoCEJA&oe=6806DA4B",
                    alt: "Nile University",
                    description: "Nile University Campus"
                }
            ]
        },
        {
            role: "Part-time Teacher",
            institution: "Saigon Chess - Cờ Vua Sài Gòn",
            location: "Ho Chi Minh City, Vietnam",
            year: "2025-Now",
            images: [
                {
                    url: "https://i.ibb.co/v6QLXpqg/486627143-1081260057369758-4195012303656403802-n.jpg",
                    alt: "NUICPC"
                }

            ]
        },

    ],

    extraCurricularActivities: [
        {
            title: "Head of IT & Cheating Control Committee",
            description: "NUCPA",
            institution: "NUCPA",
            location: "Nile University",
            year: "2025",
            images: [
                {
                    url: "https://i.ibb.co/N6FsYfLW/NP100582-2.jpg",
                    alt: "Nile University",
                    description: "Nile University Campus"
                },
                {
                    url: "https://i.ibb.co/355vdbMJ/NP109982-1.jpg",
                    alt: "Nile University",
                    description: "Nile University Campus"
                },
                {
                    url: "https://i.ibb.co/Frhbfyq/NP100626-2-1.jpg",
                    alt: "Nile University",
                    description: "Nile University Campus"
                }
            ]
        },
        {
            title: "SWE Sessions",
            institution: "GDG Nile University",
            location: "Nile University",
            year: "2025",
            images: [
                {
                    url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
                    alt: "Nile University",
                    description: "Nile University Campus"
                }
            ]
        },
        {
            title: "NUICPC Problem Solving Sessions",
            description: "Mentored students in problem solving and competitive programming, started as a member and became a mentor, from level 0 to level 2, and helped them to qualify for the ECPC Finals",
            institution: "NUICPC",
            location: "Nile University",
            year: "2022-2025",
            images: [
                {
                    url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/486652074_1077701407725623_8749819316280105843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=925gSLld9YIQ7kNvwH1Tnis&_nc_oc=AdkNGFJJzloJMZ7UyMqzyxpop7LgOAS4wDf37phzksSB9zyg6YYoJn9DvQBkTRCPe3c&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2jkQxIt1NA2bEK9hDA_sLw&oh=00_AfEFWMQ8TXpm7J7GNg31NTQtj51-xBK0gA96v3e3FXFOXw&oe=6806D41D",
                    alt: "Nile University",
                    description: "Nile University Campus"
                },
                {
                    url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
                    alt: "Nile University",
                    description: "Nile University Campus"
                },
                {
                    url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484516365_1070411428454621_8390835945290794938_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eGV6obo35CwQ7kNvwEna_H_&_nc_oc=AdkJaDZSOxHorBC4LMHappVliFJtwF5f7D8dyRSgS9Dn6aLdg1YEnE6taP2Ig3sbyQs&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=mEX3OZGsZeCySB76oTVkRQ&oh=00_AfEuFzuaNHYsYm3DLGnEWPCQYRyyQfVNh64r__8G_DKNaA&oe=6806E9D5",
                    alt: "Nile University",
                    description: "Nile University Campus"
                }
            ]
        }
    ],
    competitions: [
        {
            title: "UIU CTF 2023 - Wanna Game Weekly",
            description: "UIU CTF 2023 - Wanna Game Weekly",
            achievement: "3rd place with team pl4nt",
            year: "2023",
            images: [
                {
                    url: "../assets/images/uiu-ctf-2023.png",
                    alt: "UIU CTF 2023 - Wanna Game Weekly",
                    description: "Award board"
                }
            ]
        }
    ],

    // Professional Experience
    experience: [
        {
            title: "Academy Full Stack Developer",
            company: "Luftborn",
            location: "Cairo, Egypt",
            period: "July 2024 - October 2024",
            description: "Working on a full stack web application for a client using Angular, React, .NET, Entity Framework, SQL Server, Bootstrap, and jQuery.",
            technologies: [".NET", "Entity Framework", "SQL Server", "Angular", "React", "Bootstrap", "jQuery"],
            images: [
                {
                    url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/277727078_119097457389244_7717309927402528390_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rvNpB-9dCAoQ7kNvwHeda0X&_nc_oc=Adk8Qg0h-4iVQGhQc5-3sXR9TAe3QxNy92vyJ3G7dWl2r0Is9MhcHn2t3A7PDOe4Qvk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=oM0aNre6tagZivjrXfzsVA&oh=00_AfHRaHWXsIyHB16sr_Oi3DiU-tA--5cznxWLBv0Cwpg8rg&oe=6806F746",
                    alt: "Luftborn",
                    // description: "Luftborn Logo"
                }
            ]
        }
    ],

    // SEO Configuration
    seo: {
        title: 'HarryLee - Information Security Specialist',
        description: 'Vietnamese Information Security Specialist',
        keywords: ['Information Security Specialist', 'Web Development', 'Vietnam'],
    },

    // Theme Configuration
    theme: {
        primaryColor: '#1ED760', // Spotify green
        secondaryColor: '#1d1d1f',
        accentColor: '#007AFF',
    },

    // Projects Configuration
    projects: [
        scheds,
        portfolio,
        foodies,
        fadedTextRestoration,
        nucpaBalloons,
        nucpaBalloonsApi,
        neurospeccompanionmerged,
        clinicalmain,
        seatReservation,
        
        // Add more projects here
    ]
} as const; 