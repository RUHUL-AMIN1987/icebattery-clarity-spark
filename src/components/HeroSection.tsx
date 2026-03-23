import { motion } from "framer-motion";
import heroImage from "@/assets/hero-coldchain.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="IceBattery cold chain logistics warehouse"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero opacity-80" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="text-ice-200 text-sm font-medium tracking-widest uppercase mb-4">
          Next-Generation Cold Chain
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
          Sustainable Cold Chain Logistics for a Better World
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ice-200 leading-relaxed max-w-xl">
          IceBattery® replaces dry ice with a reusable, energy-efficient preservation system — keeping food, medicine, and vaccines at precise temperatures across land, air, rail, and sea.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#products"
            className="gradient-cta text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Discover Our Solution
          </a>
          <a
            href="#mission"
            className="border border-ice-200/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
      >
        {[
          { value: "15+", label: "Years of Innovation" },
          { value: "300+", label: "B2B Customers" },
          { value: "0", label: "Failures Recorded" },
          { value: "4", label: "Transport Modes" },
        ].map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</div>
            <div className="text-ice-200 text-xs mt-1 tracking-wide">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
