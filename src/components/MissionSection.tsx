import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Recycle } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    desc: "Eliminating single-use dry ice to reduce CO₂ emissions across the global supply chain.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality",
    desc: "Precise temperature control with zero failures across 15 years of operation.",
  },
  {
    icon: Recycle,
    title: "Reusable Technology",
    desc: "Every IceBattery® unit is fully reusable — cutting waste and long-term logistics costs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const MissionSection = () => (
  <section id="mission" className="py-24 md:py-32 gradient-section">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Mission</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
          Preserving freshness. Protecting the planet. Powering progress.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We believe the next generation deserves clean air, safe food, and sustainable energy. IceBattery® is our answer — a cold chain technology that puts people and the planet first.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-5">
              <pillar.icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionSection;
