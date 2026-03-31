import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] border-t border-white/10 mt-20 bg-linear-to-b from-[#0c262b] to-black">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gradient">Naimur Rahman</h2>

          <p className="text-gray-400 mt-4 text-md leading-relaxed max-w-sm mx-auto md:mx-0">
            Crafting fast, accessible, and visually refined web experiences with
            React and Next.js. Focused on performance, clean architecture, and
            pixel-perfect implementation from design to production.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://github.com/naimurr-rahman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaGithub />
              </Icon>
            </a>

            <a
              href="https://www.linkedin.com/in/naimur-rahman-567713152/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaLinkedin />
              </Icon>
            </a>

            <a
              href="https://x.com/naimur_rah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaTwitter />
              </Icon>
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-4 text-gradient text-2xl">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400 text-md">
            {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-4 text-gradient text-2xl">
            Services
          </h3>

          <ul className="space-y-2 text-gray-400 text-md">
            {[
              "Web Application Development",
              "UI/UX Design Implementation",
              "Responsive & Mobile-First Design",
              "Performance Optimization",
              "SEO-Friendly Frontend",
              "Accessibility & Semantic Web",
            ].map((service) => (
              <li key={service} className="hover:text-white transition">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white text-center md:text-left gap-4 md:gap-0">
          <p>© 2026 naimurrahman.com. All rights reserved.</p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Icon Button */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer">
      {children}
    </div>
  );
}
