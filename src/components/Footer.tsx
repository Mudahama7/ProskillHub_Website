import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-primary border-t border-gold/10 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ProSkill Hub" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-display text-lg font-bold text-primary-foreground">
            ProSkill <span className="text-gradient-gold">HUB</span>
          </span>
        </div>
        <p className="text-primary-foreground/50 text-sm text-center">
          © {new Date().getFullYear()} ProSkill Hub. {t("Tous droits réservés.", "All rights reserved.")} Goma, RDC.
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          {[
            { href: "#services", label: t("Services", "Services") },
            { href: "#about", label: t("À propos", "About") },
            { href: "#realisations", label: t("Réalisations", "Achievements") },
            { href: "#politiques", label: t("Politiques", "Policies") },
            { href: "#contact", label: t("Contact", "Contact") },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/50 hover:text-secondary text-sm transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
