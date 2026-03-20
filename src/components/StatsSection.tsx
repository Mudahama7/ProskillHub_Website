import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref };
};

const StatsSection = () => {
  const { t } = useLang();

  const stats = [
    { target: 1200, suffix: "+", label: t("Personnes formées", "People Trained") },
    { target: 720, suffix: "+", label: t("Documents rédigés", "Documents Written") },
    { target: 240, suffix: "+", label: t("Projets data", "Data Projects") },
  ];

  return (
    <section id="stats" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Nos Chiffres", "Our Numbers")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            {t("L'impact en chiffres", "Impact in Numbers")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const { count, ref } = useCountUp(stat.target);
            return (
              <div
                key={i}
                ref={ref}
                className="text-center p-10 rounded-2xl glass-card hover:border-secondary/30 transition-colors"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-3">
                  {count.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-muted-foreground text-lg font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
