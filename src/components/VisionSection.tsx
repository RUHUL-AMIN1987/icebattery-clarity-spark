import { motion } from "framer-motion";
import iceTexture from "@/assets/ice-texture.jpg";

const VisionSection = () => (
  <section id="vision" className="relative py-24 md:py-32 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={iceTexture}
        alt=""
        loading="lazy"
        width={1920}
        height={800}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-ice-200 text-sm font-semibold tracking-widest uppercase mb-3">Our Vision</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance">
          A world where no food is wasted and every vaccine reaches its destination
        </h2>
        <p className="mt-6 text-lg text-ice-200 leading-relaxed max-w-2xl mx-auto">
          We envision a future where sustainable cold chain technology is the global standard — bridging the gap between harvest and table, laboratory and patient, across every continent and climate.
        </p>
        <div className="mt-10 flex justify-center gap-8 md:gap-16">
          {[
            { value: "Net Zero", label: "CO₂ Goal" },
            { value: "Global", label: "Reach" },
            { value: "∞", label: "Reusable Cycles" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{item.value}</div>
              <div className="text-ice-200 text-xs mt-1 tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default VisionSection;
