import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
const projectGrabit = "/images/projects/project-grabit.png";
const projectServme = "/images/projects/project-servme.png";
const projectChatapp = "/images/projects/project-chatapp.png";

const projects = [
  {
    title: "Grabit",
    description:
      "On-demand delivery platform that splits fees between nearby customers — making fast delivery affordable for everyone.",
    tags: ["React", "Node.js", "Real-time"],
    image: projectGrabit,
    href: "https://objective-austin-3b2ce1.netlify.app/",
  },
  {
    title: "Servme",
    description:
      "A marketplace connecting service providers with clients, streamlining discovery, booking, and communication.",
    tags: ["Next.js", "Tailwind", "Full Stack"],
    image: projectServme,
    href: "#contact",
  },
  {
    title: "ChatApp",
    description:
      "Real-time messaging application powered by WebSockets, enabling instant peer-to-peer conversations.",
    tags: ["WebSockets", "React", "Node.js"],
    image: projectChatapp,
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
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

  const onMouseMove = (e: React.MouseEvent) => {
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
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group glass-panel relative flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-primary/40"
    >
      <div className="relative min-h-[220px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <ExternalLink
            size={16}
            className="text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
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

        <div className="grid gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
