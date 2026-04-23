import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Container,
  Database,
  Feather,
  Figma,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2, color: "text-secondary" },
  { name: "Node.js", icon: Server, color: "text-lime" },
  { name: "TypeScript", icon: FileCode, color: "text-secondary" },
  { name: "JavaScript", icon: Terminal, color: "text-lime" },
  { name: "Tailwind CSS", icon: Palette, color: "text-secondary" },
  { name: "HTML5", icon: Globe, color: "text-accent" },
  { name: "CSS3", icon: Layers, color: "text-primary" },
  { name: "PHP", icon: Code2, color: "text-primary" },
  { name: "Python", icon: Terminal, color: "text-cyan" },
  { name: "MongoDB", icon: Database, color: "text-lime" },
  { name: "Docker", icon: Container, color: "text-cyan" },
  { name: "Flutter", icon: Feather, color: "text-accent" },
  { name: "Dart", icon: Zap, color: "text-violet" },
  { name: "AI", icon: Bot, color: "text-pink" },
  { name: "Git", icon: GitBranch, color: "text-foreground" },
  { name: "GitHub", icon: GitBranch, color: "text-foreground" },
  { name: "VS Code", icon: Terminal, color: "text-secondary" },
  { name: "UI/UX", icon: Figma, color: "text-accent" },
  { name: "MySQL", icon: Database, color: "text-secondary" },
  { name: "Cloud", icon: Cloud, color: "text-cyan" },
];

const SkillBadge = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: typeof Code2;
  color: string;
}) => (
  <div className="glass-card group mx-2 flex shrink-0 items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:glow-violet">
    <Icon
      size={18}
      strokeWidth={1.5}
      className={`${color} transition-transform group-hover:scale-110`}
    />
    <span className="whitespace-nowrap text-sm font-medium text-foreground">{name}</span>
  </div>
);

const SkillsMarquee = () => {
  const looped = [...skills, ...skills];

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 px-6 text-center"
      >
        <span className="font-mono text-xs tracking-widest text-secondary uppercase">
          Tech Stack
        </span>
        <h2 className="text-gradient-violet mt-2 text-3xl font-bold md:text-4xl">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="marquee-row mb-4">
        <div className="marquee-track">
          {looped.map((skill, i) => (
            <SkillBadge key={`l-${i}`} {...skill} />
          ))}
        </div>
      </div>

      <div className="marquee-row">
        <div className="marquee-track marquee-track-reverse">
          {[...looped].reverse().map((skill, i) => (
            <SkillBadge key={`r-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
