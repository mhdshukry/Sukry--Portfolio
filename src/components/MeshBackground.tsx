import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Server,
  Terminal,
  Palette,
  Braces,
} from "lucide-react";

const floatingIcons = [
  {
    Icon: Code2,
    x: "8%",
    y: "15%",
    size: 28,
    duration: 18,
    delay: 0,
    color: "hsl(var(--accent-cyan))",
  },
  {
    Icon: Server,
    x: "85%",
    y: "12%",
    size: 24,
    duration: 22,
    delay: 1,
    color: "hsl(var(--accent-lime))",
  },
  {
    Icon: FileCode,
    x: "75%",
    y: "55%",
    size: 30,
    duration: 20,
    delay: 2,
    color: "hsl(var(--accent-violet))",
  },
  {
    Icon: Terminal,
    x: "15%",
    y: "70%",
    size: 26,
    duration: 24,
    delay: 0.5,
    color: "hsl(var(--accent-pink))",
  },
  {
    Icon: Globe,
    x: "50%",
    y: "8%",
    size: 22,
    duration: 19,
    delay: 3,
    color: "hsl(var(--accent-cyan))",
  },
  {
    Icon: Database,
    x: "90%",
    y: "75%",
    size: 24,
    duration: 21,
    delay: 1.5,
    color: "hsl(var(--accent-violet))",
  },
  {
    Icon: Layers,
    x: "30%",
    y: "85%",
    size: 20,
    duration: 23,
    delay: 2.5,
    color: "hsl(var(--accent-lime))",
  },
  {
    Icon: GitBranch,
    x: "65%",
    y: "30%",
    size: 22,
    duration: 17,
    delay: 4,
    color: "hsl(var(--accent-pink))",
  },
  {
    Icon: Palette,
    x: "40%",
    y: "45%",
    size: 18,
    duration: 25,
    delay: 1,
    color: "hsl(var(--accent-cyan))",
  },
  {
    Icon: Braces,
    x: "20%",
    y: "40%",
    size: 20,
    duration: 20,
    delay: 3.5,
    color: "hsl(var(--accent-violet))",
  },
];

const MeshBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Violet blob */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, hsl(263 100% 70%) 0%, transparent 70%)",
          filter: "blur(72px)",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 120, -60, 80, 0],
                y: [0, -90, 60, -30, 0],
              }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Cyan blob */}
      <motion.div
        className="absolute w-[460px] h-[460px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(190 100% 50%) 0%, transparent 70%)",
          filter: "blur(72px)",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [-70, 95, 0, -120, -70],
                y: [40, -70, 120, 0, 40],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        initial={{ top: "40%", right: "10%" }}
      />

      {/* Pink blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, hsl(320 100% 60%) 0%, transparent 70%)",
          filter: "blur(72px)",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [65, -90, 35, -60, 65],
                y: [-30, 65, -90, 35, -30],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        initial={{ bottom: "10%", left: "30%" }}
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, x, y, size, duration, delay, color }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: x,
            top: y,
            willChange: "transform, opacity",
            transform: "translate3d(0,0,0)",
          }}
          initial={{ opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.08 }
              : {
                  opacity: [0.05, 0.12, 0.05],
                  y: [0, -18, 0],
                  x: [0, 8, 0],
                }
          }
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Icon size={size} strokeWidth={1} style={{ color }} />
        </motion.div>
      ))}
    </div>
  );
};

export default memo(MeshBackground);
