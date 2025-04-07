"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import image1 from "@/public/exp1.png";
import image2 from "@/public/exp2.png";

const experiences = [
    {
      id: 1,
      title: "Mannan Solutions",
      role: "Web Developer Intern",
      duration: "Dec 2024 - March 2025",
      image: image1,
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Developed and deployed responsive websites using React, Vite, Tailwind CSS, and JavaScript.</li>
          <li>Worked on the frontend design and development.</li>
          <li>Implemented UI/UX best practices to enhance user experience.</li>
          <li>Deployed websites and ensured performance optimization.</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Social Media Coordinator - Parul University",
      role: "Instagram Page Manager & Designer",
      duration: "Dec 2022 - Present",
      image: image2,
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Managed and created engaging content for social media platforms like Facebook and Instagram.</li>
          <li>Designed creative visuals using Adobe Photoshop, Canva, and Figma.</li>
          <li>Monitored social media performance and provided analytical reports.</li>
          <li>This role inspired my interest in UI/UX design, which later helped me in designing websites.</li>
        </ul>
      ),
    },
  ];
  

export default function ExperienceSection() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleDescription = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="" id="experience">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => {
          const isOpen = openIds.includes(exp.id);

          return (
            <div key={exp.id} className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={exp.image}
                  alt="Logo"
                  width={60}
                  height={60}
                />
              </div>

              <div
                className="flex items-start justify-between cursor-pointer group "
                onClick={() => toggleDescription(exp.id)}
              >
                <div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <motion.div
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                    >
                      <ChevronDown className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                    </motion.div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">{exp.role}</p>
                </div>

                <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                  {exp.duration}
                </p>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-2 text-neutral-700 dark:text-neutral-300">
                  {exp.description}
                </div>
              </motion.div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}
