import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Eye, Scale, Handshake, Leaf, Lock } from "lucide-react";

const PolitiquesSection = () => {
  const { t } = useLang();

  const policies = [
    {
      icon: Shield,
      title: t("Qualité & Excellence", "Quality & Excellence"),
      description: t(
        "Nous appliquons des standards internationaux rigoureux à chaque projet. Chaque livrable passe par un processus de relecture et de validation à plusieurs niveaux.",
        "We apply rigorous international standards to every project. Each deliverable goes through a multi-level review and validation process."
      ),
    },
    {
      icon: Lock,
      title: t("Confidentialité", "Confidentiality"),
      description: t(
        "La protection des données et la confidentialité de nos clients sont au cœur de notre pratique. Tous les documents sont traités avec la plus stricte discrétion.",
        "Data protection and client confidentiality are at the heart of our practice. All documents are handled with the strictest discretion."
      ),
    },
    {
      icon: Eye,
      title: t("Transparence", "Transparency"),
      description: t(
        "Communication ouverte à chaque étape du projet. Nos clients ont une visibilité complète sur l'avancement, les coûts et les délais de leurs projets.",
        "Open communication at every stage of the project. Our clients have full visibility on progress, costs, and timelines."
      ),
    },
    {
      icon: Scale,
      title: t("Éthique professionnelle", "Professional Ethics"),
      description: t(
        "Intégrité, honnêteté et respect guident toutes nos interactions. Nous nous engageons à maintenir les plus hauts standards éthiques dans nos travaux.",
        "Integrity, honesty, and respect guide all our interactions. We are committed to maintaining the highest ethical standards in our work."
      ),
    },
    {
      icon: Handshake,
      title: t("Satisfaction client", "Client Satisfaction"),
      description: t(
        "Nous garantissons la satisfaction de nos clients avec un suivi personnalisé et des révisions incluses jusqu'à validation complète du livrable.",
        "We guarantee client satisfaction with personalized follow-up and included revisions until complete deliverable validation."
      ),
    },
    {
      icon: Leaf,
      title: t("Responsabilité sociale", "Social Responsibility"),
      description: t(
        "Engagés pour le développement de Goma et de la RDC, nous offrons des tarifs préférentiels aux étudiants et aux organisations à impact social.",
        "Committed to the development of Goma and the DRC, we offer preferential rates to students and social impact organizations."
      ),
    },
  ];

  return (
    <section id="politiques" className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-secondary/3 blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Nos Engagements", "Our Commitments")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            {t("Nos Politiques", "Our Policies")}
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            {t(
              "Des principes solides qui guident chacune de nos actions et garantissent un service d'excellence.",
              "Solid principles that guide every action and guarantee excellent service."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 hover:border-secondary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <policy.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                {policy.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {policy.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolitiquesSection;
