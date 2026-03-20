import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Feather, GraduationCap, BarChart3, Code2, FileText, Languages, Brain, LineChart, Globe, Smartphone } from "lucide-react";
import serviceWriting from "@/assets/service-writing.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceDigital from "@/assets/service-digital.jpg";

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    {
      icon: Feather,
      image: serviceWriting,
      title: t("Rédaction Professionnelle", "Professional Writing"),
      description: t(
        "Rédaction académique et professionnelle : mémoires, thèses, articles scientifiques, rapports d'entreprise et documents stratégiques.",
        "Academic and business writing: theses, dissertations, scientific articles, corporate reports, and strategic documents."
      ),
      features: [
        { icon: FileText, label: t("Mémoires & Thèses", "Theses & Dissertations") },
        { icon: FileText, label: t("Rapports d'entreprise", "Corporate Reports") },
      ],
    },
    {
      icon: GraduationCap,
      image: serviceTraining,
      title: t("Formation Spécialisée", "Specialized Training"),
      description: t(
        "Programmes de formation en langues, intelligence artificielle, leadership et développement professionnel. En présentiel et en e-learning.",
        "Training programs in languages, artificial intelligence, leadership, and professional development. In-person and e-learning."
      ),
      features: [
        { icon: Languages, label: t("Langues", "Languages") },
        { icon: Brain, label: t("IA & Leadership", "AI & Leadership") },
      ],
    },
    {
      icon: BarChart3,
      image: serviceData,
      title: t("Analyse de Données", "Data Analysis"),
      description: t(
        "Statistiques avancées, visualisation de données, conception d'enquêtes et analyse quantitative pour la prise de décision.",
        "Advanced statistics, data visualization, survey design, and quantitative analysis for decision-making."
      ),
      features: [
        { icon: LineChart, label: t("Statistiques & Visualisation", "Statistics & Visualization") },
        { icon: FileText, label: t("Conception d'enquêtes", "Survey Design") },
      ],
    },
    {
      icon: Code2,
      image: serviceDigital,
      title: t("Solutions Numériques", "Digital Solutions"),
      description: t(
        "Développement d'applications web et mobiles avec les technologies modernes : Next.js, Spring Boot, React Native.",
        "Web and mobile application development with modern technologies: Next.js, Spring Boot, React Native."
      ),
      features: [
        { icon: Globe, label: t("Applications Web", "Web Applications") },
        { icon: Smartphone, label: t("Applications Mobiles", "Mobile Apps") },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Nos Services", "Our Services")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("Quatre piliers d'excellence", "Four Pillars of Excellence")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Un centre multidisciplinaire au service de votre réussite professionnelle et académique.",
              "A multidisciplinary center dedicated to your professional and academic success."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-secondary/30 transition-all group"
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-8 pt-4">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((f, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-2 text-sm bg-secondary/10 text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      <f.icon className="w-3.5 h-3.5 text-secondary" />
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
