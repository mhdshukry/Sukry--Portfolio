import { motion } from "framer-motion";
import { Code2, Palette, Server, Smartphone } from "lucide-react";

const boxes = [
  { icon: Code2, title: "Frontend Dev", desc: "React, TypeScript, Tailwind CSS", color: "text-primary" },
  { icon: Server, title: "Backend Dev", desc: "Node.js, PHP, REST APIs", color: "text-secondary" },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, modern, user-first", color: "text-accent" },
  { icon: Smartphone, title: "Responsive", desc: "Mobile-first development", color: "text-lime" },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="font-mono text-xs text-accent tracking-widest uppercase">Who I Am</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-pink">Technical Profile</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A web designer and developer with over 2 years of experience creating modern, responsive, and scalable web solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {boxes.map((box, i) => (
          <motion.div
            key={box.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 text-center group"
          >
            <div className="mx-auto w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <box.icon size={22} strokeWidth={1.5} className={box.color} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{box.title}</h3>
            <p className="text-xs text-muted-foreground">{box.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
