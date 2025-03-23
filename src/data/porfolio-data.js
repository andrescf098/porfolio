import imageBlog from "../../public/blog.jpg";
import imageParking from "../../public/Parking.png";
import imageShopi from "../../public/Shopi.png";
import imageSocialNetwork from "../../public/SocialNetwork.png";
import imageBoard from "../../public/BoardIdea.png";

export const elements = [
    {
      title: "Parking lot manager",
      description:
        "App to manage the entry and exit of vehicles from a parking lot",
      img: imageParking,
      urlGithub: "",
      url: "https://admin-parqueadero-frontend.vercel.app/home",
      technologies: ["React", "Node.js", "Express.js", "MySQL"],
    },
    {
      title: "Personal blog",
      description:
        "Create a user, modify your profile and share your experiences or general knowledge",
      img: imageBlog,
      urlGithub: "https://github.com/andrescf098/project-blog",
      url: "https://blog-frontend-self-kappa.vercel.app",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "SocialReact - Social Network",
      description:
        "A Social Network. Create a user, follow different people, share photos or statuses and comment on those you follow",
      img: imageSocialNetwork,
      urlGithub: "https://github.com/andrescf098/project-socialNetwork",
      url: "https://social-network-frontend-sepia.vercel.app/",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Passmanager - Password manager",
      description:
        "A password manager. Create a user, save your passwords and see them when you need them",
      img: imageShopi,
      urlGithub: "",
      url: "",
      technologies: ["React", "TailwindCSS", "Express.js", "MySQL", "Prisma"],
    },
    {
      title: "BoardIdea - Digital board collaborative",
      description:
        "You can create a board and share it with other people or work collaboratively to capture your ideas",
      img: imageBoard,
      urlGithub: "https://github.com/andrescf098/BoardIdea",
      url: "https://board-idea.vercel.app/",
      technologies: ["Nextjs", "TailwindCSS", "Clerk", "Convex"],
    },
  ]
