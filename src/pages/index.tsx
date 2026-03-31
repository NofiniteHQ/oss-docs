import { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

const libraries = [
  {
    id: "nui",
    name: "NUI",
    badge: "UI Kit",
    description:
      "A high-performance React UI library featuring accessible, composable component primitives for modern web applications.",
    href: "/docs/nui",
  },
  {
    id: "nuicss",
    name: "NUI CSS",
    badge: "CSS",
    description:
      "A utility-first CSS framework built for rapid styling, semantic consistency, and zero-configuration design systems.",
    href: "/docs/nuicss",
  },
  {
    id: "utils",
    name: "Utils",
    badge: "Core",
    description:
      "High-performance logic and security helpers for authentication, encryption, and environment handling.",
    href: "/docs/utils",
  },
  {
    id: "locale",
    name: "Locale",
    badge: "i18n",
    description:
      "A lightweight localization library providing SVG flags, accurate country metadata, and international dialing codes.",
    href: "/docs/locale",
  },
  {
    id: "markon",
    name: "Markon",
    badge: "Content",
    description:
      "A lightweight JavaScript library designed for easy content formatting, styling, and text manipulation in React and HTML applications.",
    href: "/docs/markon",
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Nofinite Open Source"
      description="Professional React libraries and primitives for modern web applications."
    >
      <main className={styles.mainContainer}>
        {/* HERO SECTION */}
        <header className={styles.heroSection}>
          <div className={styles.heroBackground} />
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.pill}>
                <span className={styles.pillDot} />
                <span>Nofinite Open Source</span>
              </div>

              <Heading as="h1" className={styles.heroTitle}>
                Primitives for the <br className={styles.desktopOnly} /> modern
                web.
              </Heading>

              <p className={styles.heroSubtitle}>
                A collection of professional-grade libraries engineered for
                performance and scalability. Built for React, TypeScript, and
                the future.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={`${styles.nfBtn} ${styles.nfBtnPrimary}`}
                  to="/docs/nui"
                >
                  Explore Docs
                </Link>
                <a
                  className={`${styles.nfBtn} ${styles.nfBtnSecondary}`}
                  href="https://github.com/nofinitehq"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* LIBRARIES GRID */}
        <section className={styles.gridSection}>
          <div className="container">
            <div className={styles.bentoGrid}>
              {libraries.map((pkg, idx) => (
                <Link
                  key={pkg.id}
                  to={pkg.href}
                  className={styles.bentoCard}
                  style={{ "--index": idx } as React.CSSProperties}
                >
                  <div className={styles.cardHeader}>
                    <Heading as="h3" className={styles.cardTitle}>
                      {pkg.name}
                    </Heading>
                    <span className={styles.badge}>{pkg.badge}</span>
                  </div>
                  <p className={styles.cardDescription}>{pkg.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.ctaText}>Get Started &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className={styles.communitySection}>
          <div className="container">
            <div className={styles.communityBox}>
              <p>
                <strong>Nofinite Open Source</strong> — Free forever. Built with
                the community.
              </p>
              <a
                href="https://github.com/nofinitehq"
                className={styles.githubLink}
              >
                Join us on GitHub &rarr;
              </a>
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
