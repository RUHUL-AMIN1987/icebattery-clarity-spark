import { motion } from "framer-motion";

const milestones = [
  { year: "2007", title: "Founded in Tokyo", desc: "ITE Co., Ltd. established with a mission to revolutionize cold chain logistics." },
  { year: "2010", title: "First IceBattery® Prototype", desc: "Developed the first reusable cold storage unit, replacing single-use dry ice." },
  { year: "2014", title: "Commercial Launch", desc: "Deployed IceBattery® systems to initial B2B customers across Japan." },
  { year: "2018", title: "300+ Customers", desc: "Expanded across food, medical, and retail industries with zero failure record." },
  { year: "2020", title: "Digital (DX) Integration", desc: "Launched real-time temperature and location tracking for full traceability." },
  { year: "2023", title: "Global Expansion", desc: "Extended operations to India and Taiwan, bringing sustainable cold chain worldwide." },
  { year: "2025", title: "IceBattery® Insulation", desc: "Launched innovative insulation coating technology for broader energy efficiency." },
];

const TimelineSection = () => (
  <section id="timeline" className="py-24 md:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Company History</h2>
      </motion.div>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1.5 md:mt-0 z-10" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-primary font-bold text-sm tracking-wide">{m.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{m.desc}</p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
