import Glass from "./Glass";

const projects = [
  { title: "Food Blog", 
    tech: "React + Next.js",
    link: "https://naimurr-rahman.github.io/website_design_for_food_blog/"
  },
  { title: "Ecommerce", 
    tech: "React + Next.js",
    link: "https://nextjs-ecommerce-site-one.vercel.app/"
  
  },
  {
    title: "Dashboard",
    tech: "React + Next.js",
    link: "https://dashboard-beige-two-92.vercel.app/dashboard"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 text-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-gradient">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.tech}</p>
          </a>
        ))}
      </div>
    </section>
  );
}