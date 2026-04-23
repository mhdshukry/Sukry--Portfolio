import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      duration: 0.8,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-14 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -35, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/15 rounded-full blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/15 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.06, 1] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink/10 rounded-full blur-[75px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={item} className="mb-4">
              <span className="font-mono text-sm text-secondary tracking-widest uppercase">
                Full Stack Developer & DevOps Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-gradient-violet font-bold leading-[1.1]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Mohamed
              <br />
              Sukry
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Building the future of the web, one pixel and one packet at a
              time. Specializing in high-performance React applications and
              scalable Node.js backends.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              <a
                href="#contact"
                className="shimmer-btn glass-card px-6 py-3 rounded-lg text-sm font-medium text-foreground hover:glow-violet transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="shimmer-btn glass-card px-6 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-muted-foreground"
            >
              <a
                href="https://github.com/mhdshukry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors hover:scale-110 transform"
              >
                <Github size={22} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:mhdshukry110@gmail.com"
                className="hover:text-foreground transition-colors hover:scale-110 transform"
              >
                <Mail size={22} strokeWidth={1.5} />
              </a>
              <span className="flex items-center gap-1 text-sm font-mono">
                <MapPin size={16} strokeWidth={1.5} />
                Kalpitiya, Sri Lanka
              </span>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            variants={item}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Glow Ring */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-r from-violet/40 via-cyan/40 to-pink/40 rounded-3xl blur-2xl"
              />

              {/* Secondary Glow */}
              <div className="absolute -inset-8 bg-gradient-conic from-violet via-cyan to-violet rounded-3xl opacity-20 blur-xl" />

              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Rotating Border Effect */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet via-cyan to-pink opacity-60" />

                  {/* Glass Card with Image */}
                  <div className="absolute inset-0 rounded-3xl glass-card overflow-hidden border-2 border-white/10">
                    <img
                      src={profileImage}
                      alt="Mohamed Sukry - Full Stack Developer"
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                      <span className="text-sm font-mono text-foreground">
                        Available for Work
                      </span>
                    </div>
                  </motion.div>

                  {/* Experience Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl border border-white/10"
                  >
                    <span className="text-2xl font-bold text-gradient-violet">
                      2+
                    </span>
                    <span className="block text-xs text-muted-foreground font-mono">
                      Years Exp.
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={item}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown
            size={24}
            strokeWidth={1.5}
            className="text-muted-foreground"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
