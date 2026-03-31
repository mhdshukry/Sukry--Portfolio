import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Let's Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-violet">Get in Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-violet transition-all duration-300">
              <Mail size={20} strokeWidth={1.5} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono">Email</p>
                <p className="text-sm text-foreground">mhdshukry110@gmail.com</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-cyan transition-all duration-300">
              <Phone size={20} strokeWidth={1.5} className="text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground font-mono">Phone</p>
                <p className="text-sm text-foreground">+94 756546038 / +94 786543033</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-pink transition-all duration-300">
              <MapPin size={20} strokeWidth={1.5} className="text-accent" />
              <div>
                <p className="text-xs text-muted-foreground font-mono">Location</p>
                <p className="text-sm text-foreground">Kalpitiya, Sri Lanka</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow-violet transition-all duration-300">
              <Github size={20} strokeWidth={1.5} className="text-foreground" />
              <div>
                <p className="text-xs text-muted-foreground font-mono">GitHub</p>
                <a href="https://github.com/mhdshukry" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  github.com/mhdshukry
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1 block">Name</label>
              <input
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1 block">Email</label>
              <input
                required
                type="email"
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full shimmer-btn glass-card py-3 rounded-lg text-sm font-medium text-foreground flex items-center justify-center gap-2 hover:glow-violet transition-all duration-300"
            >
              {sent ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-lime"
                >
                  ✓ Message Sent!
                </motion.span>
              ) : (
                <>
                  <Send size={16} strokeWidth={1.5} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
