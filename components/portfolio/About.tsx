import { motion } from "framer-motion";

const skills = [
  "React / Next.js",
  "Node.js",
  "Java / Spring",
  "Python / Flask",
  "TypeScript",
  "Tailwind CSS",
  "Docker / K8s",
  "Microservices",
  "MySQL / SQL",
  "Firebase / NoSQL",
  "REST / GraphQL",
  "CI/CD Pipelines",
];

const stats = [
  { value: "5+", label: "Years engineering" },
  { value: "20+", label: "Projects shipped" },
  { value: "3", label: "Platforms launched" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center font-display text-3xl font-bold md:text-5xl lg:text-6xl"
        >
          Unleash the power of{" "}
          <span className="text-gradient italic">software</span>
        </motion.h2>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
              About me
            </p>
            <div className="space-y-5 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I'm a full stack engineer who thrives on building end-to-end
                solutions — from intuitive interfaces to resilient backend
                architectures. My work at Société Générale CIB has sharpened my
                focus on scalable, production-grade systems.
              </p>
              <p>
                I believe great software is invisible: it works flawlessly,
                scales gracefully, and puts users first. That's the standard I
                hold myself to.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary">
              Skills & technologies
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="glass-panel cursor-default rounded-full px-4 py-2 text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
