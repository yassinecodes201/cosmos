import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Activity, ArrowUpRight, BarChart3, Code2, Route, Search } from "lucide-react";

const projects = [
  {
    title: "Cross-Asset Pricing Platform",
    category: "FINTECH / PRICING",
    description:
      "Built production pricing microservices for equities, rates, FX and structured products, reducing valuation time by 30% for trading desks.",
    tags: ["Java", "Spring Boot", "Python", "Kubernetes"],
    icon: BarChart3,
    href: "#contact",
  },
  {
    title: "ELK Observability Platform",
    category: "PLATFORM / MONITORING",
    description:
      "Built centralized logging, Kibana dashboards and automated pricing-error and SLA alerts across 10+ microservices, reducing incident detection time by 40%.",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Microservices"],
    icon: Activity,
    href: "#contact",
  },
  {
    title: "Trader Pricing IDE",
    category: "FINTECH / DEVELOPER TOOLS",
    description:
      "Improved an internal pricing IDE used by traders and quants, eliminating manual configuration steps in simulations and product-structuring workflows.",
    tags: ["Java", "Pricing", "Developer Tools"],
    icon: Code2,
    href: "#contact",
  },
  {
    title: "Real-Time Logistics Platform",
    category: "FULL STACK / LOGISTICS",
    description:
      "Delivered live order tracking, geolocation, route management and WebSocket notifications for a real-time logistics workflow.",
    tags: ["React", "Node.js", "Socket.io", "Mapbox"],
    icon: Route,
    href: "#contact",
  },
  {
    title: "U.S. Salary Comparison Platform",
    category: "FULL STACK / ANALYTICS",
    description:
      "Built intelligent salary search with GeoDB autocomplete, analytics dashboards and optimized filtering for comparing salaries across the U.S.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "GeoDB"],
    icon: Search,
    href: "#contact",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 140, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 140, damping: 20 });
  const ProjectIcon = project.icon;

  const onPointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reducedMotion || e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target={project.href.startsWith("https:") ? "_blank" : undefined}
      rel={project.href.startsWith("https:") ? "noopener noreferrer" : undefined}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      initial={reducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reducedMotion ? undefined : { y: -9, scale: 1.015 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{ rotateX: reducedMotion ? 0 : rx, rotateY: reducedMotion ? 0 : ry, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/90 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      {/* A composited spotlight and light sweep give the cards depth without costly backdrop blur. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,222,231,0.16),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 -translate-x-full skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-700 ease-out motion-safe:group-hover:translate-x-full motion-safe:group-focus-visible:translate-x-full motion-reduce:hidden"
      />
      <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/40 to-card border-b border-primary/10">
        <div className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full border border-primary/20" />
        <div className="pointer-events-none absolute -right-16 -bottom-24 h-64 w-64 rounded-full border border-primary/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        <ProjectIcon
          size={72}
          strokeWidth={1.2}
          aria-hidden="true"
          className="relative z-10 text-primary drop-shadow-[0_0_22px_rgba(99,222,231,0.2)] transition-transform duration-500 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-110 motion-reduce:transition-none"
        />
        <span className="absolute bottom-5 left-6 z-10 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
          {project.category}
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 text-primary opacity-60 transition-all duration-300 motion-safe:group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </div>
        <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative z-10 section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Selected work
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Projects I've <span className="text-gradient">shipped</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1200px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
