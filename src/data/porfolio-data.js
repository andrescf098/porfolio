import imageBlog from "../../public/Blog.webp";
import imageParking from "../../public/Parking.webp";
import imagePass from "../../public/PassManager.webp";
import imageSocialNetwork from "../../public/SocialNetwork.webp";
import imageBoard from "../../public/BoardIdea.webp";

export const elements = [
  {
    title: "Parking lot manager",
    description:
      "App for managing vehicle entry and exit, available spaces, and fare control in a parking lot. The backend is built with Express.js and a MySQL relational database, while the frontend uses Vite - React.",
    img: imageParking,
    urlGithub: "",
    url: "https://admin-parqueadero-frontend.vercel.app/home",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
  },
  {
    title: "Personal blog",
    description:
      "Create a user, modify your profile and share your experiences or general knowledge. The backend is built with Express.js and a MongoDB not relational database, while the frontend uses React.",
    img: imageBlog,
    urlGithub: "https://github.com/andrescf098/project-blog",
    url: "https://blog-frontend-self-kappa.vercel.app",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "SocialReact - Social Network",
    description:
      "A Social Network. Create a user, follow different people, share photos or statuses and comment on those you follow. The backend is built with Express.js and a MongoDB not relational database, while the frontend uses React.",
    img: imageSocialNetwork,
    urlGithub: "https://github.com/andrescf098/project-socialNetwork",
    url: "https://social-network-frontend-sepia.vercel.app/",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Passmanager - Password manager",
    description:
      "A password manager. Create a user, save your passwords and see them when you need them. Built with Next.js for the frontend, styled with Tailwind CSS and ShadCN. The backend uses Express.js with MySQL, managed through Prisma.",
    img: imagePass,
    urlGithub: "https://github.com/andrescf098/password-manager",
    url: "",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Shadcn",
      "Express.js",
      "MySQL",
      "Prisma",
    ],
  },
  {
    title: "BoardIdea - Digital board collaborative",
    description:
      "You can create a board and share it with other people or work collaboratively to capture your ideas. Built with Next.js for the frontend, styled with Tailwind CSS. Authentication is handled by Clerk, and Convex powers the backend and database.",
    img: imageBoard,
    urlGithub: "https://github.com/andrescf098/BoardIdea",
    url: "https://board-idea.vercel.app/",
    technologies: ["Nextjs", "TailwindCSS", "Clerk", "Convex"],
  },
];
