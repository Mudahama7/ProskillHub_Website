import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, FileText, BarChart3, Code2, GraduationCap } from "lucide-react";
import realisationsImg from "@/assets/realisations.jpg";
import serviceWriting from "@/assets/service-writing.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceDigital from "@/assets/service-digital.jpg";

const RealisationsSection = () => {
  const { t } = useLang();

  const projects = [
    {
      image: serviceWriting,
      category: t("Rédaction", "Writing"),
      icon: FileText,
      title: t("Rapport annuel — ONG Internationale", "Annual Report — International NGO"),
      description: t(
        "Rédaction et mise en page d'un rapport annuel de 120 pages pour une ONG opérant dans la région des Grands Lacs.",
        "Writing and layout of a 120-page annual report for an NGO operating in the Great Lakes region."
      ),
    },
    {
      image: serviceData,
      category: t("Data Science", "Data Science"),
      icon: BarChart3,
      title: t("Analyse d'enquête — Santé publique", "Survey Analysis — Public Health"),
      description: t(
        "Conception et analyse d'une enquête quantitative sur 5 000 ménages pour un programme de santé communautaire.",
        "Design and analysis of a quantitative survey of 5,000 households for a community health program."
      ),
    },
    {
      image: serviceDigital,
      category: t("Solutions Numériques", "Digital Solutions"),
      icon: Code2,
      title: t("Plateforme e-commerce — PME locale", "E-commerce Platform — Local SME"),
      description: t(
        "Développement d'une plateforme e-commerce complète avec gestion de stock et paiement mobile pour une entreprise de Goma.",
        "Development of a full e-commerce platform with inventory management and mobile payment for a Goma-based business."
      ),
    },
    {
      image: realisationsImg,
      category: t("Formation", "Training"),
      icon: GraduationCap,
      title: t("Programme IA — 200 participants", "AI Program — 200 Participants"),
      description: t(
        "Organisation d'un programme de formation en Intelligence Artificielle de 3 mois pour 200 professionnels et étudiants.",
        "Organization of a 3-month Artificial Intelligence training program for 200 professionals and students."
      ),
    },
  ];

  return (
    <section id="realisations" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Portfolio", "Portfolio")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("Nos Réalisations", "Our Achievements")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Découvrez quelques-uns de nos projets phares qui témoignent de notre expertise et de notre engagement.",
              "Discover some of our flagship projects that showcase our expertise and commitment."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-secondary/30 transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary/90 text-primary px-3 py-1 rounded-full">
                    <project.icon className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsSection;
