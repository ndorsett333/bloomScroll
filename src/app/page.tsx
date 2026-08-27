import styles from "./page.module.css";
import { dummyContent } from "@/data/dummy-content";
import { ArticleCard } from "@/components/ArticleCard";
import { RiddleCard } from "@/components/RiddleCard";
import { PuzzleCard } from "@/components/PuzzleCard";
import { QuizCard } from "@/components/QuizCard";
import { isArticle, isRiddle, isPuzzle, isQuiz } from "@/types/content";

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
            <div className={styles.counter}><span>01</span> / {dummyContent.length.toString().padStart(2, '0')}</div>
          </div>

          {dummyContent.map((content, index) => (
            <section key={content.id} className={styles.learningCard} aria-labelledby={`card-title-${index}`}>
              <div className={styles.cardHeader}>
                <span className={styles.topic}>{content.category?.toUpperCase() || "LEARNING"}</span>
                <div className={styles.cardActions}>
                  <button type="button" aria-label="Save this lesson">☆</button>
                  <button type="button" aria-label="More options">•••</button>
                </div>
              </div>
              {isArticle(content) && <ArticleCard content={content} />}
              {isRiddle(content) && <RiddleCard content={content} />}
              {isPuzzle(content) && <PuzzleCard content={content} />}
              {isQuiz(content) && <QuizCard content={content} />}
            </section>
          ))}

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
