import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    t("Rédaction Professionnelle", "Professional Writing"),
    t("Formation Spécialisée", "Specialized Training"),
    t("Analyse de Données", "Data Analysis"),
    t("Solutions Numériques", "Digital Solutions"),
    t("Autre", "Other"),
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("Message envoyé avec succès !", "Message sent successfully!"));
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Contact", "Contact")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            {t("Démarrons votre projet", "Let's Start Your Project")}
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            {t(
              "Contactez-nous pour discuter de vos besoins et obtenir un accompagnement personnalisé.",
              "Get in touch to discuss your needs and receive personalized support."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-primary-foreground font-semibold mb-1">{t("Adresse", "Address")}</h4>
                <p className="text-primary-foreground/60 text-sm">12, Avenue Ndurumo, Quartier Murara, Goma, RDC</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-primary-foreground font-semibold mb-1">Email</h4>
                <p className="text-primary-foreground/60 text-sm">contact@proskillhub.cd</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-primary-foreground font-semibold mb-1">{t("Téléphone", "Phone")}</h4>
                <p className="text-primary-foreground/60 text-sm">+243 XXX XXX XXX</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                maxLength={100}
                placeholder={t("Nom complet", "Full Name")}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <input
                required
                type="email"
                maxLength={255}
                placeholder="Email"
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary/50 transition-colors"
              />
            </div>
            <select
              required
              defaultValue=""
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground focus:outline-none focus:border-secondary/50 transition-colors"
            >
              <option value="" disabled className="text-foreground">
                {t("Type de projet", "Project Type")}
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="text-foreground">
                  {type}
                </option>
              ))}
            </select>
            <textarea
              required
              maxLength={1000}
              rows={4}
              placeholder={t("Décrivez votre projet...", "Describe your project...")}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-gold text-primary font-semibold px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? t("Envoi en cours...", "Sending...") : t("Envoyer le message", "Send Message")}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
