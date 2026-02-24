import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss, SiRedux, SiPostman, SiSocketdotio } from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaGitAlt } from 'react-icons/fa';

export const HERO_CONTENT = `Full-stack MERN developer experienced in building scalable web applications using React, Node.js, Express.js, and MongoDB. Skilled in secure REST API development, authentication systems, real-time features, and cloud deployment. Successfully delivered production-ready solutions across freelance and full-time projects.`;

export const ABOUT_TEXT = `I am a dedicated MERN Stack Developer with a focus on building scalable and performant web applications. Experienced in React.js, Node.js, Express.js, and MongoDB, I have built production-ready solutions including e-commerce platforms and ride-hailing apps. My expertise covers secure REST API development, JWT & OTP authentication, real-time features with Socket.io, and payment gateway integrations (Razorpay). I follow Clean Architecture and MVC principles to ensure maintainable and efficient code.`;

export const EXPERIENCES = [
    {
        year: "Aug 2023 - Jan 2025",
        role: "MERN Stack Developer",
        company: "Brototype - Calicut, Kerala",
        description: `Developed and deployed multiple full-stack web applications using the MERN stack. Built responsive, production-ready UIs with React.js and Tailwind CSS. Designed and implemented RESTful APIs with JWT-based authentication and role-based authorization. Integrated OTP authentication, payment gateways (Razorpay), live location tracking, and real-time features. Applied Clean Architecture and MVC principles to improve scalability and maintainability. Deployed applications using AWS and Vercel.`,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AWS"],
    },
    {
        year: "Freelance",
        role: "Full-Stack Developer",
        company: "Lobuy",
        description: `Developed a full-featured e-commerce platform supporting product browsing, cart management, and secure checkout. Implemented OTP/email-based authentication and authorization. Integrated Razorpay payment gateway for secure online transactions. Built an admin dashboard to manage products, orders, offers, and media. Implemented image uploads using Multer and Cloudinary.`,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    },
];

export const PROJECTS = [
    {
        title: "Lobuy - Full-Stack E-commerce Website",
        description:
            "Developed a full-featured e-commerce platform supporting product browsing, cart management, and secure checkout. Implemented OTP/email-based authentication and authorization. Integrated Razorpay payment gateway for secure online transactions. Built an admin dashboard to manage products, orders, offers, and media. Implemented image uploads using Multer and Cloudinary.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary", "Multer"],
        link: "https://lobuy.in",
        github: "https://github.com/suhair20/lobuy",
    },
    {
        title: "Auto - Ride-Hailing Application",
        description:
            "Built a scalable ride-hailing platform enabling users to book autos in real time. Integrated Mapbox for live driver location tracking and location search. Implemented real-time ride updates and chat using Socket.io. Added Razorpay payment integration for seamless ride payments. Designed the backend using Clean Architecture.",
        technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Bootstrap", "Razorpay", "AWS", "Socket.io"],
        link: "https://auto-bay.vercel.app",
        github: "https://github.com/suhair20/Auto",
    },
    {
        title: "Aranoz – E-commerce Website",
        description:
            "Developed a comprehensive shopping and booking e-commerce system. Implemented OTP-based authentication using Node.js and Nodemailer. Built shopping cart, order processing, wallet, referral system, coupons module, and admin dashboard. Handled secure file uploads using Multer.",
        technologies: ["React.js", "Node.js", "MongoDB", "Redis", "Mapbox", "Socket.io", "Razorpay"],
        link: "https://aranoz-two.vercel.app",
        github: "https://github.com/suhair20/Aranoz",
    },
    {
        title: "Netflix Clone",
        description:
            "Built a Netflix-style streaming UI using React, Vite, and Firebase. Implemented user authentication and protected routes using Firebase Auth. Developed dynamic content rendering with reusable React components. Optimized UI performance and responsiveness.",
        technologies: ["React", "Vite", "Firebase", "Firebase Auth"],
        link: "https://react-netflix-ymxc.vercel.app",
        github: "https://github.com/suhair20/ReactNetflix",
    },
];

export const CONTACT = {
    address: "UAE",
    phoneNo: "+971 58 252 9761",
    email: "moidheensuhair@gmail.com",
};
