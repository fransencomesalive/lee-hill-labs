import styles from "./page.module.css";

const LINKS = [
  {
    href: "/lee-hill-labs-index",
    label: "Open gated deck",
    desc: "Password gate that mirrors the Wrenching 101 presentation flow.",
  },
  {
    href: "/lee-hill-labs-slides",
    label: "Open slides directly",
    desc: "Useful while Claude is designing and building the deck.",
  },
  {
    href: "/presentation/slides.html",
    label: "Static slide file",
    desc: "The deployable static deck entry point under public/presentation.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Presentation Template</p>
        <h1>Lee Hill Labs</h1>
        <p className={styles.deck}>
          A standalone Next.js workspace for building a focused presentation with
          Claude handling outline and design, and Codex keeping the architecture
          stable.
        </p>
      </section>

      <section className={styles.grid} aria-label="Project links">
        {LINKS.map((link) => (
          <a className={styles.card} href={link.href} key={link.href}>
            <span>{link.label}</span>
            <p>{link.desc}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
