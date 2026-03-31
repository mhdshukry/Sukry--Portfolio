import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    title: "Rail Mate Lanka",
    desc: "Train reservation system for checking schedules and booking tickets online.",
    tech: ["React", "Node.js", "MySQL"],
    color: "glow-violet",
    span: "lg:col-span-8",
  },
  {
    title: "Apple Care+",
    desc: "Apple product e-commerce platform with modern shopping experience.",
    tech: ["React", "PHP", "CSS"],
    color: "glow-cyan",
    span: "lg:col-span-4",
  },
  {
    title: "DriveXpert",
    desc: "Vehicle booking platform for browsing cars and making reservations.",
    tech: ["JavaScript", "Node.js", "MySQL"],
    color: "glow-pink",
    span: "lg:col-span-4",
  },
  {
    title: "Job Portal",
    desc: "Employment platform connecting employers with job seekers.",
    tech: ["React", "PHP", "MySQL"],
    color: "glow-violet",
    span: "lg:col-span-8",
  },
  {
    title: "NewsLine",
    desc: "University news management system for campus publications.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "glow-cyan",
    span: "lg:col-span-6",
  },
  {
    title: "E-Foody",
    desc: "Online food ordering system with menu browsing and order management.",
    tech: ["HTML", "CSS", "PHP"],
    color: "glow-pink",
    span: "lg:col-span-6",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, rotateY: 2 }}
    className={`glass-card rounded-2xl p-6 md:p-8 ${project.span} group cursor-pointer transition-all duration-500 hover:border-primary/30`}
    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
  >
    <div className="flex items-start justify-between mb-4">
      <Layers size={24} strokeWidth={1.5} className="text-primary" />
      <ExternalLink size={16} strokeWidth={1.5} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span key={t} className="font-mono text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
