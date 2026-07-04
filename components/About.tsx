import Glass from "./Glass";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <Glass>
        <div className="p-8 text-center text-lg">
          <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m a full-stack developer specializing in building modern,
            high-performance, and user-focused web applications. I create clean,
            scalable solutions using technologies like Next.js, React,
            TypeScript, and Tailwind CSS, with a strong focus on responsive
            design, smooth user experiences, and maintainable code. I’m
            passionate about crafting premium digital products, from polished
            frontend interfaces to robust full-stack applications. Every project
            I build is designed with attention to performance, usability, code
            quality, and modern development standards.
          </p>
        </div>
      </Glass>
    </section>
  );
}
