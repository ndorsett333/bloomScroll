import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.mobileHeader}>
        <span className={styles.mark}>bloom<span>Scroll</span></span>
        <button className={styles.iconButton} type="button" aria-label="Open menu">
          <span />
          <span />
        </button>
      </header>

      <aside className={styles.sidebar}>
        <div className={styles.brand}><span className={styles.brandMark}>b</span> bloomScroll</div>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a className={styles.activeLink} href="#discover"><span>+</span> Discover</a>
          <a href="#saved"><span>o</span> Saved</a>
          <a href="#profile"><span>i</span> Profile</a>
        </nav>
        <div className={styles.sidebarFooter}>
          <span className={styles.statusDot} />
          <span>Daily learning<br /><strong>session 01</strong></span>
        </div>
      </aside>

      <main className={styles.feed} id="discover">
        <div className={styles.feedScroller}>
          <div className={styles.feedTopline}>
            <div>
              <p className={styles.eyebrow}>Monday, August 24</p>
              <h1>Stay curious.</h1>
            </div>
            <div className={styles.counter}><span>01</span> / 08</div>
          </div>

          <section className={styles.learningCard} aria-labelledby="card-title">
            <div className={styles.cardHeader}>
              <span className={styles.topic}>NATURAL HISTORY</span>
              <div className={styles.cardActions}>
                <button type="button" aria-label="Save this lesson">☆</button>
                <button type="button" aria-label="More options">•••</button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.illustration} aria-hidden="true">
                <div className={styles.sun} />
                <div className={`${styles.mountain} ${styles.mountainOne}`} />
                <div className={`${styles.mountain} ${styles.mountainTwo}`} />
                <div className={styles.tree} />
              </div>
              <div className={styles.lessonCopy}>
                <p className={styles.lessonNumber}>01 / FIELD NOTE</p>
                <h2 id="card-title">The forest<br />is always<br /><em>listening.</em></h2>
                <p className={styles.description}>Trees can share nutrients and warnings through vast underground fungal networks. A forest is less a collection of individuals, and more a quiet conversation.</p>
                <div className={styles.cardMeta}><span>2 min read</span><span>Science</span></div>
              </div>
            </div>
          </section>

          <div className={styles.nextCue}>
            <span className={styles.nextLine} />
            <span>Scroll for the next note</span>
            <span className={styles.downArrow}>↓</span>
          </div>
        </div>
      </main>

      <section className={styles.sideNote} aria-label="Today in learning">
        <p className={styles.eyebrow}>TODAY IN LEARNING</p>
        <h2>One small<br /><em>idea</em> at a time.</h2>
        <div className={styles.noteRule} />
        <p className={styles.noteText}>A pocket-sized collection of facts, puzzles, and questions for your curious side.</p>
        <span className={styles.noteIndex}>b / 24</span>
      </section>
    </div>
  );
}
