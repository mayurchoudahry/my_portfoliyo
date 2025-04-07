import React from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import AnimatedVariableText from './AnimatedVariableText';
// Define TypeScript interfaces
interface TechTagProps {
  name: string;
}

interface WebsiteButtonProps {
  url: string;
  className?: string;
}

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  url: string;
  videoSrc?: string;
  technologies: string[];
}

interface ProjectData {
  title: string;
  year: string;
  description: string;
  url: string;
  videoSrc?: string;
  technologies: string[];
}

// Reusable Tag Component
const TechTag: React.FC<TechTagProps> = ({ name }) => (
  <span className="inline-flex items-center rounded-md font-semibold transition-colors bg-black/10 text-black lg:hover:bg-black/20 dark:bg-white/10 dark:text-white lg:dark:hover:bg-white/5 px-2.5 py-0.5 text-[0.8rem]">
    {name}
  </span>
);

// Reusable Website Button Component
const WebsiteButton: React.FC<WebsiteButtonProps> = ({ url, className = "" }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white hover:bg-black/70 dark:bg-white dark:text-black dark:hover:bg-white/80 px-3 py-1 text-sm font-medium transition-colors duration-300 ${className}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
    <span>Website</span>
  </a>

);

// Reusable Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  description,
  url,
  videoSrc,
  technologies
}) => (
  <div className="group relative border border-neutral-300 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900 transition-colors duration-300">
    <div className="relative h-54 w-full overflow-hidden">
      {videoSrc ? (
        <video
          className="w-full h-full object-cover scale-105 group-hover:scale-108 transition-transform duration-300"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="flex items-center justify-center h-full bg-neutral-100 dark:bg-neutral-800">
          <p className="text-neutral-500 dark:text-neutral-400">Preview not available</p>
        </div>
      )}
    </div>

    <CardSpotlight className="p-6 border-none rounded-none">
      <div className="flex flex-col items-start">
        <h3 className="text-2xl font-bold z-20 -mt-2 text-black dark:text-white">{title}</h3>
        <span className="text-neutral-600 dark:text-neutral-400 z-20 mb-3">{year}</span>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4 z-20 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 z-20">
          {technologies.map((tech: string, index: number) => (
            <TechTag key={index} name={tech} />
          ))}
        </div>

        <WebsiteButton url={url} className="z-20" />
      </div>
    </CardSpotlight>
  </div>
);

const Projects: React.FC = () => {
  // Project data
  const projects: ProjectData[] = [
    {
      title: "Skyville Udaipur",
      year: "2024",
      description: "A premium real estate website built for a luxury residential project in Udaipur. The site emphasizes smooth animations, responsive design, and a modern user interface to attract high-end buyers.",
      url: "https://www.skyvilleudaipur.com/",
      videoSrc: "https://res.cloudinary.com/dg0kso6zc/video/upload/v1744045941/project1_wxgkml.mp4",
      technologies: ["React.js", "Tailwind CSS",]
    },
    {
      title: "Golden Beam Pockets",
      year: "2024",
      description: "A conversion-focused landing page optimized for SEO and performance. Currently in the process of migration to Next.js to leverage Server-Side Rendering (SSR) and Static Site Generation (SSG).",
      url: "https://goldenbeampockets.com/",
      videoSrc: "https://res.cloudinary.com/dg0kso6zc/video/upload/v1744045968/project2_sk9kry.mp4",
      technologies: ["Next.js", "Tailwind CSS", "SEO Optimization",]
    },
    {
      title: "Sophia Public School",
      year: "2025",
      description: "A comprehensive school website that showcases academic programs, facilities, and student achievements. Built with a focus on performance, accessibility, and user-friendly navigation.",
      url: "https://sophia-public-school.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dg0kso6zc/video/upload/v1744045888/project3_pd7v6y.mp4",
      technologies: ["React.js", "Vite", "Tailwind CSS"]
    },
    {
      title: "Evergreen Jungle Safari",
      year: "2025",
      description: "An engaging tourism website offering jungle safari experiences. Features include dynamic booking forms, photo galleries, interactive sections, and mobile-first design.",
      url: "https://evergreen-jungle-safari-website-7pim.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dg0kso6zc/video/upload/v1744045943/project4_z8sgf5.mp4",
      technologies: ["Next.js", "React.js", "Tailwind CSS"]
    }

  ];

  return (
    <section className="py-10 transition-colors duration-300" id="projects">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm transition-colors duration-300 ">My Projects</div>

        <div className="mb-2">
          <AnimatedVariableText text="Stuff I’ve built ⚒️" className="font-bold sm:font-normal text-4xl sm:text-5xl" />
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto transition-colors duration-300">
          I&#39;ve worked on a variety of projects, from simple websites to complex web applications.
          <br />
          Here are a few of my favorites.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            year={project.year}
            description={project.description}
            url={project.url}
            videoSrc={project.videoSrc}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;