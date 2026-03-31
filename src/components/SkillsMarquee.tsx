import { motion } from "framer-motion";
import {
  Code2,
  Database,
  FileCode,
  Figma,
  GitBranch,
  Globe,
  Layers,
  Server,
  Terminal,
  Palette,
  Cloud,
  Feather,
  Zap,
  Bot,
  Container,
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
  <div className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl mx-2 shrink-0 hover:glow-violet transition-all duration-300 group">
    <Icon
      size={18}
      strokeWidth={1.5}
      className={`${color} group-hover:scale-110 transition-transform`}
    />
    <span className="text-sm font-medium text-foreground whitespace-nowrap">
      {name}
    </span>
  </div>
);

const SkillsMarquee = () => {
  // Duplicate once for a seamless -50% track translation.
  const looped = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <span className="font-mono text-xs text-secondary tracking-widest uppercase">
          Tech Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-violet">
          Skills & Technologies
        </h2>
      </motion.div>

      {/* Row 1 - Left */}
      <div className="marquee-row mb-4">
        <div className="marquee-track">
          {looped.map((skill, i) => (
            <SkillBadge key={`l-${i}`} {...skill} />
          ))}
        </div>
      </div>

      {/* Row 2 - Right */}
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
