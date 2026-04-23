import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  SiAnsible,
  SiC,
  SiCss,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTerraform,
} from "react-icons/si";
import {
  FaDatabase,
  FaDiagramProject,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa6";

type Skill = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
  color: string;
  bgColor?: string;
  chipTone?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML5", Icon: SiHtml5, color: "text-orange-400" },
      { name: "CSS3", Icon: SiCss, color: "text-sky-400", chipTone: "bg-sky-500/20 border-sky-400/30" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400", chipTone: "bg-yellow-400/20 border-yellow-300/35" },
      { name: "PHP", Icon: SiPhp, color: "text-indigo-400", chipTone: "bg-indigo-500/20 border-indigo-400/35" },
      { name: "Java", Icon: FaJava, color: "text-orange-500", chipTone: "bg-orange-500/20 border-orange-400/35" },
      { name: "C", Icon: SiC, color: "text-blue-500", chipTone: "bg-blue-500/20 border-blue-400/35" },
      { name: "Dart", Icon: SiDart, color: "text-sky-400", chipTone: "bg-cyan-500/20 border-cyan-400/35" },
      { name: "Python", Icon: SiPython, color: "text-blue-400", chipTone: "bg-blue-500/20 border-blue-400/35" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", Icon: SiHtml5, color: "text-orange-400", chipTone: "bg-orange-500/20 border-orange-400/35" },
      { name: "CSS3", Icon: SiCss, color: "text-sky-400", chipTone: "bg-sky-500/20 border-sky-400/35" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400", chipTone: "bg-yellow-400/20 border-yellow-300/35" },
      { name: "React.js", Icon: SiReact, color: "text-cyan-400", chipTone: "bg-cyan-500/20 border-cyan-400/35" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", Icon: SiPhp, color: "text-indigo-400", chipTone: "bg-indigo-500/20 border-indigo-400/35" },
      { name: "Laravel", Icon: SiLaravel, color: "text-red-500", chipTone: "bg-red-500/20 border-red-400/35" },
      { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500", chipTone: "bg-green-500/20 border-green-400/35" },
      { name: "Express.js", Icon: SiExpress, color: "text-stone-100", chipTone: "bg-slate-200/10 border-slate-300/25" },
      { name: "Java", Icon: FaJava, color: "text-orange-500", chipTone: "bg-orange-500/20 border-orange-400/35" },
      { name: "JavaFX", Icon: FaJava, color: "text-orange-500", chipTone: "bg-orange-500/20 border-orange-400/35" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "text-lime-500", chipTone: "bg-lime-500/20 border-lime-400/35" },
      { name: "REST API", Icon: FaDiagramProject, color: "text-blue-400", chipTone: "bg-cyan-500/20 border-cyan-400/35" },
      { name: "Python", Icon: SiPython, color: "text-blue-400", chipTone: "bg-blue-500/20 border-blue-400/35" },
      { name: "C", Icon: SiC, color: "text-blue-500", chipTone: "bg-blue-500/20 border-blue-400/35" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", Icon: SiFlutter, color: "text-sky-400", chipTone: "bg-cyan-500/20 border-cyan-400/35" },
      { name: "Dart", Icon: SiDart, color: "text-sky-400", chipTone: "bg-sky-500/20 border-sky-400/35" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", Icon: SiMysql, color: "text-sky-400", chipTone: "bg-sky-500/20 border-sky-400/35" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-lime-500", chipTone: "bg-lime-500/20 border-lime-400/35" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "text-cyan-400", chipTone: "bg-cyan-500/20 border-cyan-400/35" },
      { name: "Jenkins", Icon: SiJenkins, color: "text-rose-400", chipTone: "bg-rose-500/20 border-rose-400/35" },
      { name: "Ansible", Icon: SiAnsible, color: "text-red-500", chipTone: "bg-red-500/20 border-red-400/35" },
      { name: "Prometheus", Icon: SiPrometheus, color: "text-orange-500", chipTone: "bg-orange-500/20 border-orange-400/35" },
      { name: "Terraform", Icon: SiTerraform, color: "text-violet-400", chipTone: "bg-violet-500/20 border-violet-400/35" },
      { name: "Grafana", Icon: SiGrafana, color: "text-amber-500", chipTone: "bg-amber-500/20 border-amber-400/35" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", Icon: SiGit, color: "text-orange-400", chipTone: "bg-orange-500/20 border-orange-400/35" },
      { name: "GitHub", Icon: SiGithub, color: "text-slate-100", chipTone: "bg-slate-200/10 border-slate-300/25" },
      { name: "Postman", Icon: SiPostman, color: "text-orange-500", chipTone: "bg-orange-500/20 border-orange-400/35" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "Microsoft Azure", Icon: FaMicrosoft, color: "text-sky-400", chipTone: "bg-sky-500/20 border-sky-400/35" },
    ],
  },
];

const orbitSkills: Skill[] = [
  {
    name: "HTML5",
    Icon: SiHtml5,
    color: "text-orange-400",
    bgColor: "bg-orange-500/15",
  },
  {
    name: "CSS3",
    Icon: SiCss,
    color: "text-sky-400",
    bgColor: "bg-sky-500/15",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/15",
  },
  {
    name: "React.js",
    Icon: SiReact,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/15",
  },
  {
    name: "PHP",
    Icon: SiPhp,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/15",
  },
  {
    name: "Laravel",
    Icon: SiLaravel,
    color: "text-red-500",
    bgColor: "bg-red-500/15",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "text-sky-400",
    bgColor: "bg-sky-400/15",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "text-lime-500",
    bgColor: "bg-lime-400/15",
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    color: "text-stone-100",
    bgColor: "bg-slate-200/10",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "text-green-500",
    bgColor: "bg-green-400/15",
  },
  {
    name: "Java",
    Icon: FaJava,
    color: "text-orange-500",
    bgColor: "bg-amber-400/15",
  },
  {
    name: "JavaFX",
    Icon: FaJava,
    color: "text-orange-500",
    bgColor: "bg-orange-400/15",
  },
  { name: "C", Icon: SiC, color: "text-blue-500", bgColor: "bg-blue-400/15" },
  {
    name: "Dart",
    Icon: SiDart,
    color: "text-sky-400",
    bgColor: "bg-sky-400/15",
  },
  {
    name: "Python",
    Icon: SiPython,
    color: "text-blue-400",
    bgColor: "bg-emerald-400/15",
  },
  {
    name: "Flutter",
    Icon: SiFlutter,
    color: "text-sky-400",
    bgColor: "bg-sky-400/15",
  },
  {
    name: "Spring Boot",
    Icon: SiSpringboot,
    color: "text-lime-500",
    bgColor: "bg-lime-400/15",
  },
  {
    name: "REST API",
    Icon: FaDiagramProject,
    color: "text-blue-400",
    bgColor: "bg-emerald-400/15",
  },
  {
    name: "Docker",
    Icon: SiDocker,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/15",
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "text-orange-400",
    bgColor: "bg-orange-500/15",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "text-slate-100",
    bgColor: "bg-slate-100/20",
  },
  {
    name: "Jenkins",
    Icon: SiJenkins,
    color: "text-rose-400",
    bgColor: "bg-rose-400/15",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    color: "text-orange-500",
    bgColor: "bg-orange-400/15",
  },
  {
    name: "Ansible",
    Icon: SiAnsible,
    color: "text-red-500",
    bgColor: "bg-red-500/15",
  },
  {
    name: "Prometheus",
    Icon: SiPrometheus,
    color: "text-orange-500",
    bgColor: "bg-orange-400/15",
  },
  {
    name: "Terraform",
    Icon: SiTerraform,
    color: "text-violet-400",
    bgColor: "bg-violet-400/15",
  },
  {
    name: "Grafana",
    Icon: SiGrafana,
    color: "text-amber-500",
    bgColor: "bg-amber-400/15",
  },
  {
    name: "Microsoft Azure",
    Icon: FaMicrosoft,
    color: "text-sky-400",
    bgColor: "bg-sky-400/15",
  },
];

const orbitPositions = [
  "orbit-pos-0",
  "orbit-pos-1",
  "orbit-pos-2",
  "orbit-pos-3",
  "orbit-pos-4",
  "orbit-pos-5",
  "orbit-pos-6",
  "orbit-pos-7",
  "orbit-pos-8",
  "orbit-pos-9",
  "orbit-pos-10",
  "orbit-pos-11",
  "orbit-pos-12",
  "orbit-pos-13",
];

const orbitSkillsOuter = orbitSkills.slice(0, 14);
const orbitSkillsInner = orbitSkills.slice(14);

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 px-6 text-center"
      >
        <span className="text-xs font-semibold tracking-[0.4em] text-red-400 uppercase">
          My Skills
        </span>
        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
          Skills
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="h-full glass-card rounded-3xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <h3 className="text-lg font-semibold">Skills by category</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-red-400 uppercase">
                  <span className="h-1 w-6 rounded-full bg-red-500" />
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`skill-pill group flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 ${
                        skill.chipTone ?? "border-white/10 bg-black/30"
                      }`}
                    >
                      <skill.Icon className={`skill-pill-icon text-sm ${skill.color}`} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full items-center justify-center rounded-3xl p-6 md:p-8">
          <div className="flex w-full flex-col items-center">
            <div className="relative aspect-square w-full max-w-[420px]">
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black/40 text-center">
                <span className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase">
                  Core Stack
                </span>
                <span className="mt-2 text-sm text-foreground/80">
                  Full-stack focus
                </span>
              </div>
              <div className="absolute inset-0 orbit-rotate orbit-rotate--outer">
                {orbitSkillsOuter.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`orbit-item ${orbitPositions[index % orbitPositions.length]} absolute left-1/2 top-1/2`}
                  >
                    <div
                      className={`orbit-logo-chip orbit-item-inner flex h-11 w-11 items-center justify-center rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.45)] ${
                        skill.bgColor ?? "bg-white/90"
                      }`}
                    >
                      <skill.Icon className={`text-lg ${skill.color}`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 orbit-rotate orbit-rotate--inner">
                {orbitSkillsInner.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`orbit-item ${orbitPositions[index % orbitPositions.length]} absolute left-1/2 top-1/2`}
                  >
                    <div
                      className={`orbit-logo-chip orbit-item-inner flex h-10 w-10 items-center justify-center rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.45)] ${
                        skill.bgColor ?? "bg-white/90"
                      }`}
                    >
                      <skill.Icon className={`text-base ${skill.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-xs font-semibold tracking-[0.3em] text-foreground/40 uppercase">
              Tech Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
