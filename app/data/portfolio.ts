export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  icon: string; // react-icons bi name
}

export const projects: Project[] = [
  {
    id: "gazetteer",
    title: "Gazetteer",
    description:
      "A responsive leaflet map application that provides the user with country based facts, weather, currency conversion, news, and wikipedia articles",
    image: "/images/portfolio/gazatteer.jpg",
    imageAlt: "Gazetteer Project",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "jQuery"],
    demoUrl: "https://elliotcann.com/gazetteer/",
    icon: "BsPinMap",
  },
  {
    id: "company-directory",
    title: "Company Directory",
    description:
      "A full stack application that organises company employee, department, and location data using a database. Includes actions to search, add, edit and delete employees through an intuitive UI",
    image: "/images/portfolio/company-directory.jpg",
    imageAlt: "Company Directory Project",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL", "Bootstrap", "jQuery"],
    demoUrl: "https://elliotcann.com/company-directory/",
    icon: "BsDatabase",
  },
];
