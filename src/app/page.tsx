"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";
import { dummyContent } from "@/data/dummy-content";
import { ArticleCard } from "@/components/ArticleCard";
import { RiddleCard } from "@/components/RiddleCard";
import { PuzzleCard } from "@/components/PuzzleCard";
import { QuizCard } from "@/components/QuizCard";
import { isArticle, isRiddle, isPuzzle, isQuiz } from "@/types/content";

const transitionDuration = 360;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const lastNavigationAt = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const activeContent = dummyContent[activeIndex];

  function navigate(step: 1 | -1) {
    if (activeIndex === 0 && step === -1) return;

    const now = Date.now();
    if (now - lastNavigationAt.current < transitionDuration) return;

    lastNavigationAt.current = now;
    setDirection(step === 1 ? "next" : "previous");
    setActiveIndex((currentIndex) =>
      (currentIndex + step + dummyContent.length) % dummyContent.length,
    );
  }

  function handleWheel(event: React.WheelEvent<HTMLElement>) {
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX) || event.deltaY === 0) return;
    event.preventDefault();
    navigate(event.deltaY > 0 ? 1 : -1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    navigate(event.key === "ArrowDown" ? 1 : -1);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    const startY = touchStartY.current;
    const endY = event.changedTouches[0]?.clientY;
    touchStartY.current = null;
    if (startY === null || endY === undefined || Math.abs(startY - endY) < 48) return;
    navigate(startY > endY ? 1 : -1);
  }

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
          <a href="/profile"><span>i</span> Profile</a>
        </nav>
        <div className={styles.sidebarFooter}>
          <span className={styles.statusDot} />
          <span>Daily learning<br /><strong>session 01</strong></span>
        </div>
      </aside>

      <main
        className={styles.feed}
        id="discover"
        onKeyDown={handleKeyDown}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
        tabIndex={0}
      >
        <div className={styles.feedScroller}>
          <div className={styles.feedTopline}>
            <div>
              <p className={styles.eyebrow}>Monday, August 24</p>
              <h1>Stay curious.</h1>
            </div>
            <div className={styles.counter}><span>{(activeIndex + 1).toString().padStart(2, '0')}</span> / {dummyContent.length.toString().padStart(2, '0')}</div>
          </div>

          <section
            key={activeContent.id}
            className={`${styles.learningCard} ${direction === "next" ? styles.enterNext : styles.enterPrevious}`}
            aria-labelledby={`card-title-${activeIndex}`}
          >
            {isArticle(activeContent) && <ArticleCard content={activeContent} />}
            {isRiddle(activeContent) && <RiddleCard content={activeContent} />}
            {isPuzzle(activeContent) && <PuzzleCard content={activeContent} />}
            {isQuiz(activeContent) && <QuizCard content={activeContent} />}
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
