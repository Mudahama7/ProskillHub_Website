import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Award, Monitor, BookOpen } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => {
  const { t } = useLang();

  const values = [
    { icon: Heart, title: t("Engagement", "Commitment"), desc: t("Dédié à l'impact social et professionnel", "Dedicated to social and professional impact") },
    { icon: Users, title: t("Inclusion", "Inclusion"), desc: t("Accessible à tous, sans distinction", "Accessible to all, without distinction") },
    { icon: Lightbulb, title: "Innovation", desc: t("Technologies et méthodes de pointe", "Cutting-edge technologies and methods") },
    { icon: Award, title: "Excellence", desc: t("Standards internationaux de qualité", "International quality standards") },
  ];

  return (
    <section id="about" className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {t("À propos", "About Us")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              {t("Un centre d'excellence à Goma", "A Center of Excellence in Goma")}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
              {t(
                "ProSkill Hub est un centre multidisciplinaire basé à Goma, en République Démocratique du Congo. Nous combinons expertise académique et solutions technologiques pour accompagner professionnels, étudiants et organisations.",
                "ProSkill Hub is a multidisciplinary center based in Goma, Democratic Republic of Congo. We combine academic expertise and technological solutions to support professionals, students, and organizations."
              )}
            </p>

            {/* Hybrid model */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-3">
                <Monitor className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80 font-medium text-sm">{t("E-learning", "E-learning")}</span>
              </div>
              <div className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-3">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80 font-medium text-sm">{t("En présentiel", "In-person")}</span>
              </div>
            </div>

            {/* Team image */}
            <div className="rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img src={aboutTeam} alt={t("Notre équipe", "Our team")} className="w-full h-56 object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:border-secondary/30 transition-colors"
              >
                <v.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">{v.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
