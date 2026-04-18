import { useLang } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: t("Acceuil", "Home") },
    { href: "#services", label: t("Services", "Services") },
    { href: "#about", label: t("À propos", "About") },
    { href: "#stats", label: t("Chiffres", "Stats") },
    { href: "#realisations", label: t("Réalisations", "Achievements") },
    { href: "#politiques", label: t("Politiques", "Policies") },
    { href: "#contact", label: t("Contact", "Contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="ProSkill Hub" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-primary-foreground">
            ProSkill <span className="text-gradient-gold">HUB</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-gold-light transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href="#contact"
            className="gradient-gold text-primary font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("Réserver une consultation", "Book a Consultation")}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleLang} className="text-secondary">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="gradient-gold text-primary font-semibold text-sm px-5 py-2.5 rounded-lg text-center"
              >
                {t("Réserver une consultation", "Book a Consultation")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
