import Glass from "./Glass";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <Glass>
        <div className="p-8 text-center text-lg">
          <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m a frontend developer specializing in React, Next.js, TypeScript, and
            Tailwind CSS, focused on crafting fast, scalable, and visually
            refined web applications. I translate complex ideas and design
            systems into clean, maintainable component architectures with a
            strong emphasis on performance, accessibility, and responsiveness
            across all devices. I care deeply about user experience—every
            interaction, animation, and layout is intentional and optimized for
            clarity and usability. My workflow prioritizes code quality,
            reusability, and consistency, allowing me to build interfaces that
            are not only visually polished but also easy to scale and maintain.
            From pixel-perfect implementation to performance tuning, I aim to
            deliver smooth, reliable, and engaging digital experiences that feel
            effortless for users.
          </p>
        </div>
      </Glass>
    </section>
  );
}
