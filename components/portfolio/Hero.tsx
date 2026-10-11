import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";

const profile = "/images/photo.svg";

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yassine-yousfi-568801ab/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/yassinecodes201", label: "GitHub" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/yassine19265/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:yassine19265@gmail.com", label: "Email" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, [0, 1], [-14, 14]);
  const imgY = useTransform(sy, [0, 1], [-14, 14]);
  const glowX = useTransform(sx, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(sy, [0, 1], ["20%", "80%"]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
    >
      {/* Mouse-following aurora glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[42rem] w-[42rem] rounded-full opacity-25 blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, var(--primary), var(--nebula) 55%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-primary"
          >
            Full Stack Engineer
          </motion.p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            {["Hi, I'm", "Yassine"].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-md text-lg font-light leading-relaxed text-muted-foreground"
          >
            I build robust, scalable software. Currently engineering full stack
            solutions at{" "}
            <span className="font-medium text-foreground">
              Société Générale CIB
            </span>{" "}
            — turning complex problems into elegant, performant applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="glow-primary rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View my work
            </a>
            <div className="flex items-center gap-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Photo with parallax + orbit ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div style={{ x: imgX, y: imgY }} className="relative">
            <div className="absolute -inset-6 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-primary/30" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/50 via-nebula/30 to-accent/40 blur-2xl" />
            <img
              src={profile}
              alt="Yassine Yousfi"
              className="relative h-64 w-64 rounded-full border-2 border-border object-cover md:h-80 md:w-80"
            />
            <div className="absolute -right-2 top-6 h-3 w-3 animate-pulse rounded-full bg-primary glow-primary" />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
