// Portfolio Data - Easy to modify template

// Import images
import profileImg from '/profile.png';
import project1Img from '/project1.jpg';
import project2Img from '/project2.jpg';
import project3Img from '/project3.png';
import project4Img from '/project4.png';
import project5Img from '/project5.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  position: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailedDescription: string;
  features: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  email: string;
  phone?: string;
  location?: string;
  socialLinks: {
    github?: string;
    itchio?: string;
    facebook?: string;
    portfolio?: string;
  };
}

// Personal Information - Update this with your details
export const personalInfo: PersonalInfo = {
  name: "Ratchakit Sriprapai",
  title: "Game Developer",
  description: "Currently pursuing a BACHELOR OF COMPUTER SCIENCE at SUAN SUNANDHA RAJABHAT UNIVERSITY with a strong passion for game development. Skilled in designing and developing both 2D and 3D video games using the Unity engine. Experienced in implementing gameplay mechanics and UI systems.",
  profileImage: profileImg, // Replace with your actual photo path
  email: "ratchakitsriprapai@gmail.com",
  phone: "0639767333",
  location: "Bangkok, Thailand",
  socialLinks: {
    github: "https://github.com/LOVERnoey",
    itchio: "https://lovernoey.itch.io/",
    facebook: "https://www.facebook.com/ratchakit.sriprapai/",
    portfolio: "https://yourportfolio.com"
  }
};

// Projects Data - Add your projects here
export const projects: Project[] = [
  {
    id: 1,
    title: "CRAZY DAD LORE 3D (Thailand Summer Jam 2025)",
    description: "3D driving game",
    position: "Lead Developer",
    image: project2Img,
    technologies: ["Unity", "C#", "Rider","Figma"],
    githubUrl: "https://github.com/MrWinRock/summer-jam-2025",
    liveUrl: "https://marguro.itch.io/crazy-dad-lore",
    detailedDescription: "This is a 3D driving game where the player controls a car on a mysterious road trip, managing speed and avoiding obstacles. Responsible for analyzing, designing, and implementing the core game logic, including the in-game animations and cutscenes within the Unity engine. Collaborated effectively with the level designer to ensure a smooth and engaging gameplay experience.",
    features: [
      "Realistic car physics using Wheel Colliders",
      "Acceleration, reversing, and steering controls",
      "Nitro boost capability (visual effects included)",
      "Basic collision handling",
      "Rear view camera functionality"
    ]
  },
  {
    id: 2,
    title: "Horror Company (Thailand Horror Jam 2024)",
    description: "2D point-and-click game",
    position: "Lead Developer",
    image: project1Img,
    technologies: ["Unity", "C#", "Rider","Figma"],
    githubUrl: "https://github.com/MrWinRock/project-H-jam",
    liveUrl: "https://marguro.itch.io/horror-company",
    detailedDescription: "This is a 2D point-and-click game inspired by  That’s Not My Neighbor. Responsible for analyzing, designing, and implementing the core game logic. You're a corporate recruiter for a haunted company. To keep the business running, you need to hire as many ghosts as possible. But watch out for those fake spiritual mediums - they're not to be trusted. With love from Horror Company.",
    features: [
      "Weird and spooky atmosphere",
      "Hand-drawn art style",
      "Original soundtrack"
    ]
  },
  {
    id: 3,
    title: "WAVE (Deversetus Studio)",
    description: "2D platformer Thai-traditional theme game project from Deversetus Studio.",
    position: "UX/UI & Programmer",
    image: project3Img, // Add your image to public folder
    technologies: ["Unity", "C#", "Rider","Figma", "Notion"],
    githubUrl: "https://github.com/Celesca/wave",
    detailedDescription: "This is a 2D platformer Thai-traditional theme game project from Deversetus Studio. Responsible for UX / UI Implementation, Enemy AI logic, and Boss AI logic.",
    features: [
        "Thai traditional theme",
        "Challenging platforming mechanics",
        "Boss battles with unique mechanics"
    ]
  },
  {
    id: 4,
    title: "GEOgame",
    description: "Platform designed to support gamers by allowing users to create and share game-related content.",
    position: "Web-Full Stack Developer",
    image: project4Img, // Add your image to public folder
    technologies: ["HTML5" ,"PHP", "MySQL", "XAMPP", "Figma"],
    githubUrl: "https://github.com/LOVERnoey/GEOgame", // Optional
    detailedDescription: "This website is a platform designed to support gamers by allowing users to create and share game-related content. It provides a centralized space where both new and experienced players can access game guides, tips, and recommendations to enhance their gameplay experience. I was responsible for the entire development lifecycle of GEOGame a game guide and community management platform. I handled everything from system analysis and database design to front-end/back-end coding, UI/UX design, and testing. The system enables users to build game communities and contribute game guides, while administrators have tools to manage users and content. The platform was fully tested and met all functional requirements.",
    features: [
        "User registration and login system",
        "Community management tools",
        "User-generated content moderation",
        "Admin dashboard for user and content management",
        "enables users to build game communities and contribute game guides",
        "User authentication and profile management"
    ]
  },
  {
    id: 5,
    title: "Game Guide",
    description: "Dynamic mobile application that helps users explore and discover video games across platforms (PC, Mobile, Console)",
    position: "Mobile App - Full Stack Developer",
    image: project5Img, // Add your image to public folder
    technologies: ["JavaScript", "PHP", "React Native", "Android Studio", "MySQL", "XAMPP", "Figma"],
    githubUrl: "https://github.com/LOVERnoey/CSD3201/tree/main/GameGuide", // Optional
    detailedDescription: "GameGuide is a dynamic mobile application that helps users explore and discover video games across platforms (PC, Mobile, Console) by providing game recommendations, user reviews, and community interaction. It aims to enhance the user experience for gamers by allowing them to search, comment, and save favorite games in real time. The application was successfully developed and tested, offering a dynamic and user-friendly experience for gamers. Admins can efficiently manage content, and users can interact with game data in real-time across devices.",
    features: [
        "Real-time comments",
        "User reviews",
        "Game recommendations",
        "Community interaction",
        "Admin dashboard for user and content management",
        "Real-time game data updates",
        "User authentication and profile management",
        "Favorite games list"
    ]
  }
];
