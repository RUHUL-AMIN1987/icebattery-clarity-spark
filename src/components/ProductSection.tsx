import { motion } from "framer-motion";
import { Thermometer, Truck, BarChart3, Zap, Package, Globe } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Multi-Temperature Control",
    desc: "Maintains precise, multiple temperature zones from frozen to chilled — simultaneously.",
  },
  {
    icon: Truck,
    title: "All Transport Modes",
    desc: "Works seamlessly across air, land, rail, sea, and last-mile delivery.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    desc: "Digital DX system provides live temperature and location monitoring for full traceability.",
  },
  {
    icon: Zap,
    title: "No Power Required",
    desc: "Operates up to 72 hours without electricity — truly energy-independent preservation.",
  },
  {
    icon: Package,
    title: "Scalable Sizes",
    desc: "Cooling boxes from 8L to 100L+ to fit any shipment, from small parcels to full pallets.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    desc: "Meets international cold chain standards for pharmaceutical, food, and medical logistics.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

const ProductSection = () => (
  <section id="products" className="py-24 md:py-32 gradient-section">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          Why IceBattery®
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
          The most energy-efficient cold chain solution on the market
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          IceBattery® Preservation System (IBPS) is a comprehensive, reusable alternative to dry ice — designed for reliability, sustainability, and total cold chain visibility.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="bg-card rounded-xl p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <f.icon className="text-primary" size={20} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <a
          href="https://icebattery.jp/ib-product-line/"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-cta text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity inline-block"
        >
          View Full Product Line
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProductSection;
