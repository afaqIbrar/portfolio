import { FaNode, FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react'

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    // { name: "Testimonials", link: "#testimonial" },
    { name: "Contact", link: "#contact" },
];

export const experiencesData = [
    {
        title: "Software Engineer - Coding Crafts",
        location: "Lahore, Pakistan",
        description:
            "Enhanced a government document application platform with NestJS, PostgreSQL, and MongoDB. Implemented AWS SQS and Lambda for lead management and automated follow-ups, including reminders via Twilio. Integrated Twilio for communication, used Puppeteer for form automation, and optimized the system for managing passports, visas, and other paperwork. Integrated Vapi for voice chat with AI Assistant for better customer support",
        icon: React.createElement(FaNode),
        date: "2024(June) - present",
    },
    {
        title: "Software Engineer - | - Oware Technologies",
        location: "Lahore, Pakistan",
        description:
            "As a Full Stack MERN Developer, I enhanced the supply chain platform with a Control Tower Exception Display for real-time monitoring and revamped the UI design. I integrated Magic Bell for real-time notifications and used Deck.gl for advanced data visualization. I developed intuitive React.js interfaces, custom REST APIs with Express, and contributed to architecture discussions, ensuring a scalable and resilient infrastructure.",
        icon: React.createElement(FaNode),
        date: "2023(June) - 2023(May)",
    },
    {
        title: "Backend Developer - Programmer Force",
        location: "Lahore, Pakistan",
        description:
            "I developed and maintained APIs for a KYC (Know Your Customer) product, integrating responses from AI models to streamline verification processes. By implementing real-time functionalities with Node.js and sockets, I ensured efficient communication and instant AI responses. I wrote reusable, optimized code to boost system performance and collaborated across teams to meet milestones and deliver scalable solutions.",
        icon: React.createElement(LuGraduationCap),
        date: "2023(April) - 2023(June)",
    },
    {
        title: "Software Engineer - Rolustech",
        location: "Lahore, Pakistan",
        description:
            "As a Node.js developer, I contributed to a B2B2C call center portal using Angular by developing and managing various APIs for routing, authentication, and CRM requests. I created a real-time notification module using Pusher and integrated QuickBooks with the CRM, ensuring seamless real-time syncing. Additionally, I worked on SugarCRM to enhance subscription-based services for Zension.",
        icon: React.createElement(LuGraduationCap),
        date: "2021(June) - 2023(April)",
    },
] as const;

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 4,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-5 md:col-span-6 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];


export const projects = [
    {
        id: 1,
        title: "HelloGov (Get govt. docs fast with HelloGov)",
        des: "Simplify your government paperwork with HelloGov! Our AI-driven platform makes securing passports, visas, and other documents fast and easy. Say goodbye to long waits and hello to effortless processing.",
        img: "/hellogov.png",
        iconLists: ["/node.svg","/ts.svg","/nest.svg", "/typeorm.svg", "/mongodb.svg","/postgresql.svg"],
        link: "https://www.hellogov.com/",
    },
    {
        id: 2,
        title: "O360 (Cloud Platform for Modern Supply Chains) ",
        des: "Optimize your supply chain with O360's AI-powered platform. Gain real-time visibility, streamline operations, and cut costs effortlessly. Transform your logistics and inventory management today.",
        img: "/o360.png",
        iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mysql.svg","/javascript.svg"],
        link: "https://www.o360cloud.com/",
    },
    {
        id: 3,
        title: "KYC Product (Liveness Detection)",
        des: "Facia.ai offers cutting-edge deepfake detection, facial recognition, and liveness detection solutions, designed for robust security and accuracy. Protect your business from fraud and misinformation with our AI-powered technology trusted by top enterprises and governments.",
        img: "/facia.png",
        iconLists: ["/node.svg", "/javascript.svg", "/ts.svg", "/mongodb.svg", "/postgresql.svg"],
        link: "https://facia.ai/",
    },
    {
        id: 4,
        title: "Zension Tech (Subscription Based Model)",
        des: "Zension redefines tech accessibility with our subscription-based services, offering flexible device upgrades and comprehensive protection. Enjoy the latest tech with minimal e-waste and maximum convenience.",
        img: "/zension.png",
        iconLists: ["/re.svg", "/php.svg", "/node.svg", "/mysql.svg"],
        link: "https://www.zensiontec.com/",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Afaq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Afaq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Afaq is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Afaq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Afaq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Afaq is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Afaq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Afaq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Afaq is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Afaq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Afaq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Afaq is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Afaq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Afaq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Afaq is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        href: "https://www.github.com/afaqibrar"
    },
    {
        id: 3,
        img: "/link.svg",
        href: "https://www.linkedin.com/in/afaq-ibrar"
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "React",
    "Next.js",
    "Material UI",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Git",
    "Node.js",
    "Express",
    "NestJs",
    "PHP",
    "PostgreSQL",
    "MongoDB",
    "MySql",
    "Prisma",
    "TypeORM",
    "Sequalize",
    "AWS",
    "Puppeteer",
    "Twilio"
] as const;
