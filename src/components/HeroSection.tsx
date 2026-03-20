import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Feather, GraduationCap, BarChart3, Code2 } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroTeam} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 gradient-navy opacity-80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/3" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-sm font-medium">Goma, RDC</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {t(
              "Rédiger l'avenir. Former l'excellence. Analyser pour décider.",
              "Write the future. Train for excellence. Analyze to decide."
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          >
            {t(
              "Services professionnels en Rédaction, Formation, Science des Données et Solutions Numériques.",
              "Professional services in Writing, Training, Data Science, and Digital Solutions."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="gradient-gold text-primary font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {t("Réserver une consultation", "Book a Consultation")}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border border-primary-foreground/20 text-primary-foreground font-medium px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/5 transition-colors text-center"
            >
              {t("Découvrir nos services", "Explore our services")}
            </a>
          </motion.div>

          {/* Pillars preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Feather, label: t("Rédaction", "Writing") },
              { icon: GraduationCap, label: t("Formation", "Training") },
              { icon: BarChart3, label: t("Data Science", "Data Science") },
              { icon: Code2, label: t("Solutions Numériques", "Digital Solutions") },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary/30 transition-colors"
              >
                <item.icon className="w-6 h-6 text-secondary" />
                <span className="text-primary-foreground/80 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
