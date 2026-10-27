const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    title: "Capacity Connect",
    category: "Learning Platform",
    description:
      "A learning platform designed to connect users with learning resources through a modern web experience and role-based access.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    accent: "from-violet-500/20 to-blue-500/5",
    status: "Project",
  },
  {
    number: "02",
    title: "WanderNest",
    category: "Desktop Application",
    description:
      "A tour and travel management application built to organize travel-related information through a desktop interface backed by a database.",
    technologies: ["Python", "CustomTkinter", "MySQL"],
    accent: "from-sky-500/20 to-cyan-500/5",
    status: "Project",
  },
  {
    number: "03",
    title: "Smart Complaint Router",
    category: "AI & NLP",
    description:
      "An AI-focused project in development that aims to classify complaints and help route them to the appropriate department.",
    technologies: ["Python", "FastAPI", "NLP"],
    accent: "from-fuchsia-500/20 to-violet-500/5",
    status: "In Development",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description:
      "Languages I use to learn programming concepts and build applications.",
    skills: ["Python", "C", "Java (Basic)"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Technologies for creating modern, responsive web experiences.",
    skills: ["HTML", "CSS", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Databases",
    description:
      "Tools for storing, managing, and working with application data.",
    skills: ["SQL", "MySQL", "Supabase"],
  },
  {
    number: "04",
    title: "Tools & Frameworks",
    description:
      "Frameworks and tools I use while developing projects.",
    skills: ["GitHub", "FastAPI", "CustomTkinter"],
  },
];

const education = [
  {
    period: "2025 — 2029",
    level: "UNDERGRADUATE",
    title: "B.Tech in Computer Science and Engineering",
    specialization:
      "Specialization in Artificial Intelligence & Machine Learning",
    institution: "Bharati Vidyapeeth (Deemed to be University)",
    result: "8.18 / 10",
    resultLabel: "First-year CGPA",
    status: "Currently Pursuing",
    current: true,
  },
  {
    period: "2024",
    level: "CLASS XII",
    title: "Higher Secondary Certificate",
    specialization: "Maharashtra State Board",
    institution: "Rashtriya Senior Secondary School, Jaitapur",
    result: "74.83%",
    resultLabel: "Final percentage",
    status: "Completed",
    current: false,
  },
  {
    period: "2022",
    level: "CLASS X",
    title: "Secondary School Certificate",
    specialization: "Maharashtra State Board",
    institution: "Sharda Mandir Girls High School, Aurangabad",
    result: "80.60%",
    resultLabel: "Final percentage",
    status: "Completed",
    current: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B1020] text-[#F8FAFC]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B1020]/85 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-5 md:grid-cols-3">
          <a
            href="#home"
            className="w-fit text-lg font-bold tracking-tight"
            aria-label="Go to homepage"
          >
            <span className="text-white">PORTFOLIO</span>
            <span className="text-[#38BDF8]">.</span>
          </a>

          <div className="hidden items-center justify-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex justify-end">
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-[#38BDF8] hover:text-[#38BDF8]"
            >
              Let&apos;s Connect <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="col-span-2 mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-slate-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[88vh] scroll-mt-24 items-center overflow-hidden px-6 py-24"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-sky-500/10 blur-[110px]" />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#38BDF8]" />
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#38BDF8]">
              CSE Student · AI &amp; Machine Learning
            </p>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent">
              intelligent solutions.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m a Computer Science and Engineering student specializing in
            AI &amp; Machine Learning, passionate about building practical
            software and exploring intelligent technologies through real-world
            projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Explore My Work <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              More About Me
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-sm text-slate-400">
            <span>
              <span className="mr-2 text-[#38BDF8]">✦</span>
              AI &amp; Machine Learning
            </span>
            <span>
              <span className="mr-2 text-violet-400">✦</span>
              Software Development
            </span>
            <span>
              <span className="mr-2 text-sky-400">✦</span>
              Continuous Learning
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen scroll-mt-6 bg-[#0D1428] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
              A Little About Me
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Curious by nature.
              <br />
              <span className="text-slate-400">Driven by possibilities.</span>
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div className="space-y-6 text-base leading-8 text-slate-300">
              <p>
                I&apos;m a Computer Science and Engineering student specializing
                in Artificial Intelligence and Machine Learning. I enjoy
                exploring how technology can solve practical problems and
                create useful experiences.
              </p>
              <p>
                Through academic learning and hands-on projects, I&apos;m
                developing my skills in programming, web development, databases,
                and AI-related technologies. I believe the best way to learn is
                to build, experiment, and improve.
              </p>
              <p>
                My goal is to keep growing as a developer, collaborate with
                others, and turn what I learn into projects with real-world
                value.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 pt-2 font-semibold text-[#38BDF8] transition hover:gap-3"
              >
                Let&apos;s connect <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <p className="text-3xl font-bold text-[#A78BFA]">AI/ML</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Exploring intelligent technologies and their applications.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <p className="text-3xl font-bold text-[#38BDF8]">Build</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Learning through practical projects and experimentation.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:col-span-2">
                <p className="text-lg font-semibold text-white">
                  Always learning. Always improving.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Focused on strengthening my fundamentals while discovering
                  new tools, frameworks, and approaches to problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen scroll-mt-6 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
                Selected Work
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Projects that bring
                <br />
                <span className="text-slate-400">ideas to life.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              A selection of projects reflecting my learning journey across
              software development, databases, and AI.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.28)] motion-reduce:transform-none"
              >
                <div
                  className={`relative flex h-44 items-start justify-between overflow-hidden bg-gradient-to-br ${project.accent} p-6`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020]/40 via-transparent to-white/[0.03]" />

                  <span className="relative z-10 text-sm font-medium tracking-wide text-slate-300">
                    PROJECT / {project.number}
                  </span>

                  <span
                    className={`relative z-10 rounded-full border px-3 py-1 text-xs backdrop-blur-sm ${project.status === "In Development"
                        ? "border-amber-300/30 bg-amber-300/10 text-amber-200"
                        : "border-white/15 bg-[#0B1020]/40 text-slate-200"
                      }`}
                  >
                    {project.status}
                  </span>

                  <div className="pointer-events-none absolute -bottom-20 -right-10 h-48 w-48 rounded-full border border-white/10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:border-white/20" />
                  <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full border border-white/10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:border-white/20" />
                  <div className="pointer-events-none absolute bottom-5 right-7 h-3 w-3 rounded-full bg-white/30 blur-[1px] transition duration-500 group-hover:bg-white/70" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38BDF8]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-violet-200">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 group-hover:border-violet-300/20 group-hover:bg-violet-400/[0.07]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-violet-400/40 via-sky-400/20 to-transparent" />
                  <p className="mt-4 text-xs text-slate-500">
                    {project.status === "In Development"
                      ? "Currently exploring and building"
                      : "Part of my development journey"}
                    <span className="ml-2 text-[#38BDF8]" aria-hidden="true">
                      ↗
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Project descriptions reflect the current scope; the Smart Complaint
            Router is still in development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen scroll-mt-6 bg-[#0D1428] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
              My Toolkit
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Skills &amp; technologies.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Technologies I&apos;ve been learning and using across my academic
              work and development projects.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-violet-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#38BDF8]">
                    {group.number}
                  </span>
                  <span className="h-px w-12 bg-white/15" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-[#0B1020] px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="min-h-screen scroll-mt-6 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
              Academic Journey
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Education &amp; growth.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              The academic foundation behind my interest in computer science,
              software development, and artificial intelligence.
            </p>
          </div>

          <div className="space-y-5">
            {education.map((item) => (
              <article
                key={item.level}
                className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 md:grid-cols-[150px_1fr_auto] md:items-start"
              >
                <div>
                  <p className="text-sm font-semibold text-[#38BDF8]">
                    {item.period}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.15em] text-slate-500">
                    {item.level}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    {item.current && (
                      <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                        Currently Pursuing
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.specialization}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.institution}
                  </p>

                  {item.current && (
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      CGPA shown is based on first-year academic performance.
                    </p>
                  )}
                </div>

                <div className="md:text-right">
                  <p className="text-2xl font-bold text-white">{item.result}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.resultLabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-6 bg-[#0D1428] px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#38BDF8]">
            Get in Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Build Something
            <span className="mt-2 block bg-gradient-to-r from-[#A78BFA] to-[#38BDF8] bg-clip-text text-transparent">
              Meaningful Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m excited to connect with people, exchange ideas, and explore
            opportunities to learn and build. If you&apos;d like to discuss a
            project or collaborate, I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:phalgunishitole2006@gmail.com"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Say Hello <span className="ml-2" aria-hidden="true">↗</span>
          </a>

          <div className="mx-auto mt-14 grid max-w-3xl gap-5 text-left sm:grid-cols-2">
            <a
              href="mailto:phalgunishitole2006@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-violet-500/50"
            >
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-3 break-words font-medium text-white">
                phalgunishitole2006@gmail.com
              </p>
              <p className="mt-4 text-sm text-[#38BDF8]">
                Send me an email →
              </p>
            </a>

            <a
              href="https://github.com/phalguni-shitole"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-sky-400/50"
            >
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-3 font-medium text-white">
                phalguni-shitole
              </p>
              <p className="mt-4 text-sm text-[#38BDF8]">
                Explore my profile ↗
              </p>
            </a>
          </div>

          <p className="mt-12 text-sm text-slate-500">
            Open to learning, collaboration, and exciting opportunities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="font-semibold tracking-wide">
            PORTFOLIO<span className="text-[#38BDF8]">.</span>
          </a>

          <p className="text-sm text-slate-500">
            Designed and built with Next.js, TypeScript, and Tailwind CSS.
          </p>

          <a
            href="#home"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}