import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    year: "2022 – Present",
    school: "University of Ruhuna",
    degree: "Bachelor of ICT (BICT)",
    detail: "Faculty of Technology • CGPA: 3.19",
    icon: GraduationCap,
    accent: "text-primary",
  },
  {
    year: "2018 – 2020",
    school: "Shams Central College",
    degree: "Advanced Level – Technology",
    detail: "1A • 1B • 1C • Z-Score: 1.6176",
    icon: BookOpen,
    accent: "text-secondary",
  },
  {
    year: "2017",
    school: "AL-Hambra Vidyalaya",
    degree: "Ordinary Level Examination",
    detail: "2A • 4B • 2C • 1S",
    icon: BookOpen,
    accent: "text-accent",
  },
];

const certificates = [
  { year: "2025", title: "Java for Beginners", org: "Udemy" },
  { year: "2024", title: "Hackathon V1.0", org: "University of Ruhuna" },
  { year: "2023", title: "Python & Machine Learning", org: "Microsoft MLSA" },
  { year: "2023", title: "Python for Beginners", org: "CODL – Univ. of Moratuwa" },
];

const EducationSection = () => (
  <section id="education" className="relative py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-secondary tracking-widest uppercase">Background</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-cyan">Education & Certificates</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Education */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">Education</h3>
          {education.map((edu, i) => (
            <motion.div
              key={edu.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-5 hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted">
                  <edu.icon size={20} strokeWidth={1.5} className={edu.accent} />
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{edu.year}</span>
                  <h4 className="font-semibold text-foreground mt-0.5">{edu.school}</h4>
                  <p className="text-sm text-secondary mt-0.5">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">Certificates</h3>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-5 hover:glow-pink transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted">
                  <Award size={20} strokeWidth={1.5} className="text-accent" />
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
                  <h4 className="font-semibold text-foreground mt-0.5">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
