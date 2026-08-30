import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const interests = ["Natural history", "Word play", "Science", "Design"];

export default function ProfilePage() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>b</span> bloomScroll
        </Link>
        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="/"><span>+</span> Discover</Link>
          <a href="#saved"><span>o</span> Saved</a>
          <Link className={styles.activeLink} href="/profile"><span>i</span> Profile</Link>
        </nav>
        <p className={styles.sidebarFooter}>Learning, one note at a time.</p>
      </aside>

      <section className={styles.content}>
        <header className={styles.topline}>
          <p>YOUR PROFILE</p>
          <Link href="/" className={styles.backLink}>Back to discover <span>→</span></Link>
        </header>

        <div className={styles.profileHeader}>
          <div className={styles.avatarWrap}>
            <Image
              className={styles.avatar}
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80"
              alt="Profile portrait"
              width={122}
              height={122}
            />
            <span className={styles.onlineDot} />
          </div>
          <div className={styles.identity}>
            <p className={styles.eyebrow}>CURIOUS SINCE AUGUST 2026</p>
            <h1>Nick<br /><em>Dorsett</em></h1>
            <p className={styles.handle}>@nickd</p>
          </div>
          <button className={styles.editButton} type="button">Edit profile</button>
        </div>

        <div className={styles.divider} />

        <section className={styles.stats} aria-label="Learning stats">
          <div><strong>24</strong><span>Notes explored</span></div>
          <div><strong>08</strong><span>Topics sampled</span></div>
          <div><strong>05</strong><span>Saved for later</span></div>
        </section>

        <div className={styles.lowerGrid}>
          <section className={styles.section}>
            <p className={styles.eyebrow}>YOUR CURIOSITIES</p>
            <h2>Follow the threads<br />that pull you <em>in.</em></h2>
            <div className={styles.interests}>
              {interests.map((interest) => <span key={interest}>{interest}</span>)}
            </div>
            <button className={styles.textButton} type="button">Manage interests <span>→</span></button>
          </section>

          <section className={`${styles.section} ${styles.recentSection}`}>
            <div className={styles.sectionTitle}>
              <p className={styles.eyebrow}>RECENTLY EXPLORED</p>
              <a href="#history">View all</a>
            </div>
            <ol className={styles.recentList}>
              <li><span>01</span><div><strong>The Forest&apos;s Hidden Network</strong><small>Natural history · Today</small></div></li>
              <li><span>02</span><div><strong>Why Octopuses Have Three Hearts</strong><small>Marine biology · Today</small></div></li>
              <li><span>03</span><div><strong>Science Quiz</strong><small>Science · Yesterday</small></div></li>
            </ol>
          </section>
        </div>
      </section>
    </main>
  );
}