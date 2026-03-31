import Glass from "./Glass";

const skills = ["React", "Next.js", "TypeScript", "Tailwind","git", "API Integration", "Responsive Design", "Performance Optimization", "SEO Best Practices", "Accessibility", "Component Architecture", "State Management", "Testing & Debugging"];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 text-center">
      <Glass>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Skills</h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Glass>
    </section>
  );
}