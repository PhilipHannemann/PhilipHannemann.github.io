import { type ResumeEntry } from "@/components/Resume"

export const I_AM = ["a Senior Developer", "a Data Scientist", "a Full-Stack Developer", "Head of Process Automation"] as const

export const HEADER_SLIDES = [
    "/education_stanford.JPG",
    "/education_sjsu.JPG",
    "/education_tuc.JPG",
] as const

export const EDUCATION: ReadonlyArray<ResumeEntry> = [
    {
        headline: "Master of Applied Computer Science",
        subheadline: "Thesis: Streckendaten-basierte Optimal-Steuerung von Hybridzügen in Echtzeitumgebungen",
        time: "2017 - 2020",
        at: "TU Chemnitz, San José State and Stanford",
        description: "Main Focus: Intelligent and Multimedia Systems",
        workingOn: [
            "Mobile Device Development",
            "Information Security",
            "Object Oriented Programming",
            "Serverside Web Programming",
            "Blockchain, Machine Learning, Internet of Things, and more",
        ]
    },
    {
        headline: "Bachelor of Applied Computer Science",
        subheadline: "Thesis: Verbesserung eines Aufmerksamkeitsmodells mit Deep Learning und Data Augmentation",
        time: "2014 - 2018",
        at: "TU Chemnitz",
        description: "Main Focus: Computer Graphics",
        workingOn: [
            "Math",
            "Computer Graphics",
            "Artificial Intelligence",
            "Datastructures",
            "Theoretical Computer Science",
        ]
    },
]

export const CARRIER: ReadonlyArray<ResumeEntry> = [
    {
        headline: "Head of Process automation",
        time: "since 2022",
        at: "STTech",
        description: "After 1,5 years at STTech, serving as the Head of Process Automation, my focus is to revolutionize the claim handling processes for insurance companies, particularly within the domain of dentist invoices. This domain allowed me to leverage automation to enhance efficiency, accuracy, and customer satisfaction.",
        workingOn: []
    },
    {
        headline: "Software Developer for Autonomous Systems",
        time: "since 2020",
        at: "STTech",
        description: "As a Software Engenier I started a job at STTech what further fueled my passion for automated systems as I had the chance in developing autonomous cleaning robots build for the demands of expansive spaces like supermarkets and warehouses and working on autonomous car driving solutions.",
        workingOn: []
    },
    {
        headline: "Software Developer for real-time energy optimization algorithms",
        subheadline: "Master Thesis",
        time: "2019 - 2020",
        at: "Siemens Mobility",
        description: "During my master thesis, I architected real-time optimization algorithms in C++ to make trains more energy-efficient. I focused on crafting algorithms aimed at energy efficiency by calculating the optimal driving strategies in real-time - an solution that holds immense promise for sustainable transportation solutions.",
        workingOn: []
    },
    {
        headline: "Software Developer",
        subheadline: "Internship & Working Student",
        time: "2019",
        at: "IAV",
        description: "I contributed during an internship to the creation of a groundbreaking system - the Concierge Service. This pioneering initiative empowered vehicles to autonomously perform multiple tasks at parking spaces. It enabled cars to handle activities such as car maintenance, finding parking spaces, and even executing repairs fully autonomously.",
        workingOn: []
    },
    {
        headline: "Full-Stack Developer",
        subheadline: "Working Student",
        time: "2015 - 2020",
        at: "TU Chemnitz",
        description: "During my studies at the TU Chemnitz I was working as a working student to help optimize the website. I build a new more organized website structue and added search and filter functionalities. All was build with php on the backend side and JavaScript, HTML and CSS on the client side.",
        workingOn: []
    }
] as const