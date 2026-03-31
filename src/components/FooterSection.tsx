import { Github, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="relative py-12 px-6 border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        <span>© 2025 Mohamed Sukry.</span>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <a href="https://github.com/mhdshukry" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          <Github size={18} strokeWidth={1.5} />
        </a>
        <a href="mailto:mhdshukry110@gmail.com" className="hover:text-foreground transition-colors">
          <Mail size={18} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
