import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sukry Portfolio",
    subtitle: "Front-End",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/Sukry--Portfolio",
  },
  {
    title: "Drug Supply System",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/drug-supply-system",
  },
  {
    title: "MrCherryComputer",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/MrCherryComputer",
  },
  {
    title: "Apple Care",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/Apple_Care",
  },
  {
    title: "DriveXpert",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/DriveXpert",
  },
  {
    title: "Job Portal",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/Job-portal",
  },
  {
    title: "Foody",
    subtitle: "Front-End",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/Foody",
  },
  {
    title: "NewsLine",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/UOR---NEWSLINE",
  },
  {
    title: "Health App",
    subtitle: "Mobile App",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/Health-App",
  },
  {
    title: "Safe Ride Companion",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/safe-ride-companion",
  },
  {
    title: "PrimeSoft Solution",
    subtitle: "Full-Stack Web",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/PrimeSoft-Solution",
  },
  {
    title: "Trail Mate Lanka",
    subtitle: "Front-End",
    image: "/placeholder.svg",
    github: "https://github.com/mhdshukry/Trail-Mate-Lanka-Website",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => (
  <motion.a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    whileHover={{ y: -6 }}
    className="glass-card group relative block overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
  >
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
        <ExternalLink size={16} strokeWidth={1.5} />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <div className="glass-card rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
        <h3 className="text-lg font-semibold text-foreground md:text-xl">{project.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.subtitle}
        </p>
      </div>
    </div>
  </motion.a>
);

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-accent tracking-widest uppercase">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-pink">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
