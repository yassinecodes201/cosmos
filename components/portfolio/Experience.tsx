import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    role: "Full Stack Engineer",
    org: "Société Générale CIB",
    period: "Present",
    detail:
      "Engineering production-grade full stack solutions for corporate & investment banking — scalable services, resilient architectures, and performance-critical applications.",
  },
  {
    icon: Briefcase,
    role: "Software Engineer",
    org: "Freelance & side projects",
    period: "Ongoing",
    detail:
      "Designed and shipped platforms like Grabit and Servme — from real-time delivery logistics to marketplace booking flows.",
  },
  {
    icon: GraduationCap,
    role: "Computer Science",
    org: "Engineering studies",
    period: "Foundation",
    detail:
      "Built a strong base in algorithms, distributed systems, and software design that powers everything I build today.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative z-10 section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Journey
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Where I've <span className="text-gradient">been</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary/60 via-nebula/40 to-transparent md:left-1/2" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-12 flex gap-6 pl-14 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-card text-primary glow-primary md:top-0 ${
                  i % 2 === 0 ? "md:-right-5 md:left-auto" : "md:-left-5"
                }`}
              >
                <item.icon size={16} />
              </div>
              <div className="glass-panel flex-1 rounded-2xl p-6">
                <span className="text-xs uppercase tracking-widest text-primary">
                  {item.period}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
