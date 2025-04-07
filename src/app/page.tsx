import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import ASCIIText from '@/ui/ASCIIText';
import image2 from "@/public/exp2.png";
import ExperienceSection from "@/components/Experience";
import Projects from "@/components/Projects";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import AnimatedVariableText from "@/components/AnimatedVariableText";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col space-y-7 min-h-screen max-w-4xl mx-auto px-6 md:px-10 py-8">

        {/* Hero Section */}
        <div className="flex flex-col ">
          <div className="relative w-full h-50 pb-4">

            <Image
              src="/banner.jpg"
              alt="Banner"
              fill
              priority
              className="object-cover rounded-xl z-0"
            />
            <ASCIIText
              text='VERSUS'
              enableWaves={true}
              asciiFontSize={4}
            />
          </div>
          <div className="flex flex-col -mt-25 items-start">
            <div className="rounded-full overflow-hidden border-4 ml-5 border-white dark:border-black z-10 w-[168px] h-[168px]">
              <Image
                src="/avatar.png"
                alt="Vipul"
                width={168}
                height={168}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="">
              <AnimatedVariableText text="Hi, I'm Vipul!" className="text-4xl sm:text-5xl text-left" />
              <AnimatedVariableText text="Nice to meet you" className="text-4xl sm:text-5xl text-left -mt-3" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="">
          <h2 className="text-2xl font-bold ">About</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            <strong>I build stuff that makes people go, “Whoa, that’s cool.”</strong> When I&#39;m not tweaking pixels or solving layout puzzles, you&#39;ll probably find me obsessing over random ideas or automating something that didn&#39;t need automation.
          </p>

        </section>

        {/* Work Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <section className="">
          <h2 className="text-2xl font-bold mb-4">Education</h2>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold">
              <Image src={image2} alt="Logo" width={60} height={60} className="rounded-full" />

            </div>

            <div>
              <h3 className="font-bold text-lg">Parul University</h3>
              <p className="text-neutral-600 dark:text-neutral-400">BTech in Computer Engineering</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">2021 - 2025</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Redux",
              "Vite",
              "Supabase",
              "Firebase",
              "n8n",
              "Zapier",
              "Git & GitHub",
              "Figma",
              "Framer Motion",
              "Lucide React",
              "Responsive Design",
              "UI/UX",
            ].map((skill) => (
              <div key={skill} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">{skill}</div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section className="pb-10 mb-12">
          <div className="relative z-10 max-w-3xl mx-auto text-center ">
            <div className="inline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm transition-colors duration-300 ">Contact</div>
            <div className="mb-8">
              <AnimatedVariableText text="Let's Create Something" className="text-4xl sm:text-5xl" />
              <AnimatedVariableText text="Cool Together" className="text-4xl sm:text-5xl -mt-3" />
            </div>
            <div className="flex items-center justify-center space-x-3">
              <a
                href="https://cal.com/vipul-soni-ulxygq/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Modal>
                  <ModalTrigger className="bg-black text-white dark:bg-white dark:text-black flex justify-center group/modal-btn cursor-pointer">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 font-medium">
                    Let&#39;s Talk
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      🚀
                    </div>
                  </ModalTrigger>
                </Modal>
              </a>
              <a
                href="mailto:vipul@example.com?subject=Let's%20Connect&body=Hey%20Vipul%2C%20I%20checked%20out%20your%20portfolio%20and..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Modal>
                  <ModalTrigger className="bg-black text-white dark:bg-white dark:text-black flex justify-center group/modal-btn cursor-pointer">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 font-medium">
                      Drop a Mail
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      💌
                    </div>
                  </ModalTrigger>
                </Modal>
              </a>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
